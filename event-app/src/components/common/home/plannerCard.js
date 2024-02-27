import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fashion from "../../../images/home/fashion.svg";
import wedding from "../../../images/home/wedding.svg";
import party from "../../../images/home/party.svg";




function PlannerCard() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const cardContent = [
        {
            title: "Fashion Show",
            description: "Lorem ipsum dolor sit amet consectetur. Tincidunt diam vivamus et habitant aliquam sit pulvinar mattis elit. Viverra consectetur sit augue tempus tortor. ",
            src:fashion,
        },
        {
            title: "Wedding",
            description: "Lorem ipsum dolor sit amet consectetur. Tincidunt diam vivamus et habitant aliquam sit pulvinar mattis elit. Viverra consectetur sit augue tempus tortor. ",
            src:wedding,

        },
        {
          title: "Festivals",
          description: "Lorem ipsum dolor sit amet consectetur. Tincidunt diam vivamus et habitant aliquam sit pulvinar mattis elit. Viverra consectetur sit augue tempus tortor. ",
          src: party,
      },
     
    ]
  return (
    <>
    <Slider {...settings}>
    {cardContent.map((element, index)=>(
       
         <div key={index} className="planner-container">
         <article className="planner-card">
           <header className="planner-header">
             <h2>{element.title}</h2>
           </header>
           <p className="planner-text">
            {element.description}
           </p>
           <footer className="planner-footer">
             <img 
              src={element.src}
              alt={element.title}
              className="planner_photo"
             />
           </footer>
         </article>
       </div>
       
    ))}
    </Slider>    
    <style jsx>{`
      .planner-container {        
        display: flex;
        background-color: #faf0f7;
        flex-direction: column;
        min-height: 300px;
        border-radius: 32px;
        margin-bottom: 20px;
        
        
      }
      .planner-card {
        border-radius: 32px;
        display: flex;
        flex-direction: column;
        padding: 27px 45px;
        
       
      }
      .planner-card:hover{
        box-shadow: -25px 18px 5px -4px #CD8B87;
        border: 3px solid #cd8b87;

      }
      .planner-header h2 {
        letter-spacing: -1.67px;
        font: 700 54px Sora, -apple-system, Roboto, Helvetica, sans-serif;
        font-size: 1.625rem;
        float: left;
        line-height: 60.23px;
        // font-size: 20px;
        color: #05060f;
        margin-bottom: -24px;
      }
      .planner-text {
        color: #1d1c1c;
        font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
        font-weight: 400;
        line-height: 32px;
        margin-top: 39px;
        width: 100%;
        height: 100px;
        font-size: 17px;
      }
      .planner-footer {
       
        display: flex;
        gap: 15px;
        justify-content: start;
        align-items: start;
        white-space: nowrap;
        margin: 64px 0 12px;
      }
      .planner_photo{
        border-radius: 42px;
        width: 100%;
        height: 219px;

      }
      .planner-avatar {
        border-radius: 11.126px;
        background-color: #05060f;
        width: 86px;
        height: 46px;
      }
      .planner-author strong {
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 19px;
      }
      .planner-author span {
        font-family: Open Sans, sans-serif;
        font-weight: 400;
        margin-top: 7px;
        font-size: 19px;
      }
    
      .slick-slide div{
        width: 350px;
        padding: 0 5px
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 7px;
        box-sizing: border-box;
      }
      .slick-prev{
        left: 6px;
      }
      .slick-next{
        right: 6px;
      }
      .slick-dots li.slick-active button:before {
        color: #FFCBCB;
      }
      .slick-dots li button:before {
        color: #C67F7B;
      }
      .slick-list {
        margin: 0 -27px;
    }
  
    `}</style>
    </>
  );
}

export default PlannerCard;