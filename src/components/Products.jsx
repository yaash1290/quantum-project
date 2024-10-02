import react, { useState } from "react"
import p1 from "../assets/p1.jpeg"
import p2 from "../assets/p2.jpeg"
import p3 from "../assets/p3.jpeg"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
const Products=()=>{

    const array = [
        {
            img:p4,
            description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            img:p2,
            description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            img:p3,
            description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            img:p1,
            description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            img:p5,
            description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            img:p6,
            description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
    
    ]

const[items , setItems] = useState(array);
const [visible , setVisible] = useState(3);

const showMoreItems = ()=>{
  setVisible(visible+3);
};

    return(
        <>
         <div className="container-fluid contact-section py-3 text-center">
    <p className="display-4" id="Products">Products</p>
    </div>
         <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        { items.slice(0,visible).map(item=>(
            <div className="col">
          <div className="card shadow-sm">
            <img src={item.img} className="bd-placeholder-img card-img-top" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        ))}
         
      </div>
      <div className="d-flex gap-2 justify-content-center py-5">
        <span className="badge text-bg-primary rounded-pill py-3 "style={{cursor:"pointer"}} onClick={showMoreItems}>Load More</span>
      </div>
    </div>
  </div>
        </>
    )
}



export default Products