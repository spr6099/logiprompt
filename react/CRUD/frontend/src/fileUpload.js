import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "./imgurl";

function FileUpload() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState([]);
  //   console.log("details", details);

  function Formsubmit(e) {
    e.preventDefault();

    let datas = new FormData();
    datas.append("name", name);
    datas.append("email", email);
    datas.append("password", password);
    datas.append("image", image);
    // console.log("jjj",datas);

    fetch("http://localhost:3500/fileUpload", {
      method: "post",
      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.reload();
        // console.log(result);
      });
  }
  useEffect(() => {
    fetch("http://localhost:3500/fileUploadView")
      .then((res) => res.json())
      .then((result) => {
        setDetails(result);
        // console.log(details);
      });
  }, []);

  function FileDelete(id) {
    let delId = {
      delId: id,
    };
    fetch("http://localhost:3500/fileDelete", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(delId),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        window.location.reload();
      });
  }

  return (
    <div class="row">
      <div class=" col-5 ">
        <h2 class="text-center mt-2">File Upload</h2>
        <form
          onSubmit={Formsubmit}
          class="container"
          style={{ width: "400px" }}
        >
          <div class="form-group">
            <label for="email">Email:</label>
            <input
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
      </div>

      <div class="col-7">
        <table class="mt-5">
          <tr>
            <th class="pr-2">name</th>
            <th class="pr-2">Email</th>
            <th class="pr-2">password</th>
            <th class="pr-2">image</th>
          </tr>
          {details.map((items, index) => (
            <tr>
              <td class="pr-2">{items.name}</td>
              <td class="pr-2">{items.email}</td>
              <td class="pr-2">{items.password}</td>
              {/* <td class="pr-2">{items.image}</td> */}
              <td class="pr-2">
                <img
                  // src={`http://localhost:3500/fileUpload/${items.image}`}
                  src={Img + items.image}
                  style={{ height: "100px", width: "100px" }}
                  alt=""
                ></img>
              </td>
              <td>
                <Link
                  class=" ml-2 mr-2"
                  to="/editFile"
                  state={{ id: items._id }}
                >
                  Edit
                </Link>
              </td>
              <td>
                {" "}
                <button
                  class="mr-3"
                  onClick={() => {
                    FileDelete(items._id);
                  }}
                >
                  x
                </button>{" "}
              </td>{" "}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default FileUpload;
