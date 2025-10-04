// import Image from "next/image";
// import meme from "../../public/images/meme.jpg";
// import { CardLivro } from "../components/CardLivro";
// import { NavigationMenu } from "../components/Header";

// export default function Home() {
//   return (
//     <>
//       <NavigationMenu />
//       <CardLivro
//         book={{
//           id: "1",
//           title: "A menina que roubava livros",
//           author: "autor desconhecido",
//           coverUrl: meme.src,
//           status: "Iniciado",
//           rating: 5,
//           startDate: "2025-02-20",
//           genre: undefined,
//         }}
//       />
//     </>
//   );
// }
"use client";

import { useState } from "react";
import { NavigationMenu } from "../components/Header";
// import { SearchFilter } from "../components/SearchFilter";
import { CardLivro } from "../components/CardLivro";
import { BookForm, BookFormData } from "../components/AdicionarLivro";
import { BookDetailModal } from "../components/DetalhesLivros";
// import { FilterSidebar } from "../components/FilterSidebar";

interface Book {
  id: string;
  title: string;
  author: string;
  startDate: string;
  genre: string;
  rating: number;
  status: string;
  description?: string;
}

interface FilterOptions {
  genres: string[];
  statuses: string[];
  ratingRange: [number, number];
  yearRange: [number, number];
}

export default function BooksDashboard() {
  const [activeTab, setActiveTab] = useState("Books");
  const [searchValue, setSearchValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const [filters, setFilters] = useState<FilterOptions>({
    genres: [],
    statuses: [],
    ratingRange: [0, 5],
    yearRange: [2000, 2024],
  });

  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "Título do Livro",
      author: "Autor do Livro",
      startDate: "16/09/2025",
      genre: "Ação",
      rating: 2.5,
      status: "A iniciar",
      description: "Uma história emocionante sobre aventuras e descobertas.",
    },
    {
      id: "2",
      title: "Outro Título",
      author: "Outro Autor",
      startDate: "16/09/2025",
      genre: "Romance",
      rating: 4.0,
      status: "Lendo",
      description: "Uma linda história de amor e superação.",
    },
    {
      id: "3",
      title: "Terceiro Livro",
      author: "Terceiro Autor",
      startDate: "16/09/2025",
      genre: "Ficção",
      rating: 3.5,
      status: "Concluído",
      description: "Uma narrativa envolvente sobre mundos imaginários.",
    },
  ]);

  // Filter books based on search and filters
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.author.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchValue.toLowerCase());

    const matchesGenre =
      filters.genres.length === 0 || filters.genres.includes(book.genre);
    const matchesStatus =
      filters.statuses.length === 0 || filters.statuses.includes(book.status);
    const matchesRating =
      book.rating >= filters.ratingRange[0] &&
      book.rating <= filters.ratingRange[1];

    return matchesSearch && matchesGenre && matchesStatus && matchesRating;
  });

  const handleBookSubmit = (bookData: BookFormData) => {
    if (editingBook) {
      // Update existing book
      setBooks((prev) =>
        prev.map((book) =>
          book.id === editingBook.id
            ? {
                ...book,
                title: bookData.title,
                author: bookData.author,
                genre: bookData.genre,
                rating: bookData.rating,
                status: bookData.status,
              }
            : book
        )
      );
      setEditingBook(null);
    } else {
      // Add new book
      const newBook: Book = {
        id: Date.now().toString(),
        title: bookData.title,
        author: bookData.author,
        startDate: new Date().toLocaleDateString("pt-BR"),
        genre: bookData.genre,
        rating: bookData.rating,
        status: bookData.status,
        description: "Descrição a ser adicionada...",
      };
      setBooks((prev) => [...prev, newBook]);
    }
    setShowForm(false);
  };

  const handleDeleteBook = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
    setShowDetailModal(false);
  };

  const handleEditBook = (id: string) => {
    const book = books.find((b) => b.id === id);
    if (book) {
      setEditingBook(book);
      setShowForm(true);
      setShowDetailModal(false);
    }
  };

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setShowDetailModal(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingBook(null);
  };

  const handleApplyFilters = () => {
    // Filters are applied automatically through the filteredBooks computed value
    console.log("Filters applied:", filters);
  };

  const handleClearFilters = () => {
    setFilters({
      genres: [],
      statuses: [],
      ratingRange: [0, 5],
      yearRange: [2000, 2024],
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F6] pb-32">
      <div className="max-w-[920px] mx-auto px-4">
        <NavigationMenu activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex gap-8 mt-8">
          <div className="w-[508px]">
            <CardLivro book={books[0]} />
            <div className="mb-6"></div>

            <div className="space-y-6">
              {/* {filteredBooks.map((book) => (
                
              ))} */}

              {filteredBooks.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  {searchValue ||
                  filters.genres.length > 0 ||
                  filters.statuses.length > 0
                    ? "Nenhum livro encontrado com os filtros aplicados."
                    : "Nenhum livro cadastrado."}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Book Form */}
          <div className="flex-1 flex justify-center">
            {showForm ? (
              <BookForm
                onSubmit={handleBookSubmit}
                onCancel={handleCancelForm}
                initialData={
                  editingBook
                    ? {
                        title: editingBook.title,
                        author: editingBook.author,
                        genre: editingBook.genre,
                        rating: editingBook.rating,
                        status: editingBook.status,
                        publicationDate: "2024", // Default value since we don't store this
                      }
                    : undefined
                }
              />
            ) : (
              <div className="w-full max-w-md">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Adicionar novo livro
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals and Sidebars */}
      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          isOpen={showDetailModal}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedBook(null);
          }}
          onEdit={() => handleEditBook(selectedBook.id)}
          onDelete={() => handleDeleteBook(selectedBook.id)}
        />
      )}

      {/* <FilterSidebar
        isOpen={showFilterSidebar}
        onClose={() => setShowFilterSidebar(false)}
        filters={filters}
        onFiltersChange={setFilters}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
      /> */}
    </div>
  );
}
