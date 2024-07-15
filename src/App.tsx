import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import About from './Pages/About.tsx'
import Footer from './components/Footer.tsx'
import MainMenu from './components/MainMenu.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <header>
          <MainMenu/>
          <hr></hr>
      </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<h1>404 Page not found</h1>}/>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
