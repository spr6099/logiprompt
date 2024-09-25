import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Img from "./imgurl";

function EditFile() {
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let editId = {
      id: location.state.id,
    };

    fetch("http://localhost:3500/editFile", {
      method: "post",
      headers: {
        Acccept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editId),
    })
      .then((res) => res.json())
      .then((result) => {
        setName(result.name);
        setEmail(result.email);
        setPassword(result.password);
        setImage(result.image);
        setId(result._id);
        // console.log(result);
      });
  }, []);

  const FormSubmit = (e) => {
    e.preventDefault();
    let datas = new FormData();
    datas.append("name", name);
    datas.append("email", email);
    datas.append("password", password);
    datas.append("image", image);
    datas.append("id", id);

    // let dataas = {
    //   Uname: name,
    //   Uemail: email,
    //   Upassword: password,
    //   Uimage: image,
    //   id: id,
    // };

    fetch("http://localhost:3000/updateFile", {
      method: "post",
      // headers: {
      //   Acccept: "application/json",
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(dataas),
      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("editFile", result);
        // window.location.reload();
        navigate("/fileupload");
      });
  };

  return (
    <>
      <h2 class="text-center">Edit File</h2>
      <form onSubmit={FormSubmit} class="container" style={{ width: "400px" }}>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            value={email}
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            value={name}
            type="text"
            class="form-control"
            id=""
            placeholder="Enter name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input
            value={password}
            type="text"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pwd"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <img
            src={Img + image}
            style={{ height: "100px", width: "100px" }}
          ></img>
        </div>
        <div class="form-group">
          <label for="image">Image:</label>
          <input
            type="file"
            class="form-control"
            id=""
            // placeholder="upload image"
            name="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <button type="submit" class="btn btn-default">
          Submit
        </button>
      </form>
    </>
  );
}

export default EditFile;
