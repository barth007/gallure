import React from "react";
import BookingButton from "../home/bannerButton";
import events from "../../../images/about/events.jpg"

function EventInfoComponent() {
  const title = (<span>About <br/> Gallure Events</span>)
  return (
    <>
      <section className="eventInfoSection">
        <div className="eventInfoContainer">
          <article className="eventContent">
            <div className="imageWrapper">
              {/* <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&"alt="Event presentation" className="eventImage" /> */}
              <img loading="lazy" srcSet={events} alt="Event presentation" className="eventImage"/>
            </div>
            <div className="textContent">
              <section className="textWrapper">
                <h2 className="sectionTitle">{title}</h2>
                <p className="sectionDescription">
                  At Gallure Events, we are passionate about turning your dreams into unforgettable moments. As a premier event planning company, we take pride in our commitment to excellence, creativity, and seamless execution. From concept to completion, we are dedicated to crafting events that leave a lasting impression.
                </p>
                <div className="buttonCall"> 
                <BookingButton/>
              </div>
              </section>
              
            </div>
          </article>
        </div>
      </section>
      <style jsx>{`
      .buttonCall{
        margin-top: 40px;
      }
        .eventInfoSection {
          justify-content: center;
          align-items: center;
          border-radius: 63px;
          background-color: #fff;
          display: flex;
          padding: 50px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          margin-top: -120px;
          
        }
        
        .eventInfoContainer {
          margin-top: 38px;
        }
       
        .eventContent {
          gap: 20px;
          display: flex;
          margin-top: -36px;
        }
       
        .imageWrapper {
          justify-content: center;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          max-width: 500px;
          height:  max-content;
        }
        
        .eventImage {
          aspect-ratio: 0.76;
          object-fit: cover;
          width: 100%;
          border-radius: 8px;
          height: 800px;
        }
       
        .textContent {
          display: flex;
          flex-direction: column;
          line-height: normal;
          max-width: 500px;
          height: 800px;
        }
        
        .textWrapper {
          border-radius: 12px;
          background-color: #151515;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          width: 100%;
          padding: 150px 80px 50px 40px;
        }
       
        .sectionTitle {
          color: #fff;
          letter-spacing: -3px;
          margin-top: -9px;
          font: 700 60px/72px Helvetica, Arial, sans-serif;
        }
        
        .sectionDescription {
          color: #fff;
          margin-top: 49px;
          font: 500 20px/32px Helvetica, Arial, sans-serif;
        }
        @media (max-width: 991px) {
          .sectionDescription {
            margin-top: 40px;
            font-size: 16px;
          }
          .eventInfoSection{
            margin-top: -38px;
            border-radius: 8px;
            max-width: 740px;
          }
          .imageWrapper {
            width: 100%;
          }
          .textContent {
            height: 500px;
            margin-top: 25px;
            margin-bottom: 178px;
            width: 100%;
          }
          .imageWrapper {
            max-width: 100%;
            margin-top: 24px;
          }
          
          .sectionTitle {
            margin-top: 40px;
            font-size: 40px;
            line-height: 53px;
          }
          .textWrapper {
            padding: 20px;
          }
          
          .eventImage {
            max-width: 100%;
            height: 500px;
          }
          .eventContent {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
          .eventInfoSection {
            padding: 0 20px;
          }
          .buttonCall{
            margin-top: 25px;
            margin-bottom: 38px;
          }
        }

        @media (max-width: 750px){
          .eventInfoSection{
            max-width: 659px;
          }
         

        }
        @media (max-width: 650px){
          .eventInfoSection{
            max-width: 606px;
          }

        }
        @media (max-width: 600px){
            .eventInfoSection{
              max-width: 546px;
              margin-top: -52px;
              margin-left: auto;
              margin-right: auto;
            }
        }
        @media (max-width: 500px){
          .eventInfoSection {
            width: 383px;
            margin-top: -52px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 400px){
          .eventInfoSection{
            max-width: 345px;

          }
          .sectionTitle{
            font-size: 30px;
            line-height: 37px;
          }
          .sectionDescription{
            font-size: 16px;
            line-height: 30px;

          }
        }
        @media (max-width: 360px){
          .eventInfoSection {
            max-width: 335px;
          }
        }
        @media (max-width: 320px){
          .eventInfoSection {
            max-width: 295px;
          }

        }
        
      `}</style>
    </>
  );
}

export default EventInfoComponent;