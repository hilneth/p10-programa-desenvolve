import Image from "next/image";
import { Edit2Icon, Star, Trash2Icon } from "lucide-react";
import { Book } from "../types/TLivro";
import Link from "next/link";

type BookCardProps = Book & {
  onEdit?: (book: Book) => void
  onDelete: (id: string) => void
}

export default function BookCard({ id, cover, title, formatCreatedAt, genre, rating, status, onEdit, onDelete }: BookCardProps) {

  async function handleDelete() {
    onDelete(id)
}

  return (
    <article className="w-max[320px] h-max-48 flex gap-4 p-4 rounded-lg shadow-sm border border-gray-200">
    <Link href={`/livros/${id}`} key={id}>
      <Image
        src={ cover ? cover : "/images/meme.jpg"}
        width={112}
        height={160}
        alt="Meme"
        className="object-cover rounded-md border border-gray-200"
      /></Link>
      <div className="flex flex-col gap-1 w-full">
        <h4 className="text-lg font-semibold">{title}</h4>

        <div className="flex flex-col text-sm text-gray-600 gap-1">
          <div className="flex gap-10">
            <div className="w-[70px] h-[40px] flex flex-col">
              <span className="font-normal">Adicionado</span>
              <span className="font-semibold text-black">{formatCreatedAt}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-normal">Gênero</span>
              <span className="font-semibold text-black truncate">{genre}</span>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="w-[70px] h-[40px] flex flex-col items-start">
              <p className="text-gray-600">Avaliação</p>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-black">{rating}</span>
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </div>
            </div>

            <div className="flex flex-col text-sm">
              <span className="font-medium text-gray-600">Status</span>
              <span className="font-semibold text-black">{status}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <button
            type="button"
            onClick={handleDelete}
            aria-label="Excluir"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 cursor-pointer"
          >
            <Trash2Icon className="w-4 h-4" />
            <span className="text-sm">Excluir</span>
          </button>
          <Link href={`/livros/editar/${id}`}>
          <button
              type="button"
              // onClick={handleEdit}
              aria-label="Editar"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-100 text-green-700 hover:bg-green-200 border border-green-100 cursor-pointer"
            >
              <Edit2Icon className="w-4 h-4" />
              <span className="text-sm">Editar</span>
            </button>
            </Link>
        </div>
      </div>
    </article>
  );
}
