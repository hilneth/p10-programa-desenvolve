import prisma from "@/lib/prisma"
import { NextRequest } from "next/server"


export async function POST(req:NextRequest) {
  const { name } = await req.json()
  try{
    const category = await prisma.category.create({
        data: { 
            name: name, 
        },
    })
    return Response.json(category)
  }catch(err){
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    )    
  }
}