import { FilterIcon, Search } from "lucide-react";
import BookCard from "../BookCard";
import { livros } from "@/src/utils/book";
import Link from "next/link";

export default function ListBook() {
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
        {livros.map((livro) => (
          <Link href={`/livros/${livro.id}`} key={livro.id}>
            <BookCard
              id={livro.id}
              title={livro.title}
              date={livro.date}
              genre={livro.genre}
              rating={livro.rating}
              status={livro.status}
              imageBook={livro.imageBook}
              authorName={livro.authorName}
              sinopse={livro.sinopse}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
