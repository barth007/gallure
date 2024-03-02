import React from 'react';


function EventInnovationSection({content}) {
  
  return (
    <section className="eventInnovationSection">
      <div className="contentWrapper">
        <article className="textContainer">
          <p className="eventDescription">
            {content}
          </p>
        </article>
        <div className="imageContainer">
          <img loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/181e3359997ab45ee5a389777378a3bde820b41cc3d464771d8d7d25a77ada29?apiKey=c79a152b41e64f7db55346c2899c15e3&" 
          alt="Creative event decoration" className="eventsImage" />
        </div>
      </div>
      <style jsx>{`
        .eventInnovationSection {
          align-self: stretch;
          border-radius: 16px;
          background-color: #1f1f1f;
          display: flex;
          max-width: 572px;
          flex-direction: column;
          justify-content: center;
          padding: 8px;
        }
        .contentWrapper {
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          padding: 1px 14px 14px;
          width: 395px;
        }
        @media (max-width: 991px) {
          .contentWrapper {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .textContainer {
          color: #fff;
          margin-top: 17px;
          font: 400 24px/36px "Plus Jakarta Sans", -apple-system, Roboto, Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .textContainer {
            max-width: 100%;
          }
        }
        .imageContainer {
          justify-content: center;
          border-radius: 32px;
          background-color: #fff;
          display: flex;
          margin-top: 59px;
          flex-direction: column;
          
          
        }
        @media (max-width: 991px) {
          .imageContainer {
            max-width: 100%;
            margin-top: 40px; 
          } 
        }
        .eventsImage {
          aspect-ratio: 1.27;
          object-fit: cover;
          object-position: center;
          width: 100%;
          border-radius: 10px;
        }
        @media (max-width: 991px) {
          .eventsImage {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default EventInnovationSection;