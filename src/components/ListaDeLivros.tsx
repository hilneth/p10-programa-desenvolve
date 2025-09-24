 ; "use client"

import { useState, useMemo } from "react"
import { CardLivro } from "./CardLivro"
import type { Book } from "@/types/book"
import { Search, Filter } from "lucide-react" // ícones bonitos do shadcn/lucide

interface ListaDeLivrosProps {
  books: Book[]
}
  // Componente principal que renderiza a lista de livros
export function ListaDeLivros({ books }: ListaDeLivrosProps) {
  // Estado para armazenar o texto digitado na busca
  const [search, setSearch] = useState("")
  // Estado para armazenar o gênero selecionado no filtro
  const [genreFilter, setGenreFilter] = useState("")

  // useMemo para gerar automaticamente a lista de gêneros disponíveis
  // percorre os livros e cria uma lista sem repetições
  const genres = useMemo(() => {
    const uniqueGenres = Array.from(new Set(books.map((b) => b.genre).filter(Boolean)))
    return uniqueGenres.sort()
  }, [books])

  
  // Lógica de filtragem:
  // 1. matchSearch → verifica se o título ou autor contém o texto buscado
  // 2. matchGenre → verifica se o livro pertence ao gênero selecionado
  // 3. Retorna apenas os livros que satisfazem ambos os critérios
  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())

    const matchGenre = genreFilter ? book.genre === genreFilter : true

    return matchSearch && matchGenre
  })

  return (
    <div className="space-y-6">
      {/* Barra de busca + filtro */}
      <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border w-full">
        {/* Filtro por gênero */}
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            className="border-none bg-transparent focus:ring-0 text-gray-700"
          >
            <option value="">Todos os gêneros</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Input de busca */}
        <div className="flex items-center gap-2 flex-1 border-l pl-3">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar livro..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-none bg-transparent focus:ring-0 text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Lista de livros */}
      {filteredBooks.length === 0 ? (
        <p className="text-gray-500 text-center">Nenhum livro encontrado.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredBooks.map((book) => (
            <CardLivro key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}
