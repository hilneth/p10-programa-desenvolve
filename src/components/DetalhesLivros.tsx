"use client";

import { X, Star } from "lucide-react";
import { useEffect } from "react";

interface BookDetailModalProps {
  book: {
    id: string;
    title: string;
    author: string;
    startDate: string;
    genre: string;
    rating: number;
    status: string;
    description?: string;
  };
  isOpen: boolean;
  onClose: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function BookDetailModal({
  book,
  isOpen,
  onClose,
  onEdit,
  onDelete,
}: BookDetailModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído":
        return "bg-green-100 text-green-800";
      case "Lendo":
        return "bg-blue-100 text-blue-800";
      case "Pausado":
        return "bg-yellow-100 text-yellow-800";
      case "Abandonado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl p-8 relative animate-in fade-in-0 zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-48 h-72 bg-[#D9D9D9] rounded-lg shadow-md" />
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600">por {book.author}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#7E7E7E] mb-1">
                  Data de Início
                </label>
                <p className="text-gray-900">{book.startDate}</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#7E7E7E] mb-1">
                  Gênero
                </label>
                <p className="text-gray-900">{book.genre}</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#7E7E7E] mb-1">
                  Avaliação
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium">
                    {book.rating}
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.floor(book.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : star <= book.rating
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#7E7E7E] mb-1">
                  Status
                </label>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    book.status
                  )}`}
                >
                  {book.status}
                </span>
              </div>
            </div>

            {book.description && (
              <div>
                <label className="block text-sm font-bold text-[#7E7E7E] mb-2">
                  Descrição
                </label>
                <p className="text-gray-700 leading-relaxed">
                  {book.description}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => {
                  onEdit?.();
                  onClose();
                }}
                className="flex-1 h-12 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Editar
              </button>
              <button
                onClick={() => {
                  onDelete?.();
                  onClose();
                }}
                className="flex-1 h-12 border border-red-300 text-red-600 hover:bg-red-50 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
