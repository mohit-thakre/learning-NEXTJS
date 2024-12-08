import Blogitem from "@/lib/models/Blogitem";
import { connectdb } from "@/lib/config/db";
import { NextResponse } from "next/server";

connectdb();

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, title, description, image } = body;
    console.log(id, title);
    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    const res = await Blogitem.findByIdAndUpdate(id);

    if (!res) {
      return NextResponse.json(
        { success: false, error: "Blog item not found" },
        { status: 404 }
      );
    }
    const newdata = await Blogitem.create(
      {
        title,
        description,
        image,
      },
      { new: true }
    );

    return NextResponse.json({ success: true, data: newdata });
  } catch (error) {
    console.error("Error fetching blog item:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
