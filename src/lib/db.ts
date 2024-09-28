// @/config/database.ts

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;
const DATABASE_NAME = process.env.DATABASE_NAME! || 'your_default_database_name';

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// let cached = (global as any).mongoose;

// if (!cached) {
// cached = (global as any).mongoose = { conn: null, promise: null };
// }

export async function connectToDB() {
  // if (cached.conn) {
  // return cached.conn;
  // }

  // if (!cached.promise) {
  const opts = {
    dbName: DATABASE_NAME,
  };

  await mongoose.connect(MONGODB_URI, opts);
}