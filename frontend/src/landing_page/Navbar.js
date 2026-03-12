import React from "react";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">

        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>

        <div className="collapse navbar-collapse justify-content-end">

          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <a className="nav-link" href="#">Signup</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>

            {/* Dark 3-line menu icon */}
            <li className="nav-item ms-3">
              <a className="nav-link" href="#">
                <HiMenu size={24} color="#000" />
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;