import React from 'react'
import Delivery from "./Delivery";
import Payment from "./Payment";

function CallNow() {
  return (
    <div>
       <Delivery/>
      <Payment/>
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
      <div className="row">
      <div className="col-md-3 mt-md-0 my-5">
        <h5>Bakery Shop</h5>
      </div>
      <hr className="clearfix w-100 d-md-none"/>
      <div className="col-md-3 mb-md-0 mb-3">
         <ul className="list-unstyled">
          <li><a>Home</a></li>
          <li><a>Assortment</a></li>
          <li><a>About Us</a></li>
          <li><a>Contact Us</a></li>
         </ul>
      </div>
      <div className="col-md-3 mb-md-0 mb-3">
        <ul className="list-unstyled">
          <li>
            <a>St.Nezalezhosti</a>
            </li>
            <br></br>
            <li>
            <a>+38(067)000 00 00</a>
            </li>
            <li>
            <a>+38(067)000 00 00</a>
          </li>
        </ul>
      </div>
      <div className="col-md-2  mb-md-0 mb-3"> 
        <a className="me-2">
          <i class="bi bi-messenger"></i>
        </a>
        <a className="me-2">
          <i class="bi bi-instagram"></i>
        </a>
        <a className="me-2">
          <i class="bi bi-facebook "></i>
        </a>
        <a className="me-2">
          <i class="bi bi-telegram"></i>
        </a>
      </div>
      </div>
      </div>
    </footer>
    </div>
  )
}
export default CallNow;
