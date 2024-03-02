import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <Slider {...settings}>
      <div className='box'>
        <h3>1</h3>
      </div>
      <div className='box'>
        <h3>2</h3>
      </div>
      <div className='box'>
        <h3>3</h3>
      </div>
      <div className='box'>
        <h3>4</h3>
      </div>
      <div className='box'>
        <h3>5</h3>
      </div>
      <div className='box'>
        <h3>6</h3>
      </div>
      <style jsx>
        {`
        .box{
          height: 400px;
          background-color: blue;
         
          
        }
        .slick-slide div{
          // margin: 0 1rem;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
          width: 400px;
        }
        `}
      </style>
    </Slider>
  );
}