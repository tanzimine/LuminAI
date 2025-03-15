import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    if (!url) {
      throw new Error('MongoDB URL is not provided');
    }

    mongoose.set('strictQuery', true);

    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default connectDB;