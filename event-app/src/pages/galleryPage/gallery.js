import Footer from "../../components/common/footer/footer";
import NavBar from "../../components/common/navbar/navbar";
import ContactInfo from "../../components/common/infoBar/info";
import BannerTitle from "../../components/common/gallery/banner";
import BannerFooter from "../../components/common/gallery/footerBanner";
import React, { useState} from 'react';
// import { ThreeDots } from 'react-loader-spinner';
import ImageGallery from "../../components/common/gallery/ImageGallery";
import Tabs from "../../components/common/gallery/Tabs";
import photo1 from "../../images/cards/photo1.jpeg"
import photo2 from "../../images/cards/photo2.jpeg"
import photo3 from "../../images/cards/photo3.jpeg"
import photo4 from "../../images/cards/photo4.jpeg"
import photo5 from "../../images/cards/photo5.jpeg"
import photo6 from "../../images/cards/photo6.jpeg"
import reunion1 from "../../images/gallery/concert/REUNION-2.jpg"
import reunion2 from "../../images/gallery/concert/REUNION-8.jpg"
import reunion3 from "../../images/gallery/concert/REUNION-11.jpg"
import reunion4 from "../../images/gallery/concert/REUNION-19.jpg"
import reunion5 from "../../images/gallery/concert/REUNION-58.jpg"
import reunion6 from "../../images/gallery/concert/REUNION-94.jpg"
import reunion7 from "../../images/gallery/concert/REUNION-102.jpg"
import reunion8 from "../../images/gallery/concert/REUNION-110.jpg"
import reunion9 from "../../images/gallery/concert/REUNION-114.jpg"
import reunion10 from "../../images/gallery/concert/REUNION-135.jpg"
import useImagePreloader from "../../utils/useImagePreloader";
import wedding1 from "../../images/gallery/weddings/1.jpg"
import wedding2 from "../../images/gallery/weddings/2.jpg"
import wedding3 from "../../images/gallery/weddings/3.jpg"
import wedding4 from "../../images/gallery/weddings/4.jpg"
import wedding5 from "../../images/gallery/weddings/5.jpg"
import wedding6 from "../../images/gallery/weddings/6.jpg"
import wedding7 from "../../images/gallery/weddings/7.jpg"
import wedding8 from "../../images/gallery/weddings/8.jpg"
import wedding9 from "../../images/gallery/weddings/9.jpg"
import wedding10 from "../../images/gallery/weddings/10.jpg"






const categories = ['Anniversaries', 'Weddings', 'Birthdays', 'Conferences', 'Seminars'];

const imageSources = {
    Weddings: [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6, wedding7, wedding8, wedding9, wedding10],
    Birthdays: [photo1, photo2, photo3, photo4, photo5, photo6],
    Conferences: [/* array of conference image URLs */],
    Seminars: [/* array of seminar image URLs */],
    Anniversaries: [reunion1, reunion2, reunion3, reunion4, reunion5, reunion6, reunion7, reunion8, reunion9, reunion10],
    };
const GalleryPage = ()=>{
    
    const contactInfoBackground = "#FAF0F7";
    const image_src = "https://cdn.builder.io/api/v1/image/assets/TEMP/c6091f7d68ab946ee137a88dc128fde6c599eff2596cdfa11ff50af883553dcf?apiKey=c79a152b41e64f7db55346c2899c15e3&";
    const text_color="#05060F";
    const call_txt_color="#05060F";
    const contact_txt_color="#FFF"
    const call_btn_border="none";
    const con_btn_border="1px solid #FFF";
    const call_btn_bcolor="rgba(5, 6, 15, 0.04)";
    const con_btn_bcolor ="#192E28";
    const title = (<span>Don't take us by our<br/> word, view our<br/> Gallery</span>)
    const bannerTitleColor = "#ba716d";
    const hamburgerColor = "#000";

    const [activeCategory, setActiveCategory] = useState('Anniversaries');
    // const [images, setImages] = useState([]);
    // const [loading, setLoading] = useState(true);
    const {loadedImages, loading} = useImagePreloader(imageSources[activeCategory]);
  
    
    return(
        <>
        <section>
          <div>
            <ContactInfo backgroundColor={contactInfoBackground} />
          </div>
          <div className="gallery_navbar">
            <NavBar
              image_src={image_src}
              text_color={text_color}
              call_txt_color={call_txt_color}
              contact_txt_color={contact_txt_color}
              call_btn_border={call_btn_border}
              con_btn_border={con_btn_border}
              call_btn_bcolor={call_btn_bcolor}
              con_btn_bcolor={con_btn_bcolor}
              hamburgerColor={hamburgerColor}
            />
          </div>
          <div>
            <BannerTitle title={title} color={bannerTitleColor} />
          </div>
          <div >
        
            <div>
          <div className="md:w-[70%] lg:w-[70%]  container mx-auto p-4 mt-[10%] bg-white">
            <Tabs categories={categories} activeCategory={activeCategory} onChangeCategory={setActiveCategory} />
            <ImageGallery images={loadedImages} loading={loading} />
            {/* <ThreeDots color="#ba716d" height={80} width={80} /> */}
          </div>
        </div>
          </div>
          <div className="mt-[-10%]"><BannerFooter /></div>
          <div><Footer /></div>
        </section>
        <style jsx>{`
          .gallery_navbar {
            padding-top: 10px;
          }
        `}</style>
      </>
    )
}

export default GalleryPage;