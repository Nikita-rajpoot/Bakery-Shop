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
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  Login
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
    </div>
  );
}
export default Navbar;
