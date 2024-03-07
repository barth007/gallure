import React from "react";

function EventInfoSection() {
  const eventInfoData =    [
  {
      id: 1,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/66eecd622646af2b931f2d739253eea4bdcae2d32c90885ccd8d5d33e8184b34?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      imageAlt: "Gallure Vision",
      title: "Our Vision ",
      subTitle: "at Gallure Events",
      description: "Gallure Events envisions a world where every celebration is a masterpiece. We believe that each event should reflect the unique personality and style of our clients. Whether it's a wedding, corporate gathering, or a special celebration, our goal is to transform your vision into a breathtaking reality."
    },
    {
      id: 2,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6a13a2ab8bc36301182633635ece090817d562847505c33f3274213d5c991bf?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      imageAlt: "Gallure Team",
      title: "Who We Are ",
      subTitle: "(The Gallure Team)",
      description: "Meet the talented individuals behind Gallure Events – a team of seasoned professionals who bring creativity, expertise, and passion to every project. From event designers and planners to logistics experts, our team is committed to ensuring that every detail is flawlessly executed."
    }
  ];

  return (
    <section className="event-info-section">
      <div className="event-info_wrapper">
      {eventInfoData.map((info) => (
        <EventInfoCard
          key={info.id}
          imageUrl={info.imageUrl}
          imageAlt={info.imageAlt}
          title={info.title}
          subTitle={info.subTitle}
          description={info.description}
        />
      ))}
      </div>
      <style jsx>{`
        .event-info-section {
          background-color: #192e28;
          display: flex;
          padding-top: 50px;
          padding-bottom: 100px;
          width: 100%;
        }
        .event-info_wrapper{
          display: flex;
          margin-left: auto;
          max-width: 1200px;
          margin-right: auto;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .event-info-section {
            padding: 0 20px;
          }
          .event-info_wrapper{
            display: flex;
            flex-direction: column;
            margin-top: 45px;
            margin-bottom: 45px;
            padding-bottom: 50px;
            margin-right: auto;
            margin-left: auto;
          }
          
        }
        @media (max-width: 600px) {
          // .event-info_wrapper{
          //   max-width: 500px;
            
          // }

        }
        @media (max-width: 500px) {
          // .event-info_wrapper{
          //   width: 100%;
          // }
          // .event-info_wrapper{
          //   width: 89%;
          // }

        }
      `}</style>

    </section>
  );
}

function EventInfoCard({ imageUrl, imageAlt,subTitle, title, description }) {
  return (
    <article className="event-info-card">
      <img src={imageUrl} alt={imageAlt} className="event-image_card" />
      <h2 className="event-title">{title}</h2>
      <h2 className="event-title sub-title">{subTitle}</h2>
      <p className="event-description">{description}</p>
      
      <style jsx>{`
        .event-info-card {
          border-radius: 12px;
          background-color: #151515;
          display: flex;
          flex-direction: column;
          align-items: start;
          max-width: 600px;
          box-sizing: border-box;
          padding: 20px;
          margin-top: 25px;
          padding-bottom: 13%;
        }
        
        .event-title {
          font-size: 40px;
          line-height: 53px;
        }
        
        .event-image_card {
          aspect-ratio: 1;
          object-fit: cover;
          width: 72px;
          margin-top: 17px;
        }
        .event-title {
          color: #fff;
          margin-top: 32px;
          font-size: 60px;
          line-height: 72px;
          font-weight: 700;
        }
        .sub-title{
          font-size: 48px;
          margin-top: -9px;
        }
        
        .event-description {
          color: #fff;
          margin-top: 45px;
          font-size: 20px;
          line-height: 32px;
          font-weight: 500;
        }
        @media (max-width: 991px) {
         
          .event-description {
            margin-top: 40px;
          }
          .event-title {
            font-size: 30px;
            line-height: 45px;
          }
          .event-info-card {
            padding: 20px;
            margin-top: 25px;
            padding-bottom: 13%;
            max-width: 689px;
          }
          .event-description {
            font-size: 23px;
            margin-top: 17px;
          }
        }
        
        @media (max-width: 600px){
          .event-title {
            font-size: 30px;
          }
          .event-image_card {
            width: 51px;
          }
          .event-description {
            font-size: 16px;
            margin-top: 17px;
          }
          .event-info-card{
            max-width: 500px;
          }
        }
        @media (max-width: 500px){
          .event-info-card {
            max-width: 341px;
          }
        }
        @media (max-width: 390px){
            .event-info-card{
              max-width: 304px;
            }
        }
        @media (max-width: 340px){
          .event-info-card{
            max-width: 255px;
          }
          .event-title {
            font-size: 25px;
        }
          
        }
      `}</style>
    </article>
  );
}

export default EventInfoSection;