"use client";

import { useState } from "react";
import { Star, Upload } from "lucide-react";

interface BookFormProps {
  onSubmit?: (bookData: BookFormData) => void;
  onCancel?: () => void;
  initialData?: Partial<BookFormData>;
}

export interface BookFormData {
  title: string;
  author: string;
  publicationDate: string;
  genre: string;
  rating: number;
  status: string;
}

export function BookForm({ onSubmit, onCancel, initialData }: BookFormProps) {
  const [formData, setFormData] = useState<BookFormData>({
    title: initialData?.title || "",
    author: initialData?.author || "",
    publicationDate: initialData?.publicationDate || "",
    genre: initialData?.genre || "",
    rating: initialData?.rating || 0,
    status: initialData?.status || "A iniciar",
    ...initialData,
  });

  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const genres = [
    "Ação",
    "Romance",
    "Ficção",
    "Terror",
    "Biografia",
    "Fantasia",
    "Mistério",
  ];
  const years = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
  ];

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex mb-6">
          <div className="w-30 h-40 bg-[#D9D9D9] rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
            <Upload className="w-8 h-8 text-gray-500" />
          </div>

          <div className="ml-4 flex flex-col px-4">
            <div className="pb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título
              </label>
              <input
                type="text"
                placeholder="Digite o título"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full h-12 px-4 bg-gray-50 border-0 rounded-lg placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Autor
              </label>
              <input
                type="text"
                placeholder="Digite o nome do autor"
                value={formData.author}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, author: e.target.value }))
                }
                className="w-full h-12 px-4 bg-gray-50 border-0 rounded-lg placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <select
            value={formData.publicationDate}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                publicationDate: e.target.value,
              }))
            }
            className="flex-1 h-12 px-4 bg-gray-50 border-0 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          >
            <option value="" disabled>
              Data Publicação
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            value={formData.genre}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, genre: e.target.value }))
            }
            className="flex-1 h-12 px-4 bg-gray-50 border-0 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          >
            <option value="" disabled>
              Gênero
            </option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Avaliação
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="p-1 hover:scale-110 transition-transform"
              >
                <Star
                  className={`w-6 h-6 transition-colors ${
                    star <= (hoveredStar || formData.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300 hover:text-yellow-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit" // cor botão #0077C2
          className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg mt-6 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Adicionar novo livro
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="w-full h-12 mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}
