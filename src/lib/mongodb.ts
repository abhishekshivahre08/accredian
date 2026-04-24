import mongoose from 'mongoose'
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Hamesha environment variable use karein. 
// Hardcoded string sirf local testing ke liye theek thi.
// src/lib/mongodb.ts mein line 4 ko replace karein:

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined
}

// Global cache ko handle karne ka sahi tarika 
let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null }
global.mongooseCache = cached

// let cached = global.mongooseCache

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null }
}

async function connectDB(): Promise<typeof mongoose> {
  // 1. Agar connection pehle se hai, toh wahi return karo
  if (cached.conn) {
    return cached.conn
  }

  // 2. Agar connection process shuru nahi hua, toh start karo
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('MongoDB Connected Successfully ✅')
      return mongooseInstance
    })
  }

  // 3. Promise ka wait karo aur result ko cache mein save karo
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null // Agar error aaye toh promise reset karo taaki next time try kar sakein
    throw e
  }

  return cached.conn
}

export default connectDB
