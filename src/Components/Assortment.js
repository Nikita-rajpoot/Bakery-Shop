import React from "react";
import Cake from "./Cake";
import Donut from "./Donut";

function Assortment() {
  return (
    <div>
      <div>
        <h2 className="text-info">(Cake)Assortment Page</h2>
        <br></br>
        <Cake />
        <div>
          <h2 className="text-info">(Donut) Assortment Page</h2>
          <br></br>
          <Donut />
        </div>
        {/*<br></br>
        <div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="/images/cake6.jfif"
              className="d-block w-100"
              height="300px"
              width="80px"
              border="1"
            />
            <p>Cake</p>
          </div>
          <div className="grid-item">
            <img
              src="/images/pie.jfif"
              className="d-block w-100"
              height="300px"
              width="100%"
              border="1"
            />
            <p>Pie</p>
          </div>
          <div className="grid-item">
            <img
              src="/images/donut.jfif"
              className="d-block w-100"
              height="300px"
              width="100%"
              border="1"
            />
            <p>Donut</p>
          </div>
          <div className="grid-item">
            <img
              src="/images/macaron.png"
              className="d-block w-100"
              height="300px"
              width="100%"
              border="1"
            />
            <p>Macaron</p>
          </div>*/}
      </div>
    </div>
  );
}
export default Assortment;
