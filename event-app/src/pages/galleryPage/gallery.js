import Footer from "../../components/common/footer/footer";
import NavBar from "../../components/common/navbar/navbar";
import ContactInfo from "../../components/common/infoBar/info";
import BannerTitle from "../../components/common/gallery/banner";
import EventCategories from "../../components/common/gallery/gallery_botton";
import GalleryComponent from "../../components/common/gallery/gallery_images";




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
    const title = "Don't take us by our word, view our Gallery";
    const bannerTitleColor = "#ba716d";
    const hamburgerColor = "#FFF";
    return(
        <>
           <section>
            <div>
            <ContactInfo backgroundColor={contactInfoBackground}/>
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
                    <BannerTitle title={title} color={bannerTitleColor}/>
                </div>
                <div>
                    <EventCategories/>
                </div>
                <div style={{paddingBottom: "10%"}}>
                    <GalleryComponent/>
                </div>
                <div ><Footer/></div>
            </section>
            <style jsx>{`
            .gallery_navbar{
                padding-top: 10px;
            }
            `}</style>
        </>
    )
}

export default GalleryPage;