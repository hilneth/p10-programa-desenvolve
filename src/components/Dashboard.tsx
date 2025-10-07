"use client"
import { useEffect, useState } from "react";
import CustomPieChart from "../data/CustomPie"
import BookCard from "./BookCard"
import ListBook from "./ListBook";
import { organizarLista } from "../lib/organizarLista";
import { Book } from "../types/TLivro";
import Link from "next/link";

export default function Dashboard() {
  const [book, setBook] = useState<Book>({
    id: "",
    createdat: '',
    updatedat: new Date(),
    title: '',
    author: '',
    genre: '',
    rating: 0,
    status: 'unread',
    cover: '',
    synopsis: '',
    currentpage: 0,
    categoryid: undefined,
    year: undefined,
    pages: undefined,
    isbn: '',
    formatCreatedAt: "",
    formatUpdatedAt: ""
  })
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchLatestBook() {
      try {
        const res = await fetch("/api/livro/latest");
        if (!res.ok) throw new Error("Failed to fetch book");
        const data = await res.json();
        organizarLista(data)
        setBook(data);
      } catch (error) {
        console.error(error);
        
      }
    }
    fetchLatestBook();
  }, []);


  async function handleDelete(id: string) {

    if (!confirm(`Certeza que deseja deletar livro"?`)) return
    try {
      const res = await fetch(`/api/livro/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Erro ao excluir");
    async function fetchLatestBook() {
      try {
        const res = await fetch("/api/livro/latest");
        if (!res.ok) throw new Error("Failed to fetch book");
        const data = await res.json();
        organizarLista(data)
        setBook(data);
      } catch (error) {
        console.error(error);
        
      }
    }
      await fetchLatestBook();
    } catch (err) {
      console.error(err);
      alert("Erro ao excluir livro");
    }
  }

  return (
    <main className="w-full lg:w-[95%] xl:w-[1108px] flex rounded-[30px]  p-4 justify-center lg:justify-between">
      <div className="bg-white w-[508px] min-h-[544px] rounded-[30px] p-5">
        <h3 className="text-black">
          <strong>Dashboard</strong>
        </h3>
        <CustomPieChart />
        <h3 className="text-black">
          <strong>Livro recente</strong>
        </h3>
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
            onDelete={handleDelete}
            />
      </div>
      <div className="hidden lg:flex">
        <ListBook />
      </div>
    </main>
  );
}