import { react } from "react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const Navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:2000/index/register")
      .then((res) => res.json())
      .then((result) => {
        // setData(result);
        console.log("result", result);
      });
  }, []);

  const FormSubmit = (e) => {
    e.preventDefault();
    let datas = {
      name: name,
      contact: contact,
      email: email,
      address: address,
    };
 
    fetch("http://localhost:2000/index/postregister", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("1234", result);
        // window.location.reload();
        // Navigate("/");
      });
  };

  return (
    <form
      onSubmit={FormSubmit}
      class="container border border-2 border-dark mt-5"
      style={{ width: "500px", backgroundColor: "#6c584c" }}
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
  );
}

export default Register;
