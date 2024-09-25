import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const LoginSubmit = (e) => {
    e.preventDefault();
    let datas = {
      mail: mail,
      password: password,
    };

    fetch("http://localhost:4000/first/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result !== "invalid") {
          localStorage.setItem("userData", JSON.stringify(result));
          navigate("/view");
          window.location.reload();
        } else {
          console.log("session error");
        }
      });
  };

  return (
    <form
      onSubmit={LoginSubmit}
      class="container"
      style={{ height: "600px", width: "500px" }}
    >
      <h2>Login Page</h2>
      <div data-mdb-input-init class="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          class="form-control"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label class="form-label" for="form2Example1">
          Email address
        </label>
      </div>

      <div data-mdb-input-init class="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          class="form-control"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label class="form-label" for="form2Example2">
          Password
        </label>
      </div>

      <button
        type="submit"
        data-mdb-button-init
        data-mdb-ripple-init
        class="btn btn-primary btn-block mb-4"
      >
        Sign in
      </button>
    </form>
  );
}

export default Login;
