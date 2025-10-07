import prisma from "@/lib/prisma"
import { Book } from "@/src/generated/prisma"
import { NextRequest } from "next/server"


export async function GET(req:NextRequest, {params}: {params:Promise<Book>}) {
  const parameters = await params
  const book = await prisma.book.findUnique({
    where: { id: parameters.id },
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    const book = await prisma.book.delete({
      where: { 
        id: id, 
      },
    })

    return Response.json(book)
  } catch (err) {
    console.error(err)
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    const data = await req.json() 

    const book = await prisma.book.update({
      where: { id },
      data, 
    })

    return Response.json(book)
  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    )
  }
}