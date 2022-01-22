import './Login.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {login} from '../services/authService'
import { useUser } from '../context/userProvider'

const LoginView = () => {

    const navigate = useNavigate()
    const {user, setUser} = useUser()
    const [userr, setUserr] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserr({
            ...userr,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await login(userr)
        console.log(response.data)
        if(response.data){
            setUser(response.data)
        }
        setUserr({
            email: '',
            password: '',
        })
        navigate('/')
    }

    return (
        <div className="container mt-5">
        <form onSubmit={handleSubmit} className="form">
            <h2>Iniciar sesión</h2>
            <input
                onChange={handleChange}
                value={userr.email}
                className="form-control" 
                name="email"
                type="text" 
                placeholder="Email"
            />
            <input 
                onChange={handleChange}
                value={userr.password}
                className="form-control" 
                name="password"
                type="password" 
                placeholder="Contraseña"
            />
            <button className="btn btn-outline-dark form-control">Iniciar sesión</button>
        </form>
        </div>
    );
};

export default LoginView;