import Blogitem from "@/lib/models/Blogitem";
import { NextResponse } from "next/server";

import { connectdb } from "@/lib/config/db";

connectdb();

export async function GET() {
  const res = await Blogitem.find();
  return NextResponse.json({ success: true, data: res });
}
