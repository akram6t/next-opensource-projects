import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/user.model'; // Adjust the path as necessary
import mongoose from 'mongoose';
import { connectToDB } from '@/lib/db';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
        return NextResponse.json({ error: 'Verification token is required' }, { status: 400 });
    }

    try {
        // Connect to the database
       await connectToDB();

        // Find the user with the given verification token
        const user = await User.findOne({ verifyToken: token });

        if (!user) {
            return NextResponse.json({ error: 'Invalid verification token' }, { status: 400 });
        }

        // Check if the token has expired
        if (user.verifyTokenExpiry < new Date()) {
            return NextResponse.json({ error: 'Verification token has expired' }, { status: 400 });
        }

        // Update the user's verification status
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({ message: 'Email verified successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error verifying email:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    } finally {
        // Close the database connection
        await mongoose.connection.close();
    }
}