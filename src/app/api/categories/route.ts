import prisma from "@/lib/prisma"
import { NextRequest } from "next/server"

export async function GET(req:NextRequest) {

  const categories = await prisma.category.findMany()
  return Response.json(categories)
}
