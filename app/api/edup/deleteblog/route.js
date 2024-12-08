import Blogitem from "@/lib/models/Blogitem";
import { connectdb } from "@/lib/config/db";
import { NextResponse } from "next/server";

connectdb();

export async function DELETE(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const { id } = body;

    // Validate the ID
    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    // Find and delete the blog item
    const res = await Blogitem.findByIdAndDelete(id);

    if (!res) {
      return NextResponse.json(
        { success: false, error: "Blog item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Blog deleted" });
  } catch (error) {
    console.error("Error deleting blog item:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
