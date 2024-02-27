import React from "react";
import BannerTitle from "../gallery/banner";
import NavBar from "../navbar/navbar";
import BookingButton from "./bannerButton";


const ImageContainer=() =>{
  // URL for the background image
  const imageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/8b6e747a-c98b-43bb-8709-a34dafdfbc1f?apiKey=c79a152b41e64f7db55346c2899c15e3&";
  const title = "Gallore Events – Where Dreams Take Center Stage!";
  const bannerTitleColor = "#192E28"
  const image_src = "https://cdn.builder.io/api/v1/image/assets/TEMP/c6091f7d68ab946ee137a88dc128fde6c599eff2596cdfa11ff50af883553dcf?apiKey=c79a152b41e64f7db55346c2899c15e3&";
  const text_color="#05060F";
  const call_txt_color="#05060F";
  const contact_txt_color="#FFF"
  const call_btn_border="none";
  const con_btn_border="1px solid #FFF";
  const call_btn_bcolor="rgba(5, 6, 15, 0.04)";
  const con_btn_bcolor ="#192E28";


  return (
    <section
      className="image-container"
      style={{ backgroundImage: `url(${imageUrl})` }}>
      <div style={{paddingBottom: "10px"}}>

                <NavBar
                            image_src={image_src}
                            text_color={text_color}
                            call_txt_color={call_txt_color}
                            contact_txt_color={contact_txt_color}
                            call_btn_border={call_btn_border}
                            con_btn_border={con_btn_border}
                            call_btn_bcolor={call_btn_bcolor}
                            con_btn_bcolor={con_btn_bcolor}
                        />
      </div>
      <div style={{marginBottom: "10px"}}> <BannerTitle title={title} color={bannerTitleColor}/></div>
      <div className="button-banner_wrapper" style={{display: "flex", justifyContent:"center", alignItem: "center"}}><BookingButton/></div>
      <style jsx>{`
        .image-container {
          background-color: #faf0f7;
          display: flex;
          padding-bottom: 111px;
          padding-top: 2%;
          flex-direction: column;
          background-size: cover; // Ensures the background covers the container
          background-position: center; // Centers the background image
          width: 100%; // The width should take the full container width
          height: 300px; // A predefined height to ensure visibility
        }
        .button-banner_wrapper{
            // margin-top: 30px;

        }
        
        @media (max-width: 991px) {
          .image-container {
            height: 200px; // Adjust height for smaller devices
          }
        }
      `}</style>
    </section>
  );
}

export default ImageContainer;