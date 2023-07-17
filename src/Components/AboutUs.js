import React from "react";

function AboutUs() {
  return (
    <div>
      <h5>About Us</h5>
      <div className="line my-4"></div>
      <p>
        Establishments producing and selling flour-based food like cakes,
        cookies, and pastries are what bakeries are all about. Several bakeries
        offer services for festivities and occasions like birthdays, weddings,
        and other events.
      </p>
      <div className="grid-container">
          <div className="grid-item">
            <img
              src="/images/nik2.jpeg"
              class="d-block w-100"
              alt="sunglasses"
              height="300px"
              width="80px"
              border="1"
            />
            <p>We bake with cake</p>
          </div>
          <div className="grid-item">
            <img
              src="/images/nik5.jpeg"
              class="d-block w-100"
              height="300px"
              width="100%"
              border="1"
            />
            <p>We are passionate</p>
          </div>
          <div className="grid-item">
            <img
              src="/images/nik4.jpeg"
              class="d-block w-100"
              height="300px"
              width="100%"
              border="1"
            />
            <p>We enjoy every step</p>
          </div>
          <div className="grid-item">
            <img
              src="/images/nik3.jpeg"
              class="d-block w-100"
              height="300px"
              width="100%"
              border="1"
            />
            <p>We create</p>
          </div> 
        </div>
    </div>
  );
}
export default AboutUs;
