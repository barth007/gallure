import * as React from "react";
import {NavLink, Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnapchat,  faTiktok, faInstagram  } from '@fortawesome/free-brands-svg-icons';
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
             <strong>E-Mail:</strong> info@gallure53.com
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
           <p><NavLink  className="nav-item" to='/'>Home</NavLink></p>
           <p><NavLink  className="nav-item" to='/about'>About us</NavLink></p>
           <p><NavLink  className="nav-item" to='/gallery'>Gallery</NavLink></p>
          
         </section>
       
         <section className="get-started">
           <header className="section-header">
             <h3>Get Started</h3>
             <div className="section-divider" />
           </header>
           <p><NavLink  className="nav-item" to='/contact'>Consultation</NavLink></p>
           <p><NavLink  className="nav-item" to='/contact'>Booking</NavLink></p>
         </section>
         <section className="other-info">
           <header className="section-header">
             <h3>Follow Us</h3>
             <div className="section-divider" />
           </header>
          
           <p>Contact Us</p>
           <div className="social-media-icons">
             <Link to="https://www.snapchat.com/add/gallure23" className="icon"><FontAwesomeIcon icon={faSnapchat} className="icon" /></Link>
             <Link to=""><FontAwesomeIcon icon={faTiktok} className="icon" /></Link>
            <Link to="https://www.instagram.com/gallure_events?igsh=MXdmcGo0eXVqNDN0ZQ=="><FontAwesomeIcon icon={faInstagram} className="icon" /></Link>
           </div>
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
       .get-started p .nav-item, .info p .nav-item{
         color: rgba(153,153,153,1);
        
       }
     
     
       .get-started p a:hover, .info p .nav-item:hover{
         color: #c48383;
        
       }
       .nav-item.active{
         color: #c48383 !important;
        
       }
       .social-media-icons {
         display: flex;
         gap: 15px;
         margin-top: 8px;
         align-items: center;
       }
        .icon {
          items-align: center;
         font-size: 23px;
         color: #FFF;
         transition: transform 0.3s ease;
       }
       .icon:hover{
         color: #c48383;
         transform: scale(1.2);
       
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
         padding: 0 0px 50px;


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
         font-size: 15px;
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
         font-size: 15px;
       }
       strong {
         color: #fff;
       }
      
     `}</style>
   </>
 );
}
export default Footer;
