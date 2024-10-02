import React, { useState } from "react";
import contact from "../assets/contact.jpg";

const Contact = () => {
 const[value1 , setValue1]=useState("")
 const[value2 , setValue2]=useState("")
 const[value3 , setValue3]=useState("")

  const handleSubmit=(e)=>{
  e.preventDefault()
   setValue1("")
   setValue2("")
   setValue3("")
   alert("Form Submited")
  }
  return (
    <>
      <div
        className="container-fluid  py-5 text-center"
        id="contact"
      >
        <p className="display-4">Contact Us</p>
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-6 col-md-12 mb-4">
            <img src={contact} alt="Contact Us" className="img-fluid rounded" />
          </div>

          {/* Form Section */}
          <div className="col-lg-6 col-md-12">
            <form className="p-4 shadow rounded bg-light">
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e)=>{setValue1(e.target.value)}}
                  value={value1}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e)=>{setValue2(e.target.value)}}
                  value={value2}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Textarea Field */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="4"
                  onChange={(e)=>{setValue3(e.target.value)}}
                  value={value3}
                  placeholder="Write your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary contact-btn" onClick={(e)=>{
                 handleSubmit(e)
                }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;