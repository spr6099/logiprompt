import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Component/register";
import FisrtRes from "./Component/FisrtRes";
import Product from "./Component/product";
import EditProduct from "./Component/editProduct";
import ProductFile from "./Component/productFile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FisrtRes />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/productFile" element={<ProductFile />}></Route>

          <Route path="/editProduct" element={<EditProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
