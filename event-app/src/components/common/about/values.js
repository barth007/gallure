import ValuesSection from "./valueSection";
import EventInnovationSection from "./valueCard";
import React, {useState} from "react";
import plan from "../../../images/about/plan.jpg"
import event from "../../../images/about/event.png"
import excellence from "../../../images/about/excellence.jpg"
import experience from "../../../images/about/experience.jpg"
import execution from "../../../images/about/execution.jpg"
import expertise from "../../../images/about/expertise.jpg"




const Values = ()=>{
    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const values = [
    { 
      title: 'What we do', 
      id: 1, 
      content: "We thrive on innovation and bring fresh, imaginative ideas to every event.",
      src: event
    },
    { 
      title: 'Excellence', 
      id: 2, 
      content: "Our commitment to excellence is reflected in every aspect of our work, from meticulous planning to flawless execution." ,
      src: excellence
    },
    { 
      title: 'Client-Centric: Tailored Experiences', 
      id: 3, 
      content: "Your satisfaction is our priority. We listen, understand, and tailor our services to meet your unique needs.",
      src: experience
    },
    { 
      title: 'Seamless Execution', 
      id: 4,
      content: "At Gallure Events, we tailor each event to match your unique style and personality. Working closely with you, we craft custom experiences that go beyond your expectations.",
      src: execution
    },
    { 
      title: 'Diverse Expertise', 
      id: 5,
      content: "Our dedicated team ensures flawless event execution. From meticulous planning to on-site management, we handle every detail so you can relax and enjoy your special day worry-free.",
      src: expertise 
    },
    { 
      title: "Let's Plan Your Next Event!", 
      id: 6,
      content: "Gallure Events transforms your dreams into reality, whether it's a wedding, corporate gala, or milestone celebration. Let us handle the stress of planning so you can cherish every moment of your special day.",
      src: plan
    },
  ];
  console.log(values[activeTab].src)
    return (
        <>
        <section className="value-outer_wrap">
            <div className="value-title_wrap">
                <h2 className="value-title">Our Values</h2>
            </div>
            <div className="values-section_wrap">
            
                
                
                <div>
                <EventInnovationSection content={values[activeTab].content} images={values[activeTab].src}/>
                </div>
                <div><ValuesSection activeTab={activeTab} values={values} click={handleTabClick}/></div>
                
            </div>
            
        </section>
        <style jsx>{`
        .values-section_wrap{
            display: flex;
            gap: 20px;
            justify-content: center;
            padding:0;
            max-width: 1000px;
            margin-left: 25px;
        }
        .value-outer_wrap{
            display: flex;
            background-color:#0D0D0D;
            padding: 0;
            flex-direction: column;
            margin-right: auto;
            margin-left: auto;
            margin-right: auto;
            border-radius: 20px;
            max-width: 1026px;
            z-index: 1;
            margin-bottom: -597px;
        }
        .value-title{
            font-family: "Plus Jakarta Sans";
            font-size: 60px;
            font-style: normal;
            font-weight: 700;
            line-height: 72px;
            letter-spacing: -3px;
            color: #FFF;
        }
        .value-title_wrap{
          
            width: 100%;
            padding: 20px;
        }
        @media (max-width: 991px) {
          .value-outer_wrap{
            visibility: hidden;
            display: none;
          }

        }

        `}</style>
        </>
    )
}

export default Values;