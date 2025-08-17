// import { NextResponse } from "next/server";

// export async function GET(request) {
//   return NextResponse.json({ message: "Hello, World!" });
// }

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const users = await db.collection("users").find({}).toArray();

    return NextResponse.json({data: users});
}