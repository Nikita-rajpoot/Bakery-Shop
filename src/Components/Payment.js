import React from 'react'

function Payment() {
  return (
    <div className="container mb-5 line">
       <div className="row">
      </div>
      <div className="row">
        <div className="col-md 5 d-flex justify-content-center">
          <img
            src="./images/bakery.jpg"
            alt="Payment"
            height="500px"
            width="500px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-info">Make a Payment</h4>
          <div className="col-md 5 justify-space-between">
          <img src="./images/mc.png" alt="Payment" height="48px" width="48px" />
          <img src="./images/vi.png" alt="Payment" height="48px" width="48px" />
          <img src="./images/ap.png" alt="Payment" height="48px" width="48px" />
          <img src="./images/gp.png" alt="Payment" height="48px" width="48px" />
          </div>
          <form>
            <div className="mb-3">
              <label for="exampleForm" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleForm"
                placeholder="credit card number"
              />
            </div>
            <div className="mb-2">
              <label for="exampleForm" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleForm"
                placeholder="Expiry date"
              />
            </div>
            <div className="mb-2">
              <label for="exampleForm" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleForm"
                placeholder="CVV"
              />
            </div>
            <div className="line my-4"></div>
            <p>
              As a self-employed freelancer or small business owner, knowing how
              to send an invoice correctly is crucial
            </p>
            <button type="submit"onClick="handlePayment" ClassName="btnp btn-outline-primary">
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Payment;
