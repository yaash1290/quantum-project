import react from "react"

const Header = ()=>{

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav_main">
  <div className="container-fluid nav_head">
    <a className="navbar-brand" href="#">Jillion Technologies</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse nav_bar" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#Testimonial">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#Contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}

export default Header;