import prisma from "@/lib/prisma"
import { Book } from "@/src/types/TLivro";
import { NextRequest } from "next/server"

export async function GET(req:NextRequest) {
  const books = await prisma.book.findMany();
  books.sort((a: Book, b: Book) => new Date(b.createdat).getTime() - new Date(a.createdat).getTime());
  const latestBook = books[0];
  console.log(latestBook)
  return Response.json(latestBook);
}