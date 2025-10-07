"use client"
import { FilterIcon, Search } from "lucide-react";
import BookCard from "../BookCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Book } from "@/src/types/TLivro"
import { organizarLista } from "@/src/lib/organizarLista";

export default function ListBook() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch("/api/livro");
        if (!res.ok) throw new Error("Failed to fetch books");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book:Book) => {
    organizarLista(book)
    return book.title.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <div className="flex flex-col gap-3 w-[430px] min-h-[544px] rounded-[30px]">
      <form className="w-[430px] flex gap-3">
        <button className="bg-white flex items-center justify-center  w-[50px] h-[50px] rounded-full">
          <FilterIcon />
        </button>
        <div className="w-[380px] flex gap-2 items-center justify-center bg-white rounded-full p-3 ">
          <button className="cursor-pointer">
            <Search className="text-zinc-400" />
          </button>
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Pesquisa"
          />
        </div>
      </form>
      <div className="bg-white min-h-[450px] max-h-[640px] flex flex-col gap-2 overflow-auto rounded-[30px] p-5">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book:Book) => (
            <Link href={`/livros/${book.id}`} key={book.id}>
              <BookCard
                id={book.id}
                title={book.title}
                formatCreatedAt={book.formatCreatedAt || book.createdat}
                genre={book.genre}
                rating={book.rating}
                status={book.status}
                cover={book.cover}
                author={book.author}
                synopsis={book.synopsis || ""}
                createdat=""
                updatedat= {new Date()}
                currentpage={0}
              />
            </Link>
          ))
        ) : (
          <p className="text-center text-zinc-500">No books found.</p>
        )}
      </div>
    </div>
  );
}
