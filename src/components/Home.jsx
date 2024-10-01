import React from "react";
import home1 from "../assets/home1.jpg";

const Home = () => {
  return (
    <>
      <div className="home-section" id="home">
        <div className="home-content">
          <p className="main-heading">We turn your ideas</p>
          <p className="sub-heading">into reality</p>
          <span className="description">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content.
          </span>
          <form className="button-group">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Contact Us</button>
          </form>
        </div>
        <div className="home-image-container">
          <img className="home-image" src={home1} alt="Home" />
        </div>
      </div>
    </>
  );
};

export default Home;
