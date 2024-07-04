import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import About from './Pages/About.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<h1>404 Page not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
