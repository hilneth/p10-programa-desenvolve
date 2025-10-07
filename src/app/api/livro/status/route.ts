import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const statuses = ["QUERO_LER", "LENDO", "LIDO", "PAUSADO", "ABANDONADO"] as const

  const counts = await Promise.all(
    statuses.map(async (status) => ({
      status,
      count: await prisma.book.count({ where: { status } }),
    }))
  )

  const total = counts.reduce((acc, curr) => acc + curr.count, 0)

  const percentages = counts.map((item) => ({
    status: item.status,
    count: item.count,
    percent: total > 0 ? (item.count / total) * 100 : 0,
  }))
  return NextResponse.json(percentages)
}