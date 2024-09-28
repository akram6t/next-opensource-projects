import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { Resend } from 'resend';
import User from '@/models/user.model';
import { connectToDB } from '@/lib/db';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    try {
        // Connect to the database
        await connectToDB();

        // Parse the request body
        const { email } = await req.json();

        // Validate the input
        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Check if the admin exists
        const admin = await User.findOne({ email });
        if (!admin) {
            return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
        }

        // Generate a JWT token for password reset
        const resetToken = jwt.sign({ id: admin._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        // Save the reset token and expiry in the admin document
        admin.forgotPasswordToken = resetToken;
        admin.forgotPasswordExpiry = new Date(Date.now() + 3600000); // 1 hour
        await admin.save();

        // Send the reset email
        const resetLink = `${process.env.BASE_URL}/reset-password?token=${resetToken}`;
        await resend.emails.send({
            from: `<onboarding@resend.dev>`,
            to: admin.email,
            subject: 'Password Reset Request',
            html: `Click <a href="${resetLink}">here</a> to reset your password.`,
        });

        // Return a success message
        return NextResponse.json({ message: 'Password reset email sent' }, { status: 200 });
    } catch (error) {
        console.error('Error in forgot password:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}