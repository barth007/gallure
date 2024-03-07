import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function TestimonialCard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
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
            
            testimony: "It was an amazing experience having Gallure events handle my graduation and birthday parties. They worked with me from day 1 and planned within my budget as well. It was top notch, and I absolutely recommend having them take care of your events.",
            name: "Ugochukwu Onyeakazi",
            position: "Director"
        },
        {
            
            testimony: "Super excited to have come across this planner. My son’s birthday was awesome, event tho it was almost a last minute plan, Gallure came through and made our even worth it. I definitely recommend Gallure for your next events and you won’t regret it 😍",
            name: "ChiChi Ndubuisi",
            position: "Director"
        },
        {
            
          testimony: "I recommend Gallure for all your events. They are professionals in their field. ",
          name: "Muyiwa Fapohunda",
          position: "Director"
      },
      {
            
        testimony: "Excellent services from gallure event ",
        name: "Daniel Amos",
        position: "Director"
    },
     
    ]
  return (
    <>
    <section className="card-container">
    <Slider {...settings}>
    {cardContent.map((element, index)=>(
       
         <div key={index} className="testimonial-container">
         <article className="testimonial-card">
           <header className="testimonial-header">
             <h2>Testimonials</h2>
           </header>
           <p className="testimonial-text">
            {element.testimony}
           </p>
           <footer className="testimonial-footer">
             <span className="testimonial-avatar"></span>
             <div className="testimonial-author">
               <strong >{element.name}</strong><br/>
               {/* <span >{element.position}</span> */}
             </div>
           </footer>
         </article>
       </div>
       
    ))}
    </Slider>
    
    </section>
    <style jsx>{`
      .testimonial-container {        
        display: flex;
        background-color: #faf0f7;
        flex-direction: column;
        min-height: 450px;
        border-radius: 32px;
        margin-bottom: 20px;
        
        
      }
      .testimonial-card {
        border-radius: 32px;
        display: flex;
        flex-direction: column;
        padding: 27px 45px;
        
       
      }
      .testimonial-card:hover{
        box-shadow: -25px 18px 5px -4px #CD8B87;
        border: 3px solid #cd8b87;

      }
      .testimonial-header h2 {
        letter-spacing: -1.67px;
        font: 700 54px Sora, -apple-system, Roboto, Helvetica, sans-serif;
        font-size: 1.625rem;
        float: left;
        line-height: 60.23px;
        // font-size: 20px;
        color: #05060f;
        margin-bottom: -24px;
      }
      .testimonial-text {
        color: #1d1c1c;
        font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
        font-weight: 400;
        line-height: 25px;
        margin-top: 39px;
        width: 100%;
        height: 258px;
        font-size: 17px;
      }
      .testimonial-footer {
        border-radius: 42px;
        border: 1.236px solid rgba(244, 244, 244, 0.44);
        background-color: #ffcbcb;
        display: flex;
        gap: 15px;
        justify-content: start;
        align-items: start;
        white-space: nowrap;
        letter-spacing: -1.48px;
        line-height: 100%;
        margin: 64px 0 40px;
        padding: 10px 29px;
      }
      .testimonial-avatar {
        border-radius: 11.126px;
        background-color: #05060f;
        width: 86px;
        height: 46px;
      }
      .testimonial-author strong {
        font-family: Open Sans, sans-serif;
        font-weight: 700;
        font-size: 19px;
      }
      .testimonial-author span {
        font-family: Open Sans, sans-serif;
        font-weight: 400;
        margin-top: 7px;
        font-size: 19px;
      }
    
      .slick-slide div{
        width: 450px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 7px;
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
      @media (max-width: 600px) {
        .slick-slide div{
          width: 300px;
        }
        .slick-prev{
          left: -45px;
        }
        .slick-next{
          right: -40px;
        }
        .testimonial-text {
          font-size: 15px; 
          height: 148px;
        }
        .testimonial-author strong{
          font-size: 15px;
        }
        .testimonial-card{
          padding: 27px 20px;
        }
        .testimonial-card:hover{
          box-shadow: -14px 13px 2px -5px #CD8B87;
          border: 2px solid #cd8b87;
        }
      }
      @media (max-width: 370px){
        .slick-slide div {
          width: 250px;
        }
        .slick-prev {
          left: -45px;
        }
        .testimonial-avatar{
          height: 31px
        }
        .testimonial-author strong {
          font-size: 13px;
        }
        .testimonial-footer{
          padding: 5px 6px;
          margin: 144px 0 40px;
        }
      }
      
      @media (max-width: 320px){
        .slick-slide div{
          width: 225px;
        }
      }
    `}</style>
    </>
  );
}

export default TestimonialCard;