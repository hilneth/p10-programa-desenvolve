"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, Edit } from "lucide-react"
import type { Book } from "@/types/book"

interface CardLivroProps {
  book: Book
  onEdit?: (book: Book) => void
  onDelete?: (id: string) => void
}

export function CardLivro({ book, onEdit, onDelete }: CardLivroProps) {
  return (
    <Card className="flex items-start gap-4 p-4 shadow-sm border rounded-xl bg-white">
      {/* Capa do livro */}
      <div className="w-20 h-28 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={book.coverUrl || "/placeholder-book.png"}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo à direita */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Título e autor */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{book.title}</h3>
          <p className="text-sm text-gray-500">de {book.author}</p>
        </div>

        {/* Detalhes do livro */}
        <div className="mt-2 text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium">Status:</span> {book.status}
          </p>
          <p>
            <span className="font-medium">Avaliação:</span>{" "}
            {book.rating ? `${book.rating}/5` : "—"}
          </p>
          <p>
            <span className="font-medium">Início:</span>{" "}
            {book.startDate || "—"}
          </p>
          <p>
            <span className="font-medium">Gênero:</span> {book.genre || "—"}
          </p>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-2 justify-end mt-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onEdit?.(book)}
            className="flex items-center gap-1"
          >
            <Edit className="w-4 h-4" />
            Editar
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => onDelete?.(book.id)}
            className="flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            Excluir
          </Button>
        </div>
      </div>
    </Card>
  )
}
