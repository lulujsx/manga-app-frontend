import { Outlet } from "react-router"
import { useUser } from "../context/userProvider"
import LoginView from "../views/LoginView"

export default function AdminRoute() {
  const {user, setUser} = useUser()
  return user && user.user && user.user.role === 'ADMIN' ? <Outlet/> : <LoginView/>
}