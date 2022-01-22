import React, { useContext, useState } from 'react'

const Context = React.createContext({
    user:localStorage.getItem("user lo q  qcyo no c")??"",setUser:() =>{}
})

const UserContext = (props) => {
    const localUser = localStorage.getItem("user lo q  qcyo no c")??""
    const [user, setUser_] = useState(JSON.parse(localUser))

    const setUser = (data) => {
        localStorage.setItem("user lo q  qcyo no c", JSON.stringify(data))
        setUser_(data)
    } 
    return <Context.Provider value={{user,setUser}}>
        {props.children}
    </Context.Provider>
};

export default UserContext;

export const useUser = () => useContext(Context)