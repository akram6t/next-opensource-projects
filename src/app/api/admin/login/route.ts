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
        const { email, password } = await req.json();

        // Validate the input
        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        // Check if the admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        // Return the token
        return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
        console.error('Error in login:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}