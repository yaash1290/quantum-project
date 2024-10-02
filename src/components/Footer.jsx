import React from "react";
// Import the CSS file for custom styles

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-main ">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 footer-2">
          {/* Contact Us Section */}
          <div className="col mb-3 footer-col text-center">
            {" "}
            {/* Added text-center class */}
            <h5>CONTACT US</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  <span className="footer-attribute">E-mail</span>
                  <br />
                  <span>contact@JILLIONTECHNOLOGIES.com</span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  <span className="footer-attribute">Phone</span>
                  <br />
                  <span>123456789</span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  <span className="footer-attribute">Address</span>
                  <br />
                  <span>C-250, Sector-63, Noida, UP-201301</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col mb-3 footer-col text-center">
            {" "}
            {/* Added text-center class */}
            <h5>COMPANY</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Services
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Portfolio
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Development Process
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Service Section */}
          <div className="col mb-3 footer-col text-center">
            {" "}
            {/* Added text-center class */}
            <h5>SERVICE</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Website Development
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Mobile App Development
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  E-commerce Development
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Customer Software Development
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col mb-3 footer-col text-center">
            {" "}
            {/* Added text-center class */}
            <h5>SUPPORT</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Contact
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0">
                  Term & Policy
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
