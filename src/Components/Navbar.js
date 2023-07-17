import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="/">
            Bakery Shop
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ marginLeft: 30 + "%" }}
            >
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/assortment">
                  Assortent
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/aboutus">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contactus">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/callnow">
                  Call Now
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input className="search"type="search"placeholder="search"/>
            <button className="btn1 px-2 me-5" type="submit">Search</button>
            <span><i class="bi bi-bag"></i></span>
          </form>
        </div>
      </nav>
      <section className="main py-5">
        <div className="container">
          <div class="row py-5">
            <div class="col-lg-6 py-5">
              <h3>Bakery Shop</h3>
              <div className="line my-4"></div>
              <p>
                Welcome to The Bakery Shoppe. We offer whole cakes, individual
                slices of cake, pastries, cupcakes, muffins, and pies. We also
                offer a wide variety of hot and cold beverages such as Lattes,
                cappuccino, coffee, tea, soda, juice, and many more. We have
                seating available. The bakery provides a social atmosphere with
                a place to congregate, talk, write, read entertain one another,
                or pass the time,whether individually or in small groups of two
                or three people.
              </p>
              <button className="button pill-shape mt-4"> Order Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="cake bg-light">
        <div className="container ">
          <div className="row py-5 text-center">
            <h2>Cake</h2>
            <div className="col-lg-6 m-auto">
              <div className="line my-4"></div>
              <p>
                Welcome to The Bakery Shoppe. We offer whole cakes, individual
                slices of cake, pastries, cupcakes, muffins, and pies. We also
                offer a wide variety of hot and cold beverages such as Lattes,
                cappuccino, coffee, tea, soda, juice, and many more. We have
                seating available.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-4">
              <div className="card p-2">
                <div className="card-body">
                  <img
                    src="./images/cake9.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/c1.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/Home3.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row py-5">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/cake8.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/c2.jfif"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/c5.jfif"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cake bg-light">
        <div className="container ">
          <div className="row py-5 text-center">
            <h2>Donut</h2>
            <div className="col-lg-6 m-auto">
              <div className="line my-4"></div>
              <p>
              Rise and shine with our assortment of donuts. From mini
               donuts to fresh donuts and bite-sized donut holes, there is a 
              donut for everyone in the family.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-4">
              <div className="card p-2">
                <div className="card-body">
                  <img
                    src="./images/donut.jfif"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/donut1.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/donut7.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row py-5">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/donut2.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/donut5.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/donut9.jpeg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cake bg-light">
        <div className="container ">
          <div className="row py-5 text-center">
            <h2>Macaron</h2>
            <div className="col-lg-6 m-auto">
              <div className="line my-4"></div>
              <p>
              Fresh baked cookies are a heartfelt hug for the whole family.
              Enjoy sweet treats when you pick up a few frosted sugar 
              cookies or chocolate chip cookies.Fresh, delicious 
              fudge brownies bring the smiles too.
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-4">
              <div className="card p-2">
                <div className="card-body">
                  <img
                    src="./images/m1.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/m2.jpg"
                    className="img-fluid pb-3"
                    alt="Macaron"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/m3.jfif"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row py-5">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/m4.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/m5.jfif"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src="./images/m7.jpg"
                    className="img-fluid pb-3"
                    alt="Cake"
                    width="400px"
                  />
                  <h5 className="head1">Baking</h5>
                  <p className="per1">Bakery Desert</p>
                  <h5 className="head1">Rs. 300</h5>
                  <button className="btnc mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-2">
              <h5>Bakery Shop</h5>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <span>Home</span>
              <span>Assortment</span>
              <span>About Us</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
  </section>
    </div>
  );
}
export default Navbar;
