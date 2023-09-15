import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Layout from "./components/layouts/Layout";

function App() {
  return <Layout>
    <Routes>
    <Route path='' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    </Routes>
  </Layout>
}
export default App;
