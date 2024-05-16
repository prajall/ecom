import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  try {
    if(!email || !password){
      return new NextResponse({message:"Email and Password are required",status:400})
    }
    const registeredUser = await prisma.user.create({ data: { email, password } });
    console.log(registeredUser);


    
    return new NextResponse("response");
  } catch (error) {
    console.log("/api/register-user ERROR: ", error);
  }
}

export async function GET() {
  console.log("get called");
}
