import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import f1 from "../assets/f1.jpeg"
import f2 from "../assets/f2.jpeg"
import f3 from "../assets/f3.jpeg"
import f4 from "../assets/f4.jpeg"
import f5 from "../assets/f5.jpeg"
import f6 from "../assets/f6.jpeg"

const Testimonial = ()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <>
        <div className="album py-5 bg-body-tertiary" style={{width:"100%" }} id="testimonials">
    <div className="container" style={{width:"100%"}}>

      <div className="row" style={{width:"100%"}}>
        <div className="col">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="card " >
                <div className="testimonial-imgDiv">
                    <img className="testimonial-img" width="100%" height="400px" src={d.img} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                </div>
            <div className="card-body">
              <p className="card-text">{d.review}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Read More</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>))}
          </Slider>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

const data = [
    {
      name:`John Morgan`,
      img:f1,
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name:`John Morgan`,
        img:f2,
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name:`John Morgan`,
        img:f3,
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name:`John Morgan`,
        img:f4,
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name:`John Morgan`,
        img:f5,
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name:`John Morgan`,
        img:f6,
        review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

export default Testimonial;
