import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import User from '@/models/user.model';
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

        // Check if the token is valid and not expired
        const user = await User.findOne({
            forgotPasswordToken: token,
            forgotPasswordExpiry: { $gt: new Date() },
        });

        if (!user) {
            return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update the admin's password and clear the reset token fields
        user.password = hashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordExpiry = undefined;
        await user.save();

        // Return a success message
        return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error in set password:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}