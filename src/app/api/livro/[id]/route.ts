import prisma from "@/lib/prisma"
import { Book } from "@/src/generated/prisma"
import { NextRequest } from "next/server"


export async function GET(req:NextRequest, {params}: {params:Book}) {
  const book = await prisma.book.findUnique({
    where: { id: params.id },
  })
  if (!book) return new Response(JSON.stringify({ error: "Not found" }), { status: 404 })
  return Response.json(book)
}

export async function POST(req:NextRequest, {params}: {params:Promise<Book>}) {
  const bookdata = await req.json()
  const { id } = await params  
  try {
    const book = await prisma.book.update({
      where: { id: id },
      data: bookdata ,
    })
    return Response.json(book)
  } catch {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 })
  }
}