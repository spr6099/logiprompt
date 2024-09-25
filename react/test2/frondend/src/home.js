import { useState } from "react";

function Home() {
  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    let params = {
      first: firstname,
      lname: lastname,
      email: email,
      password: password,
      contact: contact,
    };
    fetch("http://localhost:4000/form", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        window.location.reload();
      });
  };

  return (
    <>
      <h2>Registration Form</h2>
      <form
        class=" container border border-primary border-5"
        onSubmit={formSubmit}
      >
        First Name:
        <input
          type="text"
          id="first"
          name="first"
          class="form-control"
          onChange={(e) => setFirst(e.target.value)}
        />
        Last Name:
        <input
          type="text"
          id="last"
          name="last"
          class="form-control"
          onChange={(e) => setLast(e.target.value)}
        />
        Email:
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:
        <input
          type="password"
          id="password"
          name="password"
          class="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        Contact:
        <input
          type="text"
          id="mobile"
          name="mobile"
          maxlength="10"
          class="form-control"
          onChange={(e) => setContact(e.target.value)}
        />
        <button type="submit" class="btn btn-secondary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Home;
