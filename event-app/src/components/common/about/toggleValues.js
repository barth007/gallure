import React,{useState} from "react";
import polygon from "../../../images/icons/polygon.svg";
import downPolygon from "../../../images/icons/downPolygon.svg";
import EventInnovationSection from "./valueCard";

// Reusable component for value sections
const ValueSection = ({ title, altText, onClick, isActiveTab }) => (
  <section className="value-section" onClick={onClick} 
  style={{backgroundColor: isActiveTab ? '#FFF': '#1F1F1F', color: isActiveTab ? "#0D0D0D": "#FFF"}}>
    <div className="values-title">{title}</div>
    <img loading="lazy" src={isActiveTab ? downPolygon : polygon} alt={altText} className="value-image" />
  </section>
);

const EventPlanningValues = () => {
  const values = [
    {
      title: "What we do",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd49f20ca32f7759b2e8f5211e7ef2348020a298b7d7972137ca13ce1839b416?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      altText: "Symbolizing our company values",
      content: "We thrive on innovation and bring fresh, imaginative ideas to every event.",
      id: 0
    },
    {
      title: "Excellence",
      subtitle: "We thrive on innovation and bring fresh, imaginative ideas to every event.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9ea2b84ec270ad4577a89ae6826a0fc890cae1c09930c63e955460c1b4a51ab?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      altText: "Excellence in service",
      content: "Our commitment to excellence is reflected in every aspect of our work, from meticulous planning to flawless execution.",
      id: 1,
    },
    {
      title: "Client-Centric: Tailored Experiences",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/11bd9e5ce91fbb5ac9b782775754b44d487cb04d1fa7e13d5bd6362057cdd965?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      altText: "Focused on our clients",
      content: "Your satisfaction is our priority. We listen, understand, and tailor our services to meet your unique needs.",
      id: 2,
    },
    
    {
      title: "Seamless Execution",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dcd221954da83da63a3aacaf66471b2c5e80eb7c2ab56e41a4e2bb0369e08046?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      altText: "Ensuring seamless event execution",
      content: "At Gallure Events, we tailor each event to match your unique style and personality. Working closely with you, we craft custom experiences that go beyond your expectations.",
      id: 3,
    },
    {
      title: "Diverse Expertise",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/703178b4dc2d292a294619e7a3b463018c584c23921225f9d42a7e705105f4e3?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      altText: "Highlighting our diverse expertise",
      content: "Our dedicated team ensures flawless event execution. From meticulous planning to on-site management, we handle every detail so you can relax and enjoy your special day worry-free.",
      id: 4,
    },
    {
      title: "Let's Plan Your Next Event!",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/81e08f3651142afd4faa895f31f48a58ab20a250a1746280198b322d261e51bb?apiKey=c79a152b41e64f7db55346c2899c15e3&",
      altText: "Inviting you to plan the next event with us",
      content: "Gallure Events transforms your dreams into reality, whether it's a wedding, corporate gala, or milestone celebration. Let us handle the stress of planning so you can cherish every moment of your special day.",
      id: 5,
    },
  ];

const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(prevActiveTab => prevActiveTab === index ? null : index);
  };
 

  return (
    <>
     <section className="main-value_section">
        <div className="title-wrapper_section">
            <h1 className="section-title_header">Our Values</h1>
        </div>
     <main className="event-values-main">
        {values.map((value, index) => {
             console.log("activeTab:", activeTab)
             console.log("index:", index);
            return (
                <React.Fragment key={value.id}>
                <ValueSection
                isActiveTab={activeTab === index ? 'active': ''}
                {...value}  onClick={()=>handleTabClick(index)}/>
                
                { activeTab === index ? <EventInnovationSection content={value.content} /> : null}
               
              </React.Fragment>
               )
        })}
      </main>
     </section>
      <style jsx>{`
      .main-value_section{
        width: 100%;
        background-color: #0d0d0d;
        padding-bottom: 76px;
        padding-top: 52px;
}
      }
      .title-wrapper_section{
        width: 100%;
      }
        .event-values-main {
          display: flex;
          flex-direction: column;
          max-width: 598px;
          margin-left: auto;
          margin-right: auto;
        }
        .value-section {
          border-radius: 4px;
          border: 1px solid #1c2724;
          padding: 12px;
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          
        //   z-index: 1;
        }
        .values-title,
        .value-subtitle {
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 500;
          line-height: 160%;
          text-align: center;
          font-size: 14px;
          letter-spacing: 1px;
        }
        .value-image {
          margin-top: 8px;
          //width: 100%;
          object-fit: cover;
        }
        .section-title_header{
            font-family: Plus Jakarta Sans;
            font-size: 28px;
            font-weight: 400;
            line-height: 35px;
            color: #fff;
            letter-spacing: -0.8794991970062256px;
            text-align: center;

        }
        @media (max-width: 600px){
            .event-values-main{
                max-width: 331px;
            }
        }
        @media (max-width: 370px){
            .event-values-main{
                max-width: 268px;
            }

        }
      `}</style>
    </>
  );
};

export default EventPlanningValues;