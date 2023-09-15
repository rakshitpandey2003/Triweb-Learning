import MainMenu from "./components/layouts/MainMenu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return <div>
    <MainMenu/>
    <Routes>
    <Route path='' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    </Routes>
  </div>
}
export default App;
