import react from "react"
import contact from "../assets/contact.jpg"

const Contact = ()=>{
    return (
        <>

<div className="contact-heading" id="Contact">
  <p>Contact Us</p>
</div>

<div className="contact-container">
  <div className="contact-img">
    <img src={contact} alt="contact" />
  </div>

  <div className="contact-details">
    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Name" />

      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" placeholder="Email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" cols="61"></textarea>

      <div>
        <button className="contact-btn">Submit</button>
      </div>
    </form>
  </div>
</div>

        </>
    )
}

export default Contact