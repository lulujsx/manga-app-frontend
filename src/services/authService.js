import axios from "axios"
const apiUrl = process.env.REACT_APP_API_URL
const jwtString = 'jwtmanga'

export const login = async (userObj) => {
    const response = await axios.post(`${apiUrl}/auth/login`, userObj)
    const { user , token } = response.data
    const {_id,...userStored} = user
    localStorage.setItem(jwtString, JSON.stringify({user: userStored,token}))
    return response
}

export const register = async (userObject) => {
    const response = await axios.post(`${apiUrl}/auth/signup`, userObject)
    return response
}

export const isAuthenticated = () => {
    if(typeof window == 'undefined'){ 
        return false
    }
    if (!localStorage.getItem(jwtString)) return false
    const {user} = JSON.parse(localStorage.getItem(jwtString))
    if(user){
        return user
    }
    return false
}

export const logout = async () => {
    localStorage.removeItem(jwtString)
    window.location.reload()
}