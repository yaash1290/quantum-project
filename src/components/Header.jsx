import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav_main">
        <div className="container-fluid nav_head">
          <a className="navbar-brand" href="#">
            Jillion Technologies
          </a>
          {/* Navbar toggler button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navbar */}
          <div className="collapse navbar-collapse nav_bar" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#Products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;