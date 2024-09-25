import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Signup from "./Signup";

function Edit() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  useEffect(() => {
    let params = {
      id: location.state.id,
    };
    fetch("http://localhost:3500/edit", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result)
        setName(result.name);
        setContact(result.contact);
        setEmail(result.email);
        setAddress(result.address);
      });
  }, []);

  const Formsubmit = (e) => {
    e.preventDefault();
    let params = {
      id: location.state.id,
    };

    let datas = {
      Ename: name,
      Econtact: contact,
      Eemail: email,
      Eaddress: address,
      id: params.id,
    };
    fetch("http://localhost:3500/update", {
      method: "post", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((result) => {
        // window.location.reload();
        navigate("/");
      });
  };

  return (
    <>
      <form
        action="/"
        onSubmit={Formsubmit}
        class="container border border-2 border-dark mt-5"
        style={{ width: "500px" }}
      >
        <h3>Edit</h3>
        Name:
        <input
          type="text"
          name="name"
          class="form-control border-2 border-dark"
          style={{ width: "300px" }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        Contact
        <input
          type="number"
          name="contact"
          class="form-control border-2 border-dark"
          value={contact}
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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        Address
        <textarea
          class="form-control border-2 border-dark"
          value={address}
          style={{ width: "300px" }}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></textarea>
        <button type="submit" class="btn btn-dark m-2 ">
          save
        </button>
      </form>
      <div></div>
    </>
  );
}

export default Edit;
