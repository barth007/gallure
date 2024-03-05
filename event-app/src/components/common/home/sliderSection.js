import React from 'react';
import TestimonialCard from './sliderCard';

function EventTestimonyHeader(props) {
  const {title, backgroundColor} = props;
  return (
    <header className="highlight-title_bar" style={{backgroundColor: backgroundColor, padding: '50px 60px 0'}}>
     <div className='over_all-wrap'> <EventTitle title={title} /></div>
      <TestimonialCard/>
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