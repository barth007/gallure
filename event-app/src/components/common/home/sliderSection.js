import React from 'react';
import TestimonialCard from './sliderCard';
import Swiper from './swiper';
import TestimonyForm from './testimonyForm';

function EventTestimonyHeader(props) {
  const {title, backgroundColor} = props;
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
    <header className="highlight-title_bar" style={{backgroundColor: backgroundColor, padding: '50px 60px 0'}}>
     <div className='over_all-wrap'> <EventTitle title={title} /></div>
      {/* <TestimonialCard/> */}
      <Swiper showArrowsProp={true} cardLength={"1089px"} cardHeight={"679px"} itemHeight={"500px"} itemWidth={"500px"} arrowLeft={"30px"} arrowRight={"30px"} arrowPosition={"280px"} indicatorPostion={"245px"}>
        {cardContent.map((content)=>(<TestimonyForm cardContent={content} />))}

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
          margin-bottom: 10px;
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
          @media (max-width: 600px) {
            .event-title_bold {
              font-size: 27px;
            }
          }
          @media (max-width: 370px){
            .event-title_bold {
              font-size: 24px;
            }
          }
      `}</style>
    </header>
  );
}

function EventTitle({ title }) {
  return (
    <h1 className='event-title_bold' style={{ color: '#d1d5db', fontWeight: '400', letterSpacing: '-2px', textAlign: 'center'}}>{title}
    <style jsx>
        {`
        .event-title_bold {
          font-size: 80px;
        }
          @media (max-width: 991px) {
  
            .event-title_bold {
              font-size: 60px;
            }
          }

            @media (max-width: 600px) {
  
              .event-title_bold {
                font-size: 27px;
              }
            }
        `}
    </style>
    </h1>
  );
}


export default EventTestimonyHeader;