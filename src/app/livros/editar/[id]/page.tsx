"use client"
import { ChevronLeft, Edit2Icon, Star, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { organizarLista } from "@/src/lib/organizarLista";
import { Book } from "@/src/types/TLivro"
import React from "react";
import Link from "next/link";

interface Params {
  params: { id: string };
}

export default function EditBookPage({ params } : { params: Promise<{ id: string }> }) {
  const parameters = React.use(params)

  const [book, setBook] = useState<Book>({
    id: "",
    createdat: '',
    updatedat: new Date(),
    title: '',
    author: '',
    genre: '',
    rating: 0,
    status: 'unread',
    cover: "/images/meme.jpg",
    synopsis: '',
    currentpage: 0,
    categoryid: undefined,
    year: undefined,
    pages: undefined,
    isbn: '',
    formatCreatedAt: "",
    formatUpdatedAt: ""
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchBook() {
      try {
        const res = await fetch("/api/livro/" + parameters.id);
        if (!res.ok) throw new Error("Falha ao coletar livro");
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBook();
  }, []);
  

  const [message, setMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setBook(prev => ({
      ...prev,
      [name]:
        name === 'rating' ||
        name === 'pages' ||
        name === 'year' ||
        name === 'currentpage'
          ? Number(value)
          : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('Salvando...')

    const res = await fetch('/api/livro/' + parameters.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })

    if (res.ok) {
      const newBook = await res.json()
      setMessage(`Livro "${newBook.title}" atualizado com sucesso`)
      setBook({
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
    } else {
      setMessage('Falha ao atualizar o livro.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mb-[80px] bg-white rounded-[20px] shadow">
      <h1 className="text-2xl font-bold mb-4">Editar livro {book.title}</h1>
      {message && <p className="mt-4 text-gray-700">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          placeholder="Titulo"
          value={book.title}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="author"
          placeholder="Autor"
          value={book.author}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="genre"
          placeholder="Genero"
          value={book.genre}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="year"
          type="number"
          placeholder="Ano"
          value={book.year || ''}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="pages"
          type="number"
          placeholder="Total de Paginas"
          value={book.pages || ''}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="isbn"
          placeholder="ISBN"
          value={book.isbn || ''}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="cover"
          placeholder="Capa URL"
          value={book.cover || "https://picsum.photos/200/300"}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <textarea
          name="synopsis"
          placeholder="Sinopses"
          value={book.synopsis}
          onChange={handleChange}
          className="border p-2 w-full rounded h-24"
        />
        <input
          name="rating"
          type="number"
          placeholder="Nota"
          min="0"
          max="5"
          step="1"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="currentpage"
          type="number"
          placeholder="Pagina"
          min="0"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <select
          name="status"
          value={book.status}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="QUERO_LER">A iniciar</option>
          <option value="LENDO">Lendo</option>
          <option value="LIDO">Lido</option>
          <option value="PAUSADO">Pausado</option>
          <option value="ABANDONADO">Abandonado</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
