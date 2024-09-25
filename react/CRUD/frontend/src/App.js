import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Edit from "./edit";
import FileUpload from "./fileUpload";
import EditFile from "./editFile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/fileupload" element={<FileUpload />}></Route>
          <Route path="/editFile" element={<EditFile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
