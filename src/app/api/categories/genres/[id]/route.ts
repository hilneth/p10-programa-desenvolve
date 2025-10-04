import prisma from "@/lib/prisma"
import { NextRequest } from "next/server"


export async function DELETE(req:NextRequest, {params}:{params:Promise<string>}) {
  const { id } = await params
  try{
    const category = await prisma.category.delete({
        where: { 
            id: parseInt(id), 
        },
    })
    return Response.json(category)
  }catch(err){
    console.log(err)
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    )    
  }
}