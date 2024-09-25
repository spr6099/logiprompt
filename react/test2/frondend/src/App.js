import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Backend from "./bckend";
function App() {
  return <>
    
<BrowserRouter>
<Routes>
  <Route path="/" element={<Backend/>}></Route>
</Routes>
</BrowserRouter>
  </>;
}

export default App;
