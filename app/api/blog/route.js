import { NextResponse } from "next/server";
import Blogitem from "@/lib/models/Blogitem";
import { connectdb } from "@/lib/config/db";

connectdb();

export async function POST(req) {
  const { title, description, author, author_img, image } = await req.json();

  // if (!title || !description || !author || !image) {
  //   return NextResponse.json({
  //     error: "Missing required fields: id, title, description, author, slug",
  //   });
  // }
  const blog = await Blogitem.create({
    title,
    description,
    author,
    author_img,
    image,
  });

  return NextResponse.json({
    success: true,
    message: " blog create successfull",
  });
}
