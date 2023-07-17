import React from 'react'
import Payment from './Payment';

 function Delivery() {
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
              src="./images/bakery.jpg"
              alt="Delivery"
              height="500px"
              width="500px"
            />
          </div>
          <div className="col-md-6">
            <h4>Confirm your Order</h4>
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Contact Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Pickup Delivery"
                />
              </div>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="When?"
                />
              </div>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Your Phone Number"
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
              <button type="submit" class="btn btn-outline-primary">
               Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Delivery;