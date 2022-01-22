import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import BookDetailsView from './views/BookDetailsView';
import HomeView from "./views/HomeView";
import AddBookView from './views/AddBookView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import AuthRoute from './components/AuthRoute';
import AdminRoute from './components/AdminRoute'
import EditBookView from './views/EditBookView';
import UserContext from './context/userProvider'

function App() {
  
  return (
    <UserContext>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomeView/>}/>
          <Route element={<AuthRoute/>}>
            <Route path='/book/:id' element={<BookDetailsView/>}/>
          </Route>
          <Route element={<AdminRoute/>}>
            <Route path='/addBook' element={<AddBookView/>}/>
            <Route path='/editBook/:id' element={<EditBookView/>}/>
          </Route>
          <Route path='/login' element={<LoginView/>}/>
          <Route path='/register' element={<RegisterView/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext>
  )
}

export default App;
