import react from "react"
import contact from "../assets/contact.jpg"

const Contact = ()=>{
    return (
        <>

            <div className="contact-heading">
             <p>Contact Us</p>
            </div>

        <div className="contact-container">

            <div className="contact-img">
           <img src={contact} alt="contact" />
            </div>

            <div className="contact-details">
            <form action="" >
                <label htmlFor="name" >Name</label>
                <input type="text" placeholder="Name" />

                <label htmlFor="name" >Email Address</label>
                <input type="text" placeholder="Name" />

                <label htmlFor="name" >Example Textarea</label>
                <textarea id="w3review" name="w3review" rows="4" cols="61"/>
                <div> 
                    <button className="contact-btn ">Submit</button>
                    </div>
               
            </form>
            </div>
        </div>
        </>
    )
}

export default Contact