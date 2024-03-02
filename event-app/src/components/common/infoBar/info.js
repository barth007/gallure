import * as React from "react";


function ContactInfo(props) {
    const {backgroundColor} = props;
  const contactDetails = [
    {
      type: "email",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7d642bfa564725ba43404d33da305925a32974ca716cb04015b762cb1e7d3a3?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      alt: "Email Icon",
      contactInfo: "info@gallure53llc.com",
    },
    {
      type: "phone",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf24d7c12c50d7c985880b4b1d23b4ef768c895a3c69b9d5a1a416393140c3c3?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      alt: "Phone Icon",
      contactInfo: "(+1)346-603-9196",
    }
  ];

  return (
    <>
      <header className="contact-container" style={{backgroundColor:backgroundColor}}>
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-section">
            <div className="icon-container">
              <img loading="lazy" src={detail.src} alt={detail.alt} className="contact-icon" />
              <div className="separator" />
              <small className="contact-info">{detail.contactInfo}</small>
            </div>
          </div>
        ))}
      </header>
      <style jsx>{`
        .contact-container {
          display: flex;
          justify-content: center;
          align-items: center;
          justify-content: flex-end;
          border-bottom: 1px solid #000;
          font-size: 20px;
          color: #2d2d2d;
          font-weight: 600;
          padding: 18px 60px;
          width:100%;
          line-height: 100%;
          height: 45px;

        }
        @media (max-width: 991px) {
          .contact-container {
            padding: 0 20px;
          }
        }
        .contact-section {
          display: flex;
          gap: 11px;
          padding-left: 24px;
        }
        @media (max-width: 991px) {
          .contact-section {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .icon-container {
          display: flex;
          flex: 1;
          gap: 12px;
        }
        .contact-icon {
          aspect-ratio: 1.35;
          object-fit: auto;
          object-position: center;
          width: 23px;
          margin: auto 0;
        }
        .separator {
          background-color: rgba(255, 255, 255, 0.08);
          width: 1px;
          height: 35px;
        }
        .contact-info {
          font-family: Urbanist, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
      `}</style>
    </>
  );
}

export default ContactInfo;