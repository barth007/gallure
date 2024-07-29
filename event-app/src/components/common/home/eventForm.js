import React from 'react';
import netBox from "../../../images/cards/netBox.svg"

const EventForm = ({cardContent})=>{
    return(
        <>
         <div className='eventFormRoot' style={{ backgroundImage: `url(${netBox})`, backgroundSize: 'center', backgroundPosition: 'center', height: '100%' }}>
         <article className="eventForm-card">
           <header className="eventForm-header">
             <h2>{cardContent.title}</h2>
           </header>
            <p className="eventForm-text">
            {cardContent.description}
           </p>
           <div className="eventForm-footer">
             <img 
              src={cardContent.src}
              alt={cardContent.alt}
              className="eventForm_photo"
             />
           </div>
         </article> 
        </div>
        <style jsx>{`
        .eventFormRoot{ 
          // width: 100%; 
          
           
        }
        .eventForm-card{
            display: flex;
            flex-direction: column;
            height: 600px;
            justify-content: space-between;
        }
       
         
          .eventForm-header h2 {
            letter-spacing: -1.67px;
            font: 700 54px Sora, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 1.625rem;
            float: left;
            line-height: 60.23px;
            color: #05060f;
            margin-top: 18px;
            
          }
          .eventForm-text {
            color: #1d1c1c;
            font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
            font-weight: 400;
            line-height: 29px;
            margin-top: 9px;
            width: 100%;
            height: 250px;
            font-size: 17px;
            text-align: left;
          }
          .eventForm-footer {
           
            // display: flex;
            // gap: 15px;
            // justify-content: start;
            // align-items: start;
            // white-space: nowrap;
           
          }
          .eventForm_photo{
            border-radius: 32px;
            width: 100%;
            height: 100%;
    
          }
          @media (max-width: 700px){
            .eventForm-header h2 {
              font-size: 20px;
              margin-top: -15px;

            }
            .eventForm-text {
              font-size: 15px;
              margin-top: 1px;
              line-height: 18px;
              height: none;

            }
            .eventForm-card{
              height: 408px;
              width: 223px;
            }
            .eventFormRoot{ 
              width: none;
            }

          }
        `}</style>
        </>
       
    )
}
export default EventForm;