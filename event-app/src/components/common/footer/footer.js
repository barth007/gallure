import * as React from "react";
import { Link, useNavigate} from "react-router-dom";
import snapchat from "../../../images/icons/snapchat.svg"
import tiktok from "../../../images/icons/tiktok.svg"


function Footer() {
  const text_color="rgba(153,153,153,1)";
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <section className="footer-contact-info">
            <header className="section-header">
              <h3>Contact us</h3>
              <div className="section-divider" />
            </header>
            
            <p className="email">
              <strong>E-Mail:</strong> info@gallure53llc.com
            </p>
            <p className="phone">
              <strong>Phone:</strong> (+1)346-603-9196
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
            <p><Link style={{color: text_color}} className="nav-item" to='/'>Home</Link></p>
            <p><Link style={{color: text_color}} className="nav-item" to='/about'>About us</Link></p>
            <p><Link style={{color: text_color}} className="nav-item" to='/gallery'>Gallery</Link></p>
            
          </section>
          <section className="other-info">
            <header className="section-header">
              <h3>Socials</h3>
              <div className="section-divider" />
            </header>
            
            <p>Contact Us</p>
            <div className="social-media-icons">
              <Link to="https://www.snapchat.com/add/gallure23"><img src={snapchat} alt="Social Media Icon" className="icon" /></Link>
              <Link to=""><img src={tiktok} alt="Social Media Icon" className="icon" /></Link>
             <Link to="https://www.instagram.com/gallure_events?igsh=MXdmcGo0eXVqNDN0ZQ=="><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ff85b725b52a642a65d7a30b76d8aad07d8adf095bb4e518349212ebfd66562?apiKey=c79a152b41e64f7db55346c2899c15e3&" alt="Social Media Icon" className="icon" /></Link> 
            </div>
          </section>
          <section className="get-started">
            <header className="section-header">
              <h3>Get Started</h3>
              <div className="section-divider" />
            </header>
            <p><Link style={{color: text_color}} className="nav-item" to='/contact'>Consultation</Link></p>
            <p><Link style={{color: text_color}} className="nav-item" to='/contact'>Booking</Link></p>
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
