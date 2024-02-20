import ContactForm from "./contactForm";
import ContactInfo from "../../components/common/infoBar/info";
import NavBar from "../../components/common/navbar/navbar";
import Footer from "../../components/common/footer/footer";


const ContactPage=()=>{
    const backgroundColor = "#BA7975";
    const image_src = "https://cdn.builder.io/api/v1/image/assets/TEMP/a373daf46c4ac14bc5d3638039f0721609b950330f193a076a3b0779882332af?";
    const text_color="#FFF";
    const call_txt_color="#161616";
    const contact_txt_color="#FFF"
    const call_btn_border="1px solid #161616 ";
    const con_btn_border="1px solid #161616 ";
    const call_btn_bcolor="#FFF";
    const con_btn_bcolor="#CB8C88";
    const navbackground = "#161616";
    return(
        <>
                <div>
            <ContactInfo backgroundColor={backgroundColor} />
            </div>
        
            <main className="contact-page_container">
            <div className="contact_navbar-wrapper">
            <NavBar
                image_src={image_src}
                text_color={text_color}
                call_btn_bcolor={call_btn_bcolor}
                con_btn_bcolor={con_btn_bcolor}
                con_btn_border={con_btn_border}
                call_btn_border={call_btn_border}
                contact_txt_color={contact_txt_color}
                call_txt_color={call_txt_color}
                navbackground={navbackground}
            />
        </div>
        
        <div>
            <ContactForm/>
        </div>
        
            </main>
            <div>
            <Footer/>
        </div>
            <style jsx>
            {`
                .contact-page_container{
                    background-color: #161616;
                    padding-bottom: 8%;
                    
                }
                .contact_navbar-wrapper{
                    padding-top: 15px;
                    margin-bottom: 8%;
                }
                
            `}
        </style>

        </>
        

    );
}

export default ContactPage;