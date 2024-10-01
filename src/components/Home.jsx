import react from "react"
import home1 from "../assets/home1.jpg"
const Home = ()=>{

    return(
        <>
        <div className="home-container">
         <div className="home">
          <p className="heading-1">we make your idea's</p>
          <p className="heading-2">into reality</p>
          <span>some quick example text to build on the card title and make up the bulk of the card's<br/> content. some quick example text to build on the card title and make up the bulk of <br/>the card's content.</span> 
         <form className="btn-form">
         <button className="btn-1">Get Started</button>
         <button className="btn-2">Contact Us</button>
         </form>
         </div>
         <div><img className="home-img" src={home1} alt="home1" /></div>
         
         </div>
        </>
    )
}

export default Home