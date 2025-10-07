
import { livros } from "@/src/utils/book";
import { ChevronLeft, Edit2Icon, Star, Trash2Icon } from "lucide-react";
import Image from "next/image";




interface Params {
  params: { id: string };
}

export default async function BookDetailsPage({ params }: Params) {
  const parameters = await params
  const book = livros.find((b) => b.id === parameters.id);


  if (!book) {
    return "Livro não encontrado"
  }

  const getYearFromBrazilianDate = (dateStr: string) => {
    const parts = dateStr.split("/");
    return parts[2];
  };

  return (
    <section className="w-[90%] xl:w-[1080px] gap-3 items-center flex flex-col md:flex-row justify-around xl:justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <ChevronLeft />
          <h3>Detalhes do Livro</h3>
        </div>

        <Image
          className="w-[200px] md:w-[300px] h-[250px] md:h-[450px] bg-zinc-200 rounded"
          width={200}
          height={300}
          alt={`Capa do livro ${book.title}`}
          src={book.imageBook}
        />

        <div className="flex gap-4 md:gap-8">
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

      <div className="flex flex-col gap-6 sm:w-[500px] xl:w-[700px] p-6 rounded-lg">
        <h3 className="text-3xl font-semibold">{book.title}</h3>

        <div className="flex flex-col text-gray-600 gap-8">
          <div className="flex justify-between gap-4 w-full">
            <div className="flex flex-col">
              <span className="font-medium text-gray-600">Início</span>
              <span className="font-semibold text-black">{book.date}</span>
            </div>

            <div className="w-[150px]">
              <div className="flex flex-col items-start">
                <span className="font-medium text-gray-600">Gênero</span>
                <span className="font-semibold text-black">Ação</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col items-start">
              <span className="font-medium text-gray-600">Avaliação</span>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-black">{book.rating}</span>
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </div>
            </div>

            <div className="w-[150px]">
              <div className="flex flex-col items-start">
                <span className="font-medium text-gray-600">Status</span>
                <span className="font-semibold text-black">{book.status}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4 w-full">
            <div className="flex flex-col">
              <span className="font-medium text-gray-600">Autor</span>
              <span className="font-semibold text-black">
                {book.authorName}
              </span>
            </div>

            <div className="w-[150px]">
              <div className="flex flex-col items-start">
                <span className="font-medium text-gray-600">
                  Ano de publicação
                </span>
                <span className="font-semibold text-black">
                  {getYearFromBrazilianDate(book.date)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p>Sinopse</p>
            <p className="font-semibold">{book.sinopse}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
