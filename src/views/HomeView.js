import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import { getAllBooks } from '../services/bookService'

export default function HomeView() {
    
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  async function getBooks() {
    const response = await getAllBooks()
    setBooks(response.data)
  }

    return (
        <div className="container mt-5">
        <h2>Home View</h2>
        <div className="conatiner">
            <div className="row">
            {books.map((book) => (
                <div key={book._id} className="my-3 col-lg-4 col-md-6 col-sm-12">
                <BookCard obj={book} />
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}
