import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import Post from "@/src/models/Post";

export const GET = async (request,{params}) => {

    const {id} = params;
  try {
    await connect();

    const post = await Post.findById(id);
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return new NextResponse("Database connection failed", { status: 500 });
  }
};
