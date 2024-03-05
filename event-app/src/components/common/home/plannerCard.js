import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import babyshower from "../../../images/cards/babyshower.jpeg";
import proposals from "../../../images/cards/proposals.jpg";
import birthdays from "../../../images/cards/birthdays.jpg";
import corporate from "../../../images/cards/coporate.jpg";
import anniversaries from "../../../images/cards/anniversaries.jpg";
import wedding from "../../../images/cards/wedding.jpg"




function PlannerCard() {
    var settings = {
        dots: true,
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
            title: "Baby Shower",
            description: "Step into an enchanting experience with Gallure Events! Celebrate the impending arrival of your little one with us. From imaginative themes to seamless planning, we bring your dream baby shower to life. Join us for a journey filled with love, joy, and cherished memories.",
            src:babyshower,
            alt: "Image by freepik"
        },
        {
            title: "Wedding",
            description: "Embark on an enchanting wedding journey with Gallure Events, where dreams come true. Our expert planners create seamless celebrations mirroring your unique love story, from intimate elopements to grand affairs. Let us make your day unforgettable.",
            src:wedding,
            alt: "Image by freepik"

        },
        {
          title: "Marriage Proposal",
          description: "Congratulations on taking the leap into forever love! At Forever Moments, we specialize in turning your dream marriage proposal into an unforgettable reality. As you prepare to pop the question and embark on this beautiful journey of commitment, we are your go-to destination for inspiration, guidance, and expert assistance.",
          src: proposals,
          alt: "Image by freepik"
      },
      {
        title: "Birthdays",
        description: "At Gallure, birthdays are cherished moments filled with love and laughter. Let us turn your dreams into reality with personalized celebrations, whether it's a milestone bash or an intimate gathering. Explore themes and decorations reflecting the uniqueness of the VIP.",
        src: birthdays,
        alt: "Image by freepik"
    },
    {
      title: "Coperate Events",
      description: "Navigate through a world of sophisticated venues, cutting-edge technology, and tailored experiences that enhance your corporate image. Whether you're planning a product launch, team-building retreat, Christmas part or an executive conference, Gallure Events is committed to ensuring your event stands out with a touch of sophistication.",
      src: corporate,
      alt: "Image by freepik"
  },
  {
    title: "Anniversaries",
    description: "At Gallure Events, we understand the significance of anniversaries, milestones that weave the threads of commitment, love, and shared memories. We are your dedicated planners for curating unforgettable anniversary celebrations that reflect the unique journey you and yours have embarked upon.",
    src: anniversaries,
    alt: "Image by freepik"
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
              alt={element.alt}
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
      .planner-card:hover {
        box-shadow: -15px 13px 4px -4px #CD8B87;
        border: 3px solid #cd8b87;
      }
      .planner-header h2 {
        letter-spacing: -1.67px;
        font: 700 54px Sora, -apple-system, Roboto, Helvetica, sans-serif;
        font-size: 1.625rem;
        float: left;
        line-height: 60.23px;
       
        color: #05060f;
        margin-top: 18px;
      }
      .planner-text {
        color: #1d1c1c;
        font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
        font-weight: 400;
        line-height: 32px;
        margin-top: 9px;
        width: 100%;
        height: 100px;
        font-size: 18px;
      }
      .planner-footer {
       
        display: flex;
        gap: 15px;
        justify-content: start;
        align-items: start;
        white-space: nowrap;
        margin: 159px 0 12px;
      }
      .planner_photo{
        border-radius: 42px;
        width: 100%;

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
    @media (max-width: 800px) {
      .slick-slide div{
        width: 567px;
      }
      
    }
    @media (max-width: 500px) {
      
      .planner-text {
        line-height: 24px;
        font-size: 14px
    }

      }
      .highlight-title_bar header {
        padding: 0 2px;
    }
    .planner-header h2 {
      line-height: 39px;
      font-size: 1.2rem;

    }
    .planner-footer {
      margin: 198px 0 12px
    }
    .planner-card {
      border-radius: 20px;
      padding: 5px 17px;
    }
    }
    .planner-card:hover {
      box-shadow: -18px 13px 4px -7px #CD8B87;
      border: 2px solid #cd8b87;
    }
    .planner_photo {
      border-radius: 20px;
    }
      
  }
  @media (max-width: 384px){
    .planner-text{
      line-height: 21px;
      height: 52px;
    }
  }
  @media (max-width: 370px){
    .slick-slide div {
      width: 250px;
    }
    .planner-text{
      line-height: 21px;
      height: 52px;
    }
  }
  @media (max-width: 320px){
    .planner-text{
      line-height: 21px;
      height: 52px;
    }
    .slick-slide div{
      width: 225px;
    }
  }
  
    `}</style>
    </>
  );
}

export default PlannerCard;