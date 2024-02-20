import * as React from "react";


function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <section className="footer-contact-info">
            <header className="section-header">
              <h3>Contact us</h3>
              <div className="section-divider" />
            </header>
            <p className="address">
              <strong>Address:</strong>{" "}
              PO Box 000 Collins Street, New York 73829
            </p>
            <p className="email">
              <strong>Mail:</strong> info@gallure.com
            </p>
            <p className="phone">
              <strong>Phone:</strong> 1(000) 000-0000
            </p>
            <p className="office-hours">
              <strong>Office Hours:</strong> 8 AM - 6 PM : Mon - Sat
            </p>
          </section>
          <section className="info">
            <header className="section-header">
              <h3>Information</h3>
              <div className="section-divider" />
            </header>
            <p>About us</p>
            <p>Services</p>
            <p>Testimonials</p>
            <p>Our Values</p>
          </section>
          <section className="other-info">
            <header className="section-header">
              <h3>Other Information</h3>
              <div className="section-divider" />
            </header>
            <p>Contact Us</p>
            <p>Social Media</p>
            <div className="social-media-icons">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/970b90cfb0882deb908b65f43d70097a33c033871f06159bc8dff122bb69aaf9?apiKey=c79a152b41e64f7db55346c2899c15e3&" alt="Social Media Icon" className="icon" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2ca9d50f85109ba96c149d82320af59e6227e44af10076d5deb5af9cb8815e?apiKey=c79a152b41e64f7db55346c2899c15e3&" alt="Social Media Icon" className="icon" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ff85b725b52a642a65d7a30b76d8aad07d8adf095bb4e518349212ebfd66562?apiKey=c79a152b41e64f7db55346c2899c15e3&" alt="Social Media Icon" className="icon" />
            </div>
          </section>
          <section className="get-started">
            <header className="section-header">
              <h3>Get Started</h3>
              <div className="section-divider" />
            </header>
            <p>Consultation</p>
            <p>Booking</p>
          </section>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          background-color: #161616;
          padding: 45px 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: static;
          bottom: 0;
          width: 100%;

        }
        @media (max-width: 991px) {
          .footer {
            padding: 0 20px;
          }
        }
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 100%;
          padding: 0 18px 50px;

        }
        .footer-contact-info, .info, .other-info, .get-started {
          flex: 1;
          margin: 20px;
          min-width: 200px;
        }
        .section-header h3 {
          color: #fff;
          font-weight: 600;
          text-transform: uppercase;
        }
        .section-divider {
          border-bottom: 1px solid #af6183;
          margin-top: 9px;
        }
       .info p, .other-info p, .footer-contact-info p, .get-started p{
          font-family: Lato, sans-serif;
          line-height: 28px;
          color: rgba(153,153,153,1);
          margin-top: 20px;
          font-size: 16px;
        }
        strong {
          color: #fff;
        }
        .social-media-icons {
          display: flex;
          gap: 7px;
          margin-top: 8px;
        }
        .icon {
          width: 40px;
          height: 40px;
        }
      `}</style>
    </>
  );
}
export default Footer;
