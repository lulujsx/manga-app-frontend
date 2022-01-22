import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useUser } from "../context/userProvider"
import { getBookById } from "../services/bookService"
import './BookDetails.css'

export default function BookDetailsView() {
    const {user, setUser} = useUser()
    const [book, setBook] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getBook()
      }, [])
    
    const getBook = async () => {
        const response =  await getBookById(id)
        setBook(response.data)
    }


    return (
        <div className="container mt-5">
            <div className="cardd">
                <div className="card_info">
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <h5>Volumenes: {book.numberOfPages}</h5>
                    <p>{book.description}</p>
                    <div className="card_tags">
                    {book.genre?.map((g, i) => (
                    <>
                        <p className="tags" key={i}>{g}</p>
                    </>
                    ))}
                    </div>
                { user && user.user && user.user.role === "ADMIN" && (
                    <Button variant="outline-dark" href={`/editBook/${book._id}`}>Editar Manga</Button>
                )}
                </div>
                <div className="card_img">
                    <img style={{height:400}} src={book.image} alt="foto portada del manga"/>
                </div>
                
                
            </div>
           
        </div>
    )
}
