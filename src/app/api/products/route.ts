import { prisma } from "../../../utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const products = await prisma.product.findMany();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

export const POST = () => {
  return new NextResponse("HELLO", { status: 2000 });
};
