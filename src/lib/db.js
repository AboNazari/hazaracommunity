import mongoose from "mongoose";

let cachedConnection = null;

export async function connectToDatabase() {
  if (cachedConnection) {
    console.log("Using existing database connection");
    return cachedConnection.connection.db;
  }

  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("New database connection established");
    cachedConnection = dbConnection;
    return dbConnection.connection.db;
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw new Error("Database connection failed");
  }
}
