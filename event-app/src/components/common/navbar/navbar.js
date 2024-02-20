import React from "react";

function NavBar(props) {
  const {
    image_src,
    text_color,
    call_txt_color,
    contact_txt_color,
    call_btn_border,
    con_btn_border,
    call_btn_bcolor,
    con_btn_bcolor,
    navbackground
  }=props;
  return (
        <>
    <header className="header" style={{backgroundColor: navbackground}}>
      <div className="logo-container" style={{color: text_color}}>
        <img
          loading="lazy"
          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6091f7d68ab946ee137a88dc128fde6c599eff2596cdfa11ff50af883553dcf?apiKey=c79a152b41e64f7db55346c2899c15e3&"
          src={image_src}
          alt="Company Logo"
          className="logo"
        />
        <div className="company-names">
          <h1 className="company-main-name">Gallure</h1>
          <h2 className="company-sub-name">EVENTS LLC</h2>
        </div>
      </div>

      <nav className="navigation">
        <ul className="nav-links" style={{color: text_color}}>
          <li className="nav-item">About Us</li>
          <li className="nav-divider"></li>
          <li className="nav-item">Our Services</li>
          <li className="nav-divider"></li>
          <li className="nav-item">Gallery</li>
        </ul>

        <div className="contact-containers">
          <button className="contact-button" style={{backgroundColor: call_btn_bcolor, color:call_txt_color, border: call_btn_border}}>Call Us</button>
          <button className="contact-button contact-us" style={{backgroundColor: con_btn_bcolor, color:contact_txt_color, border: con_btn_border}}>Contact Us</button>
        </div>
      </nav>
    </header>
     
    <style jsx>{`
.header {
display: flex;
justify-content: space-around;
gap: 10px;
}
.logo-container {
display: flex;
gap: 10px;
color: #05060F;
align-items: start  }
.logo {
width: 70px;
aspect-ratio: 1.56;
object-fit: cover;
}
company-names {
display: flex;
flex-direction: column;
padding: 0 20px;
}
.company-main-name {
font-size: 40px;
font-family: "Grange Sofany", sans-serif;
}
.company-sub-name {
letter-spacing: 5.04px;
font-size: 8px;
font-family: "Grantha Sangam MN", -apple-system, Roboto, Helvetica, sans-serif;
align-self: center;
margin-top: -4px;
margin-left: 24px;
}

.navigation {
display: flex;
justify-content: space-between;
gap: 20px;
font-size: 20px;
height: 55px;
}
.nav-links {
display: flex;
gap: 12px;
padding: 0 20px;
list-style-type: none;
align-items: center;
color: #05060F;

}
.nav-item {
font-family: "Urbanist", sans-serif;
font-size: 1rem;


}
.nav-divider {
background-color: rgba(5, 6, 15, 0.35);
width: 2px;
height: 35px;
}
.contact-containers {
display: flex;
gap: 20px;
}
.contact-button {
font-family: "Urbanist", sans-serif;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
border-radius: 12.576px;
cursor: pointer;
text-align: center;
font-size: 16px;
margin: 4px 2px;

}
.contact-us {
background-color: #192e28;
color: #fff;
}
`
}</style>
 </>
   
  );
 }



export default NavBar;