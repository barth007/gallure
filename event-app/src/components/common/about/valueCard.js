import React from 'react';


function EventInnovationSection({content, images}) {
  
  return (
    <section className="eventInnovationSection">
      <div className="contentWrapper ">
        <article className="textContainer">
          <p className="eventDescription">
            {content}
          </p>
        </article>
        <div className="imageContainer">
          <img loading="lazy" 
          srcSet={images}
          alt="Creative event decoration" className="eventsImage" />
        </div>
      </div>
      <style jsx>{`
        .eventInnovationSection {
          align-self: stretch;
          border-radius: 16px;
          background-color: #1f1f1f;
          display: flex;
          max-width: 573px;
          flex-direction: column;
          justify-content: center;
          padding: 8px;
        }
        .contentWrapper{
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          padding: 1px 14px 14px;
          width: 100%;
        }
       
        .textContainer {
          color: #fff;
          margin-top: 17px;
          font: 400 20px/30px "Plus Jakarta Sans", -apple-system, Roboto, Helvetica, sans-serif;
        }
       
        .imageContainer {
          justify-content: center;
          border-radius: 32px;
          background-color: #fff;
          display: flex;
          margin-top: 28px;
          flex-direction: column;
          
          
        }
       
        @media (max-width: 991px) {
          .eventsImage {
            max-width: 100%;
          }
          .contentWrapper {
            max-width: 100%;
            padding: 0 4px;
          }
          .textContainer {
            max-width: 100%;
            font-size: 14px;
            margin-top: 0;
          }
          .imageContainer {
            max-width: 100%;
            margin-top: 40px; 
          } 
        }
        .eventsImage {
          aspect-ratio: 1.27;
          object-position: center;
          width: 100%;
          border-radius: 10px;
        }
        .eventInnovationSection {
          max-width: 598px;
        }
        }
      `}</style>
    </section>
  );
}

export default EventInnovationSection;