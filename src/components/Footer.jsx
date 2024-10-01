import react from "react"

const Footer = ()=>{
    return(
        <>
        <div class="container footer-main">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top footer-2">

    

    <div class="col mb-3 footer-col-1">
      <h5>CONTACT US</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span className="footer-attribute">E mail</span><br/><span>contact@JILLIONTECHNOLOGIES.com</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span className="footer-attribute">Phone</span><br/><span>123456789</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span className="footer-attribute">Address</span><br/><span>C-250, Sector-63, Noida, UP-201301</span></a></li>
      </ul>
    </div>

    <div class="col mb-3 footer-col-2">
      <h5>COMPANY</h5>
      <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>About Us</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>Services</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>Portfolio</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>Development Process</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>Career</span></a></li>
      </ul>
    </div>

    <div class="col mb-3 footer-col-1">
      <h5>SERVICE</h5>
      <ul class="nav flex-column">
      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>Website Development</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>Mobile App Development</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>E-commerce Development</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>Customer Software Development</span></a></li>
      </ul>
    </div>

    <div class="col mb-3 footer-col-2">
      <h5>SUPPORT</h5>
      <ul class="nav flex-column">        
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>Contact</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 "><span>Term & policy</span></a></li>
      </ul>
    </div>
  </footer>
</div>
        </>
    )
}

export default Footer;