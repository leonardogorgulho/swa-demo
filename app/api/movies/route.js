import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const y = searchParams.get("year");
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    
    const result = await db
        .collection("movies")
        .find({year: parseInt(y)})
        .limit(50)
        .toArray();

    return NextResponse.json({data: result});
}