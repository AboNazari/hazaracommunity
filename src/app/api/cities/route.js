import { connectToDatabase } from "../../../lib/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectToDatabase();
    const cities = await db.collection("cities").find({}).toArray();
    return NextResponse.json(cities);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.error(error);
  }
};
