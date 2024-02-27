import React from "react";

function EventInfoComponent() {
  return (
    <>
      <section className="eventInfoSection">
        <div className="eventInfoContainer">
          <article className="eventContent">
            <div className="imageWrapper">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d18775865da2fbdeabb72e5db78d95f2a91c55e7f5d8a24d1ee63953b55430e9?apiKey=c79a152b41e64f7db55346c2899c15e3&"alt="Event presentation" className="eventImage" />
            </div>
            <div className="textContent">
              <section className="textWrapper">
                <h2 className="sectionTitle">About Gallure Events</h2>
                <p className="sectionDescription">
                  At Gallure Events, we are passionate about turning your dreams into unforgettable moments. As a premier event planning company, we take pride in our commitment to excellence, creativity, and seamless execution. From concept to completion, we are dedicated to crafting events that leave a lasting impression.
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
      <style jsx>{`
        .eventInfoSection {
          justify-content: center;
          align-items: center;
          border-radius: 63px;
          background-color: #fff;
          display: flex;
          padding: 50px;
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          margin-top: -120px;
        }
        @media (max-width: 991px) {
          .eventInfoSection {
            padding: 0 20px;
          }
        }
        .eventInfoContainer {
          margin-top: 38px;
          width: 100%;
          max-width: 1248px;
        }
        @media (max-width: 991px) {
          .eventInfoContainer {
            max-width: 100%;
          }
        }
        .eventContent {
          gap: 20px;
          display: flex;
          margin-top: -36px;
        }
        @media (max-width: 991px) {
          .eventContent {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }
        .imageWrapper {
          justify-content: center;
          border-radius: 8px;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 500px;
        }
        @media (max-width: 991px) {
          .imageWrapper {
            max-width: 100%;
            margin-top: 24px;
          }
        }
        .eventImage {
          aspect-ratio: 0.76;
          object-fit: cover;
          width: 100%;
        }
        @media (max-width: 991px) {
          .eventImage {
            max-width: 100%;
          }
        }
        .textContent {
          display: flex;
          flex-direction: column;
          line-height: normal;
          margin-left: 20px;
          width: 500px;
        }
        @media (max-width: 991px) {
          .textContent {
            width: 100%;
          }
        }
        .textWrapper {
          border-radius: 12px;
          background-color: #151515;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          width: 100%;
          padding: 50px 80px 50px 40px;
        }
        @media (max-width: 991px) {
          .textWrapper {
            padding: 20px;
          }
        }
        .sectionTitle {
          color: #fff;
          letter-spacing: -3px;
          margin-top: -9px;
          font: 700 60px/72px Helvetica, Arial, sans-serif;
        }
        @media (max-width: 991px) {
          .sectionTitle {
            margin-top: 40px;
            font-size: 40px;
            line-height: 53px;
          }
        }
        .sectionDescription {
          color: #fff;
          margin-top: 49px;
          font: 500 20px/32px Helvetica, Arial, sans-serif;
        }
        @media (max-width: 991px) {
          .sectionDescription {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default EventInfoComponent;