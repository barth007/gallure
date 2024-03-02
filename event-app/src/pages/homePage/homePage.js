import ContactInfo from "../../components/common/infoBar/info";
import ImageContainer from "../../components/common/home/bannerBackgroun";
import EventTestimonyHeader from "../../components/common/home/sliderSection";
import EventPlannerHeader from "../../components/common/home/eventplanner";
import Footer from "../../components/common/footer/footer";
import EventInfoComponent from "../../components/common/about/eventsection";

const HomePage = ()=>{
    const contactInfoBackground = "#FAF0F7";
    const TestimonybackgroundColor ="#161616";
    const Testimonytitle = "Our Testimonials";  
    const EventTittle ="Type of events we plan";
    const EventBackground = "#192E28";

    return(
        <>
        <div>
            <ContactInfo backgroundColor={contactInfoBackground}/>

        </div>
        <div>
        </div>
        <div><ImageContainer/></div>
        <div><EventPlannerHeader title={EventTittle} backgroundColor={EventBackground}/></div>
        <div><EventInfoComponent/></div> 
        <div><EventTestimonyHeader title={Testimonytitle} backgroundColor={TestimonybackgroundColor }/></div>
        <div><Footer/></div>
        </>
    )
}

export default HomePage;