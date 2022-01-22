import axios from  "axios";

const apiUrl = process.env.REACT_APP_API_URL

export const getAllBooks = async () => {
    const response = await axios.get(`${apiUrl}/books`)
    return response
}

export const getBookById = async (id) => {
    const response = await axios.get(`${apiUrl}/books/book/${id}`)
    return response
}

export const createBook = (bookObj) => {
    const response = axios.post(`${apiUrl}/books/book`, bookObj)
    return response
}

export const editBook = (bookObj,id) => {
    const response = axios.put(`${apiUrl}/books/book/${id}`, bookObj)
}

export const deleteBook = (id) => {
    axios.delete(`${apiUrl}/books/book/${id}`)
}