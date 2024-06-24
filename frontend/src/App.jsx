// CSS
import './App.css'

import { useContext } from 'react'
import { SessionContext } from './contexts/LoginContext'
import { Navigate, Route, Routes } from 'react-router-dom'

// PAGES
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import Movies from './pages/movies/Movies'
import Users from './pages/users/Users'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import AddNew from './pages/addNew/AddNew'
import Footer from './components/footer/Footer'
import NotFound from './pages/notFound/NotFound'


function App() {

  const { user, login, logout } = useContext(SessionContext)

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/movies' element={user ? <Movies></Movies> : <Navigate to='/'></Navigate>}></Route>
          <Route path='/users' element={user ? <Users></Users> : <Navigate to='/'></Navigate>}></Route>
          <Route path='/login' element={user ? <Navigate to='/movies'></Navigate> : <Login></Login>}></Route>
          <Route path='/signup' element={user ? <Navigate to='/movies'></Navigate> : <Signup></Signup>}></Route>
          <Route path='/add-new' element={user ? <AddNew></AddNew> : <Navigate to='/'></Navigate>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
