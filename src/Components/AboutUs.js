import React from "react";

function AboutUs() {
  return (
    <div>
    <div className="about bg-light">
      <div className="container ">
        <section>
          <h5 className="text-info">About Us</h5>
          <div className="col-lg-6 m-auto">
            <div className="line my-4"></div>
              <p>
                Establishments producing and selling flour-based food like cakes,
                cookies, and pastries are what bakeries are all about. Several bakeries
                offer services for festivities and occasions like birthdays, weddings,
                and other events.
            </p>
        </div>
      </section>    
      <section>
        <div className="row py-3">
          <div className="col-lg-3">
            <div className="card p-2">
              <div className="card-body">
              <img
                src="/images/nik2.jpeg"
                className="img-fluid"
                alt="Cake"
                width="400px"
              />
              <p>We bake with cake</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <div className="card-body">
            <img
              src="/images/nik3.jpeg"
              className="img-fluid"
              alt="Cake"
              width="400px"
            />
            <p>We are passionate</p>
          </div>
         </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <div className="card-body">
            <img
              src="/images/nik4.jpeg"
              className="img-fluid pb-3"
              alt="Cake"
              width="400px"
            />
            <p>We enjoy every step</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card">
            <div className="card-body">
            <img
              src="/images/nik5.jpeg"
              className="img-fluid pb-3"
              alt="Cake"
              width="400px"
            />
            <p>We create</p>
          </div> 
        </div>
    </div>
  </div>
</section>
</div>
</div>
</div>
</div>
  );
}
export default AboutUs;
