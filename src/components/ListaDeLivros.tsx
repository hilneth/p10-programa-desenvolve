"use client"

import { useState } from "react"
import { BookCard } from "./BookCard"
import type { Book } from "@/types/book"

interface ListaDeLivrosProps {
  books: Book[]
}

export function ListaDeLivros({ books }: ListaDeLivrosProps) {
  const [search, setSearch] = useState("")
  const [genreFilter, setGenreFilter] = useState("")

  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())

    const matchGenre = genreFilter ? book.genre === genreFilter : true

    return matchSearch && matchGenre
  })

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-col sm:flex-row">
        {/* Input de busca */}
        <input
          type="text"
          placeholder="Buscar por título ou autor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 border rounded-lg p-2"
        />

        {/* Filtro por gênero */}
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="w-full sm:w-1/3 border rounded-lg p-2"
        >
          <option value="">Todos os gêneros</option>
          <option value="Programação">Programação</option>
          <option value="Fantasia">Fantasia</option>
          <option value="Romance">Romance</option>
          <option value="Ficção">Ficção</option>
          <option value="Biografia">Biografia</option>
          <option value="História">História</option>
          <option value="Psicologia">Psicologia</option>
        </select>
      </div>

      {/* Listagem */}
      {filteredBooks.length === 0 ? (
        <p className="text-gray-500">Nenhum livro encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}
