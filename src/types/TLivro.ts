// interface TLivro {
//   title: string;
//   author: string;
//   year: number;
// }

// const Books: TLivro[] = [];

export type Book = {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  status: string;
  rating?: number;
  startDate?: string;
  genre?: string;
};
