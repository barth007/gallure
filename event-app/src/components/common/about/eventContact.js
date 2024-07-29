import React from "react";
import net from "../../../images/about/net.png";
function EventContactSection() {
  const message = (<span>Contact Gallure Events<br/>today, and let the journey<br/>to your extraordinary<br/>event begin!</span>)
  return (
    <>
    
      <section className="event-contact-section">

        
        <div className="content-wrapper">
        <div className="image-column drop_below">
            <img
              loading="lazy"
              src={net}
              alt="Event Planning"
              className="event-image"
            />
          </div>
          <article className="text-column">
            <p className="contact-message_about">
             {message}
            </p>
          </article>
          <div className="image-column drop_side">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cc2975969c782a3daff2509f76480a65b537704060edb18180379bf8c39f318?apiKey=c79a152b41e64f7db55346c2899c15e3&"
              alt="Event Planning"
              className="event-image"
            />
          </div>
         
        </div>
      </section>
      <style jsx>{`
        .event-contact-section {
          background-color: #0d0d0d;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2%;
         
        }
       
        .content-wrapper {
          margin-top: 280px;
          width: 100%;
          display: flex;
          // gap: 114px;
          flex-direction: row;
          justify-content: space-between;
        }
       
        .text-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 80%;
        }
        
        .contact-message_about {
          color: #fff;
          text-align: center;
          letter-spacing: -2.84px;
          margin-top: 489px;
          font: 700 69px/102px 'Plus Jakarta Sans', -apple-system, Roboto, Helvetica, sans-serif;
        }
       
        .image-column {
          width: 27%;
          margin-left: 2px;
          display: flex;
          flex-direction: row;
          line-height: normal;
        }
        .drop_below{
          margin-top:35%;
        }
        .drop_side{
          margin-left: 80px;
          top: -137px;
        }
       
        .event-image {
          aspect-ratio: 0.36;
          object-fit: cover;
          object-position: center;
          width: 265px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .event-image {
            margin-top: 40px;
          }
          .event-contact-section {
            display: flex;
            margin-top: -7%;
            
          }
          .event-image {
            width: 140px;
          }
          .image-column {
            width: 23%;
          }
          .drop_below{
            margin-top: 2%;
            margin-left: -18px;
          }
          .contact-message_about {
            margin-top: 40px;
            font-size: 40px;
            line-height: 50px;
          }
          .text-column {
            width: 88%;
            margin-left: 72px;
          }
          .content-wrapper {
            max-width: 100%;
            margin-top: 40px;
            flex-direction: row;
            align-items: stretch;
            gap: 5px;
            margin-left: 14px;
          }
          .drop_side{
            margin-left: 80px;
            top: -94px;
          }
        }
        @media (max-width: 600px) {
          .contact-message_about {
            margin-top: 40px;
            font-size: 30px;
            padding-bottom: 50px;
          }

        }
        @media (max-width: 500px) {
          .text-column {
            width: 100%;
            margin-left: 15px;
          }
          .drop_side {
            margin-left: 32px;
            top: -27px;
          }
          .contact-message_about {
            margin-top: 40px;
            font-size: 24px;
            line-height: 37px;
            padding-bottom: 40px;
          }
        }
        @media (max-width: 370px){
          .contact-message_about {
            font-size: 21px;
          }
        }
      `}</style>
    </>
  );
}

export default EventContactSection;