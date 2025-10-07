import { Book } from "../types/TLivro";

export function organizarLista(book: Book) {
  const { title, author, createdat, updatedat, status, cover} = book
  book.formatCreatedAt = (new Date (createdat)).toLocaleDateString("pt-BR")
  book.formatUpdatedAt = (new Date (updatedat)).toLocaleDateString("pt-BR").toString()

  const formatStatus: {[key: string]: string} = {
    QUERO_LER: "Quero Ler",
    LENDO: "Lendo",
    LIDO: "Lido",
    PAUSADO: "Pausado",
    ABANDONADO: "Abandonado"
  }
  
  if (book.status in formatStatus) {
    book.status = formatStatus[book.status]
  }

  if (!book.cover) {
    book.cover = "/images/meme.jpg"
  }

}