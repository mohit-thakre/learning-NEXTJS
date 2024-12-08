import { connectdb } from "@/lib/config/db";
import Blogitem from "@/lib/models/Blogitem";
import { NextResponse } from "next/server";

export async function DELETE() {
  const res = await Blogitem.deleteMany({});
  if (!res) {
    return NextResponse.json({
      success: false,
      message: "deleted unsuccessful",
    });
  }
  return NextResponse.json({
    success: true,
    message: "delelted successful",
  });
}
