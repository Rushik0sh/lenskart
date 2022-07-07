import React from "react";
import "./section.css";
import { useState } from "react";

// import ProductCard from "../ProductCard/ProductCard.js";
// import ProductCard from "../Product/ProductCard";

const Section = () => {
  const [image, setImage] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  const click = () => {
    setImage(!image);
  };
  const click2 = () => {
    setImage2(!image2);
  };
  const click3 = () => {
    setImage3(!image3);
  };

  return (
    <div className="section-container">
      <div className="section-item">
        <img
          className="sectionimg"
          src={!image ? "/images/sun2.jpg" : "/images/sun3.jpg"}
          alt=""
        />
        <h4 className="h4">Lenskart Air</h4>
        <p>Maroon Full Rim Round Eyeglasses</p>
        <div className="colour">
          <img
            className="colour-img"
            onClick={click}
            src="/images/sun1.jpg"
            alt=""
          />
          <img
            className="colour-img"
            onClick={click}
            src="/images/sun4.jpg"
            alt=""
          />
          <img
            className="colour-img"
            onClick={click}
            src="/images/sun5.jpg"
            alt=""
          />
          <img
            className="colour-img"
            onClick={click}
            src="/images/sun6.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="section-item">
        <img
          className="sectionimg"
          src={!image2 ? "/images/sun14.jpg" : "/images/sun12.jpg"}
          alt=""
        />
        <h4 className="h4">Lenskart Air</h4>
        <p>Maroon Full Rim Round Eyeglasses</p>
        <div className="colour">
          <img
            className="colour-img"
            onClick={click2}
            src="/images/sun10.jpg"
            alt=""
          />
          <img
            className="colour-img"
            onClick={click2}
            src="/images/sun12.jpg"
            alt=""
          />
          <img
            className="colour-img"
            onClick={click2}
            src="/images/sun13.jpg"
            alt=""
          />
          <img
            className="colour-img"
            onClick={click2}
            src="/images/sun11.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="section-item">
        <img
          className="sectionimg"
          src={!image3 ? "/images/sun7.jpg" : "/images/sun8.jpg"}
          alt=""
        />
        <h4 className="h4">Lenskart Air</h4>
        <p>Brown Tortoise Full Rim Cat Eye Eyeglasses</p>
        <div className="colour">
          <img
            className="colour-img"
            onClick={click3}
            src="/images/sun7.jpg"
            alt=""
          />
          <img
            className="colour-img"
            onClick={click3}
            src="/images/sun8.jpg"
            alt=""
          />
          <img
            className="colour-img"
            onClick={click3}
            src="/images/sun9.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
