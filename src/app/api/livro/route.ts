import prisma from "@/lib/prisma"
import { NextRequest } from "next/server"

export async function GET(req:NextRequest) {

  const { searchParams } = new URL(req.url)
  const genre = searchParams.get("genre")
  const title = searchParams.get("title")
  const author = searchParams.get("author")
  const rating = searchParams.get("rating")
  const year = searchParams.get("year")
  const status = searchParams.get("status")
  
  // console.log(genre, title, author, rating, year, req.url)
  const books = await prisma.book.findMany({
    where: {
      AND:[
        genre ? {genre:{contains:genre}} : {},
        title ? {title:{contains:title}} : {},
        author ? {author:{contains:author}} : {},
        rating ? {rating:parseInt(rating)} : {},
        year ? {year:parseInt(year)} : {},
        status ? {status:status} : {}
      ]
    }

  })
  return Response.json(books)
}

export async function POST(req:NextRequest) {
  const { title, author, genre, year, pages, rating, synopsis, cover, currentpage, status } = await req.json()
  const book = await prisma.book.create({
    data: { 
        title, 
        author, 
        year: parseInt(year) ,
        genre: genre,
        pages: parseInt(pages),
        rating: rating,
        synopsis: synopsis,
        cover: cover,
        status: status ? status : "QUERO_LER",
        currentpage: currentpage ? currentpage : 0

    },
  })
  return Response.json(book)
}