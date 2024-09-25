import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    
      <div class=" bg-primary">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom">
          <a
            href
            class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              {/* <use xlink:href="{#bootstrap}" /> */}
            </svg>
          </a>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
          {/* <Link to="/First">first</Link>  */}

            <li >
              <Link to="/" class="nav-link text-white">Home</Link>   
            </li>
            <li>
             <Link to="/about" class="nav-link text-white">About</Link>
            </li>
            <li>
             <Link to="/contact" class="nav-link text-white">Contact</Link>
            </li>
          </ul>

          {/* <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" class="btn btn-primary">
              Sign-up
            </button>
          </div> */}
        </header>
      </div>
   
  );
}

export default Header;
