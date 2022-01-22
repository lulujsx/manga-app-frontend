import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

const RegisterView = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await register(user)
        setUser({
            name: "",
            email: "",
            password: ""
        })
        navigate('/')
    }

    return (
        <div className="container mt-5">
          <form onSubmit={handleSubmit} className="form">
          <h2>Registro</h2>
            <input
                onChange={handleChange}
                name="name"
                value={user.name}
                className="form-control" 
                type="text" 
                placeholder="Nombre"
            />
            <input
                onChange={handleChange} 
                name="email"
                value={user.email}
                className="form-control" 
                type="text" 
                placeholder="Email"
            />
            <input
                onChange={handleChange} 
                name="password"
                value={user.password}
                className="form-control" 
                type="password" 
                placeholder="Contraseña"
            />
            <button className="btn btn-outline-dark form-control">Registrarse</button>
          </form>  
        </div>
    );
};

export default RegisterView;