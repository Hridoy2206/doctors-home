import { Route, Routes } from "react-router-dom"
import Navbar from "./Shared/Navbar/Navbar"
import Home from "./pages/Home/Home"
import About from "./pages/component/About"


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
