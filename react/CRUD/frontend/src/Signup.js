import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
function Signup() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);
  console.log(data, "data");

  const FormSubmit = (e) => {
    e.preventDefault();
    let datas = {
      names: name,
      number: contact,
      email: email,
      address: address,
    };

    // console.log(state);

    fetch("http://localhost:3500/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
    .then((result) => {
        // console.log(result);
        window.location.reload();
      });
  };

  const Delete = (id) => {
    let delId = { delId: id };
    console.log("delId", delId);
    fetch("http://localhost:3500/delete/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(delId),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("jmkmnk", result);
        window.location.reload();
      });
  };

  useEffect(() => {
    fetch("http://localhost:3500/view")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        // console.log(result, "result");
      });
  }, []);

  return (
    <>
      <div class="row h-100" style={{backgroundColor:'#a98467'}}>
        <div class="col-6">
          <form
            onSubmit={FormSubmit}
            class="container border border-2 border-dark mt-5"
            style={{ width: "500px", backgroundColor:'#6c584c' }}
          >
            <h3>Signup</h3>
            Name:
            <input
              type="text"
              name="name"
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            Contact
            <input
              type="number"
              name="contact"
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            ></input>
            Email
            <input
              type="email"
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            Address
            <textarea
              class="form-control border-2 border-dark"
              style={{ width: "300px" }}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></textarea>
            <button type="submit" class="btn btn-dark m-2 ">
              save
            </button>
          </form>
        </div>
        <div class="col-6 mt-5">
          <table style={{backgroundColor:'#eb5e28'}} >
            <thead >
              <tr >
                {" "}
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {data.map((arr, index) => (
                <tr>
                  <td>{arr.name}</td>
                  <td>{arr.contact}</td>
                  <td>{arr.email}</td>
                  <td>{arr.address}</td>
                  <td>
                    <button class='btn btn-dark'
                      onClick={() => {
                        Delete(arr._id);
                      }}
                      type="submit"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link  to="/edit" state={{ id: arr._id }} style={{color:'black'}}>
                     <button class="btn btn-secondary">Edit</button>
                    </Link>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Signup;
