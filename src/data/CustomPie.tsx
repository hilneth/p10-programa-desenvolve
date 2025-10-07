"use client"

import { useEffect, useState } from "react"

type StatusData = {
  status: string
  count: number
  percent: number
}

export default function PieChart() {
  const [data, setData] = useState<StatusData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/livro/status")
      const json = await res.json()
      console.log(json)
      setData(json)
    }
    fetchData()
  }, [])

  if (data.length === 0)
    return <p className="text-center text-gray-500">Carregando...</p>

  const colors: Record<string, string> = {
    QUERO_LER: "stroke-orange-500",
    LENDO: "stroke-blue-900",
    LIDO: "stroke-pink-400",
    PAUSADO: "stroke-green-400",
    ABANDONADO: "stroke-gray-400",
  }

  let offset = 0

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      <svg viewBox="0 0 200 200" className="w-48 h-48">
        <g transform="rotate(-90 100 100)">
          {data.map(({ status, percent }, i) => {
            const circle = (
              <circle
                key={status}
                cx="100"
                cy="100"
                r="80"
                pathLength="100"
                className={`fill-none ${colors[status]} stroke-[8px]`}
                style={{
                  strokeDasharray: `${percent} ${100 - percent}`,
                  strokeDashoffset: `-${offset}`,
                }}
              />
            )
            offset += percent
            return circle
          })}
        </g>
      </svg>

      <ul className="mt-6 md:mt-0 md:ml-8 space-y-3 text-gray-700">
        {data.map(({ status, percent }) => (
          <li key={status} className="flex items-center">
            <span
              className={`w-4 h-4 rounded-sm mr-2 ${
                status === "QUERO_LER"
                  ? "bg-orange-500"
                  : status === "LENDO"
                  ? "bg-blue-900"
                  : status === "LIDO"
                  ? "bg-pink-400"
                  : status === "PAUSADO"
                  ? "bg-green-400"
                  : "bg-gray-400"
              }`}
            />
            <span>
              {percent.toFixed(1)}%{" "}
              {{
                QUERO_LER: "A iniciar",
                LENDO: "Lendo",
                LIDO: "Lido",
                PAUSADO: "Pausado",
                ABANDONADO: "Abandonado",
              }[status]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
