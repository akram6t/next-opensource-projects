import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '@/models/admin.model';
import { connectToDB } from '@/lib/db';

export async function POST(req: Request) {
    try {
        // Connect to the database
        await connectToDB();

        // Parse the request body
        const { token, newPassword } = await req.json();

        // Validate the input
        if (!token || !newPassword) {
            return NextResponse.json({ error: 'Token and new password are required' }, { status: 400 });
        }

        // Verify the JWT token
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
        } catch (error) {
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
        }

        // Check if the token is valid and not expired
        const admin = await Admin.findOne({
            forgotPasswordToken: token,
            forgotPasswordExpiry: { $gt: new Date() },
        });

        if (!admin) {
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update the admin's password and clear the reset token fields
        admin.password = hashedPassword;
        admin.forgotPasswordToken = undefined;
        admin.forgotPasswordExpiry = undefined;
        await admin.save();

        // Return a success message
        return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error in set password:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}