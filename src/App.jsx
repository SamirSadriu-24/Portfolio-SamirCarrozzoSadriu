import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyHomePage from './Pages/MyHomePage'
import MyNavbar from './Components/MyNavbar'
import MyProjectsPage from './Pages/MyProjectsPage'
import MyStackPage from './Pages/MyStackPage'
import MyContactPage from './Pages/MyContactPage'
import MyWhoAmIPage from './Pages/MyWhoAmIPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<MyHomePage />} />
          <Route path='/projects' element={<MyProjectsPage />} />
          <Route path='/stacks' element={<MyStackPage />} />
          <Route path='/contacts' element={<MyContactPage/>} />
          <Route path='/whoami' element={<MyWhoAmIPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
