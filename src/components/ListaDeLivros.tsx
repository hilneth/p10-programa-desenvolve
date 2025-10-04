("use client");

import { useState, useMemo } from "react";
import { CardLivro } from "./CardLivro";
import type { Book } from "../types/TLivro";
import { Search, Filter } from "lucide-react";

interface ListaDeLivrosProps {
  books: Book[];
}

export function ListaDeLivrosProps({ books }: ListaDeLivrosProps) {
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const genres = useMemo(() => {
    const uniqueGenres = Array.from(
      new Set(books.map((b) => b.genre).filter(Boolean))
    );
    return uniqueGenres.sort();
  }, [books]);

  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchGenre = genreFilter ? book.genre === genreFilter : true;

    return matchSearch && matchGenre;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border w-full">
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
  );
}
