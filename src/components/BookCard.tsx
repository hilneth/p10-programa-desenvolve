import Image from "next/image";
import { Edit2Icon, Star, Trash2Icon } from "lucide-react";

/**
 * Props
 * - cover (React node or string URL) optional
 * - title (string)
 * - startDate (string, e.g., "16/09/2025")
 * - genre (string)
 * - rating (number, 0-5)
 * - status (string)
 * - onDelete (fn)
 * - onEdit (fn)
 * - StarIcon, TrashIcon, EditIcon (React components for your SVGs)
 */

export interface IBookCard {
  id: string;
  imageBook: string;
  title: string;
  date: string;
  genre: string;
  rating: number;
  status: string;
  authorName: string;
  sinopse: string;
  // onDelete: () => void;
  // onEdit: () => void;
}

export default function BookCard({ imageBook, title, date, genre, rating, status }: IBookCard) {


  return (
    <article className="w-[350px] h-48 flex gap-4 p-4 rounded-lg shadow-sm border border-gray-200">
      <Image
        src={ imageBook ? imageBook : "/images/meme.jpg"}
        width={116}
        height={112}
        alt="Meme"
        className="w-28 h-40 object-cover rounded-md border border-gray-200"
      />
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="flex flex-col w-full text-sm text-gray-600 gap-1">
          <div className="w-42 flex justify-between gap-4">
            <div className="w-24 flex flex-col">
              <span className="font-medium text-gray-600">Início</span>
              <span className="font-semibold text-black">{date}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Gênero</span>
              <span className="font-semibold text-black">{genre}</span>
            </div>
          </div>

          <div className="w-44 justify-between flex items-center">
            <div className="flex flex-col items-start">
              <p className="text-gray-600">Avaliação</p>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-black">{rating}</span>
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </div>
            </div>

            <div className="flex flex-col text-sm">
              <span className="font-medium text-gray-600">Status:</span>
              <span className="font-semibold text-black">{status}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            // onClick={onDelete}
            aria-label="Excluir"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 cursor-pointer"
          >
            <Trash2Icon className="w-4 h-4" />
            <span className="text-sm">Excluir</span>
          </button>

          <button
            type="button"
            // onClick={onEdit}
            aria-label="Editar"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-100 text-green-700 hover:bg-green-200 border border-green-100 cursor-pointer"
          >
            <Edit2Icon className="w-4 h-4" />
            <span className="text-sm">Editar</span>
          </button>
        </div>
      </div>
    </article>
  );
}
