import "./App.css";
import BakeryShop from "./Components/BakeryShop";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Assortment from "./Components/Assortment";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Delivery from "./Components/Delivery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="Bakery">
        <Navbar />
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/assortment" element={<Assortment />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/delivery" element={<Delivery />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
