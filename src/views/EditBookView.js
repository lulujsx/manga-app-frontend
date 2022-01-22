import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook, editBook, getBookById } from "../services/bookService";


const EditBookView = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "",
        numberOfPages: "",
        image: ""
    })

    useEffect(()=>{
        getBookById(id)
            .then(response=> setBook(response.data))
            .catch(error => console.log(error))
    }, [])
    
    const handleChange = (event) => {
        setBook({
            ...book,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await editBook(book,id)
        setBook({
            title: "",
            author: "",
            genre: "",
            numberOfPages: "",
            image: ""
        })
        navigate('/')
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        const choice = window.confirm("Segurx que desea eliminar este libro?");
        if (!choice) return;
        deleteBook(id)
        navigate("/");
      }

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="form">
                <h2>Editar manga</h2>
                <input 
                    onChange={handleChange}
                    value={book.title}
                    name="title"
                    className="form-control"
                    placeholder="Titulo"
                    type="text"
                />
                <input 
                    onChange={handleChange}
                    value={book.author}
                    name="author"
                    className="form-control"
                    placeholder="Mangaka"
                    type="text"
                />
                <input 
                    onChange={handleChange}
                    value={book.genre}
                    name="genre"
                    className="form-control"
                    placeholder="Género (separar por comas)"
                    type="text"
                />
                <input 
                    onChange={handleChange}
                    value={book.numberOfPages}
                    name="numberOfPages"
                    className="form-control"
                    placeholder="Volumenes"
                    type="text"
                />
                <input
                    onChange={handleChange} 
                    value={book.description}
                    name="description"
                    className="form-control" 
                    placeholder="Descripción" 
                    type="text"
                /> 
                <input 
                    onChange={handleChange}
                    value={book.image}
                    name="image"
                    className="form-control"
                    placeholder="Imagen"
                    type="text"
                />
                <button className="btn btn-outline-dark form-control">Editar</button>
                <button onClick={handleDelete} className="btn btn-outline-danger mt-2 form-control">Eliminar</button>
            </form>
        </div>
    );
};

export default EditBookView;