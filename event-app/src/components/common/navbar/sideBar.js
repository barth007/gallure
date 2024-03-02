import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import x from "../../../images/icons/x.png"

function NavigationMenu({ShowNavbar}) {
  const navigate = useNavigate();
  // const toggleVisibility = ()=>{
  //   setIsVisible(!isVisible);
  //   console.log('isVisible:', isVisible);
  // }
 
  const menuItems = [
    { name: 'Home', 
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae8e8e9092065cc978593de42d6a04153bf76d2905494eddd019dbce1036c577?apiKey=c79a152b41e64f7db55346c2899c15e3&', 
    alt: 'Company Icon',
    route: '/'
  },
    { name: 'About Us', 
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c56dcc71d216b42459155f24bdafa538c25b97fcfd2649202f8e8aacdd95dba2?apiKey=c79a152b41e64f7db55346c2899c15e3&', 
    alt: 'Courses Icon',
    route: '/about'
  },
    { name: 'Gallery', 
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d90ec0940f7c104e2e8a071a56f6bf0b9533ae2bcaef2bb65fbc14d4c4fff930?apiKey=c79a152b41e64f7db55346c2899c15e3&', 
    alt: 'Partner Icon',
    route: '/gallery'
  },
  ];
  

  return (
    <>
     <nav className="menuContainer">
        <header className="menuHeader">
          <div onClick={ShowNavbar}><img loading="lazy" src={x} alt="Menu Icon" className="menuIcon" /></div>
          
          <div className="menuTitle">MENU</div>
        </header>
        {menuItems.map((item) => (
          
          <Link className="nav-item" to={item.route}><MenuItem name={item.name}  key={item.name} /></Link>
        ))}
        {/* <div className="community">Community</div> */}
        <div className="loginAction">Call Us</div>
        <div onClick={()=>navigate('/contact')} className="applyAction">Contact us</div>
      </nav>
      <style jsx>{`
      @media (max-width: 991px) {

        .menuContainer {
          border-radius: 30px 0px 0px 30px;
          // background-color: #fff5ef;
          background-color: rgba(255, 255, 255);
          display: flex;
          max-width: 350px;
          flex-direction: column;
          font-size: 16px;
          color: #05060f;
          font-weight: 500;
          padding: 23px 52px 50px;
          z-index: 1;
          margin-left: -192px;
          margin-top: -7px;
          height: 50vh;
        }
        .menuHeader {
          display: flex;
          justify-content: space-between;
          gap: 5px;
          font-size: 13px;
          color: #000;
          font-weight: 600;
          white-space: nowrap;
          text-align: center;
          letter-spacing: -0.79px;
          line-height: 387.5%;
          padding: 2px 0;
        }
        .menuIcon {
          width: 40px;
          object-fit: contain;
          align-self: start;
        }
        .menuTitle, .community, .loginAction, .applyAction {
          font-family: Urbanist, sans-serif;
          margin-top: 26px;
          line-height: 130%;
        }
        .loginAction, .applyAction {
          border-radius: 10px;
          justify-content: center;
          font-weight: 700;
          text-align: center;
          padding: 13px 16px;
        }
        .loginAction {
          background-color: rgba(5, 6, 15, 0.04);
        }
        .applyAction {
          background-color: #192E28;
          color: #fff;
        }
      }
      `}</style>
    </>
  );
}

function MenuItem({ name }) {
  return (
    <div className="menuItem">
      <div className="itemName">{name}</div>
      {/* <img loading="lazy" src={icon} alt={alt} className="itemIcon" /> */}
      <style jsx>{`
        .menuItem {
          display: flex;
          margin-top: 26px;
          padding-right: 8px;
          justify-content: space-between;
          gap: 8px;
          color: #222;
          white-space: nowrap;
          line-height: 150%;
        }
        .itemName {
          font-family: Urbanist, sans-serif;
          flex-grow: 1;
        }
        .itemIcon {
          width: 12px;
          object-fit: contain;
          margin: auto 0;
        }
      `}</style>
    </div>
  );
}

export default NavigationMenu;