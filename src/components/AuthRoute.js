import { Outlet } from "react-router-dom";
import { useUser } from "../context/userProvider";
import LoginView from "../views/LoginView";

const AuthRoute = () => {
    const {user, setUser} = useUser()
    return user && user.user ? <Outlet/> : <LoginView/>
};

export default AuthRoute;