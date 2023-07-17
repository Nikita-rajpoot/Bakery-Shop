import React from 'react'
import Delivery from './Delivery';

 function ContactUs() {
  return (
    <div>
            <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1></h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="./images/sitting.jpg"
              alt="Contact Us"
              height="500px"
              width="500px"
            />
          </div>
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Write Something....."
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
               Submit
              </button>
            </form>
          </div>
        </div>
        <Delivery/>
      </div>
    </div>
  )
}
export default ContactUs;