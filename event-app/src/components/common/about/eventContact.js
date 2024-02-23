import React from "react";
import net from "../../../images/about/net.png";
function EventContactSection() {
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
            <p className="contact-message">
              Contact Gallure Events today, and let the journey to your extraordinary event begin!
            </p>
          </article>
          <div className="image-column">
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
          margin-top: -37%;
         
        }
        @media (max-width: 991px) {
          .event-contact-section {
            
          }
        }
        .content-wrapper {
          margin-top: 198px;
          width: 100%;
          max-width: 1387px;
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .content-wrapper {
            max-width: 100%;
            margin-top: 40px;
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .text-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 80%;
        }
        @media (max-width: 991px) {
          .text-column {
            width: 100%;
          }
        }
        .contact-message {
          color: #fff;
          text-align: center;
          letter-spacing: -2.84px;
          margin-top: 489px;
          font: 700 69px/102px 'Plus Jakarta Sans', -apple-system, Roboto, Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .contact-message {
            margin-top: 40px;
            font-size: 40px;
            line-height: 50px;
          }
        }
        .image-column {
          width: 20%;
          margin-left: 2px;
          display: flex;
          flex-direction: column;
          line-height: normal;
        }
        .drop_below{
          margin-top:35%;
        }
        @media (max-width: 991px) {
          .image-column {
            width: 100%;
          }
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
        }
      `}</style>
    </>
  );
}

export default EventContactSection;