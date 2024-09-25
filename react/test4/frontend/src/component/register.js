import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const FormSubmit = (e) => {
    e.preventDefault();
    let datas = {
      name: name,
      email: email,
      password: password,
      address: address,
      userStatus: 1,
    };
    // console.log(datas);
    fetch("http://localhost:4000/first/register", {
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
      });
  };

  const Logout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 100);
  };
  
  return (
    <section class="vh-100" style={{ backgroundColor: "#eee" }}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        class="btn btn-primary btn-lg"
                        onClick={() => {
                          Logout()
                        }}
                      >
                        Logout
                      </button>
                    </div>
                    <form class="mx-1 mx-md-4" onSubmit={FormSubmit}>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control border border-primary"
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                          <label class="form-label" for="form3Example1c">
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control border border-primary"
                            onChange={(e) => {
                              setMail(e.target.value);
                            }}
                          />
                          <label class="form-label" for="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control border border-primary"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />

                          <label class="form-label" for="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          class="form-outline flex-fill mb-0"
                        >
                          <textArea
                            id="form3Example4cd"
                            class="form-control border border-primary"
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          ></textArea>

                          <label class="form-label" for="form3Example4cd">
                            Address
                          </label>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
