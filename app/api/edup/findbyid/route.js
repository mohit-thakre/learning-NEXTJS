import Blogitem from "@/lib/models/Blogitem";
import { connectdb } from "@/lib/config/db";
import { NextResponse } from "next/server";

connectdb();

export async function POST(req) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    const res = await Blogitem.findById(id);

    if (!res) {
      return NextResponse.json(
        { success: false, error: "Blog item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: res });
  } catch (error) {
    console.error("Error fetching blog item:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
