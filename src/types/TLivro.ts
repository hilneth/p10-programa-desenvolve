export interface Book {
  id: string | null
  title: string
  author: string
  createdat: string
  updatedat: Date
  genre: string
  rating: number
  status: string
  cover: string
  synopsis?: string
  currentpage:number
  categoryid?:number      
  year?:number 
  pages?:number
  isbn?:string
  formatCreatedAt?: string
  formatUpdatedAt?: string

}