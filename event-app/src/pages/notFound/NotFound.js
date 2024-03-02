import Footer from "../../components/common/footer/footer";
import NavBar from "../../components/common/navbar/navbar";
import ContactInfo from "../../components/common/infoBar/info";
import notFound from "../../images/notFound.gif"



const NotFound = ()=>{
    const contactInfoBackground = "#FAF0F7";
    const image_src = "https://cdn.builder.io/api/v1/image/assets/TEMP/c6091f7d68ab946ee137a88dc128fde6c599eff2596cdfa11ff50af883553dcf?apiKey=c79a152b41e64f7db55346c2899c15e3&";
    const text_color="#05060F";
    const call_txt_color="#05060F";
    const contact_txt_color="#FFF"
    const call_btn_border="none";
    const con_btn_border="1px solid #FFF";
    const call_btn_bcolor="rgba(5, 6, 15, 0.04)";
    const con_btn_bcolor ="#192E28";
    const hamburgerColor ="#05060F"
    
  
    return(
        <>
           <ContactInfo backgroundColor={contactInfoBackground}/>
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
            <section  className="notFound" style={{ backgroundImage: `url(${notFound})` }}>
                {/* <img src={notFound}/>
                */}

            </section>
            <Footer/>
            <style jsx>{`
            .notFound{
                width: 100wh;
                height: 100vh;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }
           

            `}</style>
        </>
    );
}

export default NotFound;