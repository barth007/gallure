import EventInfoComponent from "../../components/common/about/eventsection";
import ContactInfo from "../../components/common/infoBar/info";
import NavBar from "../../components/common/navbar/navbar";
import EventInfoSection from "../../components/common/about/gallureInfo";
import EventContactSection from "../../components/common/about/eventContact";
import Values from "../../components/common/about/values";
import Footer from "../../components/common/footer/footer";
import EventPlanningValues from "../../components/common/about/toggleValues";


const AboutUsPage = ()=>{
    const contactInfoBackground = "#FAF0F7";
    const image_src = "https://cdn.builder.io/api/v1/image/assets/TEMP/a373daf46c4ac14bc5d3638039f0721609b950330f193a076a3b0779882332af?";
    const text_color="#FFF";
    const call_txt_color="#FFF";
    const contact_txt_color="#FFF"
    const call_btn_border="";
    const con_btn_border="1px solid #FFF";
    const call_btn_bcolor="#BA7975";
    const hamburgerColor="#FFF"
    // const con_btn_bcolor="#CB8C88";
    // const navbackground = "#161616";
    return (
        <>
            <section>
                <ContactInfo backgroundColor={contactInfoBackground}/>
            </section>
            <section className="navbar_wraper-about">
                <div className="nav_container-about">
                    <NavBar
                        image_src={image_src}
                        text_color={text_color}
                        call_txt_color={call_txt_color}
                        contact_txt_color={contact_txt_color}
                        call_btn_border={call_btn_border}
                        con_btn_border={con_btn_border}
                        call_btn_bcolor={call_btn_bcolor}
                        hamburgerColor={hamburgerColor}
                    />
                </div>
            </section>
            <div className="about-inverse">
                <EventInfoComponent/>
            </div>
            <div className="values-background">
                <EventInfoSection/>
                
                <Values/>
            </div>
            <div><EventPlanningValues/></div>
            
            <div>
                <EventContactSection/>
            </div>
            <div>
                <Footer/>
            </div>
    
            <style jsx>{`
                    .navbar_wraper-about{
                        background-color: #192E28;
                        height: 300px;
                        width: 100%;
                    }
                    .nav_container-about{
                        padding-top: 15px;
                    }
                    .about-inverse{
                        margin-top: -10%;
                    }
                    .values-background{
                        background-color: #192E28;
                    }
                    @media (max-width: 991px) {
                        .values-background{
                            display: flex;
                        }
                        .navbar_wraper-about{
                            height: 260px;
                        }
                        


                    }
                    @media (max-width: 500px) {
                        .navbar_wraper-about{
                            height: 165px;
                        }
                    }
                    @media (max-width: 370){
                        .about-inverse{
                            margin-top: -20%;
                        }
                    }
            `}</style>
            

        </>

    );
}
export default AboutUsPage