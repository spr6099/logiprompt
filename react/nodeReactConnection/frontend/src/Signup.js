import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const FormSubmit = (e) => {
    e.preventDefault();
    let data = {
      names: name,
      number: contact,
    };

    fetch("http://localhost:3500/signup", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        window.location.reload();
      });
  };

  return (
    <>
      <form onSubmit={FormSubmit}>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        Contact
        <input
          type="number"
          name="contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        ></input>
        <button type="submit">save</button>
      </form>
    </>
  );
}

export default Signup;
