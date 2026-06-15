import { databases } from "@/models/server/config";
import { db, questionCollection } from "@/models/name";
import { ID } from "node-appwrite";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const question = await databases.createDocument(
      db,
      questionCollection,
      ID.unique(),
      body,
    );

    return NextResponse.json(question);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create question" },
      { status: 500 },
    );
  }
}
