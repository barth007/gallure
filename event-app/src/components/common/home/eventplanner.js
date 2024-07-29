import React from 'react';
import PlannerCard from './plannerCard';
import Swiper from './swiper';
import EventForm from './eventForm';
import babyshower from "../../../images/cards/babyshower.jpeg";
import proposals from "../../../images/cards/proposals.jpg";
import birthdays from "../../../images/cards/birthdays.jpeg";
import corporate from "../../../images/cards/coporate.jpg";
import anniversaries from "../../../images/cards/anniversaries.jpg";
import wedding from "../../../images/cards/wedding.jpg"

function EventPlannerHeader(props) {
  const cardContents = [
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
  const {title, backgroundColor} = props;
  return (
    <header className="highlight-title_bar" style={{backgroundColor: backgroundColor, padding: '50px 60px 0'}}>
     <div className='over_all-wrap'> <EventTitle title={title}/></div>
      {/* <PlannerCard/> */}
      <Swiper showArrowsProp={true} cardLength={"1200px"} cardHeight={"800px"} itemHeight={"700px"} itemWidth={"450px"} arrowLeft={"-30px"} arrowRight={"-30px"} arrowPosition={"350px"} indicatorPostion={"175px"}>
      {cardContents.map((cardContent, index)=>(
        <EventForm cardContent={cardContent}/>
      ))}
    </Swiper>
      <div className="highlight-bar" />
      <style jsx>{`
        .highlight-title_bar header {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: flex-end;
        }
        .over_all-wrap{
          margin-bottom: 80px;
        }
        
        .highlight-bar {
          width: 100%;
          max-width: 1459px;
          height: 180px;
        }
        .event-title_bold  {
          font-size: 80px;
        }

        @media (max-width: 991px) {
         .highlight-title_bar header {
            padding: 0 20px;
          }

          .event-title_bold  {
            font-size: 60px;
          }

          .highlight-bar {
            margin-top: 40px;
            max-width: 100%;
          }
        }
      `}</style>
    </header>
  );
}

function EventTitle({ title }) {
  return (
    <h1 className='event-title_bold' style={{color: '#d1d5db', fontWeight: '400', letterSpacing: '-2px', textAlign: 'center'}}>{title}
    <style jsx>
        {`
        .event-title_bold  {
          font-size: 80px;
        }
          @media (max-width: 991px) {
  
            .event-title_bold  {
              font-size: 60px;
            }
          }

            @media (max-width: 600px) {
  
              .event-title_bold{
                font-size: 36px;
              }
        }
  
        `}
    </style>
    </h1>
  );
}


export default EventPlannerHeader;