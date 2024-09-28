import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/user.model';
import { connectToDB } from '@/lib/db';

export async function POST(req: Request) {
    try {
        // Connect to the database
        await connectToDB();

        // Parse the request body
        const { fullName, email, password } = await req.json();

        // Validate the input
        if (!fullName || !email || !password) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new admin
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        // Save the admin to the database
        await newUser.save();

        // Return the created admin
        return NextResponse.json({ admin: newUser }, { status: 201 });
    } catch (error) {
        console.error('Error in signup:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}