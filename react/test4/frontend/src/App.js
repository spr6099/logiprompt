import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/register";
import Login from "./component/login";
import { useState } from "react";
import View from "./component/view";
import File from "./component/multiFile";

function App() {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  return (
    <>
      <BrowserRouter>
        {auth == null ? (
          <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        ) : auth.userStatus == 1 ? (
          <Routes>
            <Route path="/view" element={<View />}></Route>

            <Route path="/file" element={<File/>}></Route>
          </Routes>
        ) : null}
      </BrowserRouter>
    </>
  );
}

export default App;
