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
          justify-content: center;
          align-items: center;
        
          padding-top: 50px;
          padding-bottom: 100px;
          width: 100%;
        }
        .event-info_wrapper{
          display: flex;
          margin-left: auto;
          width: 80%;
          margin-right: auto;
          gap: 15px;
        }
        @media (max-width: 991px) {
          .event-info-section {
            padding: 0 20px;
          }
          .event-info_wrapper{
            display: flex;
            flex-wrap: wrap;
            width: 83%;
            margin-top: 45px;
            margin-bottom: 45px;
            padding-bottom: 50px;
          }
        }
        @media (max-width: 600px) {
          .event-info_wrapper{
            width: 65%;
          }

        }
        @media (max-width: 500px) {
          .event-info_wrapper{
            width: 100%;
          }

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
          width: 100%;
          padding: 50px;
          margin: 0 10px;
          box-sizing: border-box;
        }
        .event-info-card {
          padding: 20px;
          margin-top: 25px;
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
         -height: 32px;
          font-weight: 500;
        }
        @media (max-width: 991px) {
          .event-description {
            margin-top: 40px;
          }
          .event-title {
            font-size: 28px;
            line-height: 37px;
          }
          .event-info-card {
            padding: 20px;
            margin-top: 25px;
          }
          .event-description {
            font-size: 14px;
            margin-top: 17px;
          }

        }
      `}</style>
    </article>
  );
}

export default EventInfoSection;