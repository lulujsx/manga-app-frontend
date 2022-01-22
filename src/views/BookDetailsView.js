import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
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
        <Container className="mt-5">
            <Row className="cardd">
            
            <Col sm={8}>
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
                
                </div>
                </Col>
                <Col sm={4}>
                <div className="card_img">
                    <img style={{height:400}} src={book.image} alt="foto portada del manga"/>
                </div>
                </Col>
              
        </Row>
        { user && user.user && user.user.role === "ADMIN" && (
                    <Button variant="outline-dark" className="customButton" href={`/editBook/${book._id}`}>Editar Manga</Button>
                )}
        </Container>
    )
}
