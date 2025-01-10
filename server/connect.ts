import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// @ts-ignore
let cached = global.mongoose;

if (!cached) {
    // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  console.log('Attempting to connect to database...');
  
  if (cached.conn) {
    console.log('👍 Using existing database connection');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('Creating new database connection');
    cached.promise = mongoose.connect(MONGODB_URI).then((conn) => {
      console.log('😍 Database connection successful');
      return conn;
    }).catch((error) => {
      console.error('Database connection error:', error);
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('😎 Database connection established');
    return cached.conn;
  } catch (error) {
    console.error('Failed to establish database connection:', error);
    throw error;
  }
}