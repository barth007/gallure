import ValuesSection from "./valueSection";
import EventInnovationSection from "./valueCard";
import React, {useState} from "react";



const Values = ()=>{
    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const values = [
    { 
      title: 'What we do', 
      id: 1, 
      content: "We thrive on innovation and bring fresh, imaginative ideas to every event."
    },
    { 
      title: 'Excellence', 
      id: 2, 
      content: "Our commitment to excellence is reflected in every aspect of our work, from meticulous planning to flawless execution." 
    },
    { 
      title: 'Client-Centric: Tailored Experiences', 
      id: 3, 
      content: "Your satisfaction is our priority. We listen, understand, and tailor our services to meet your unique needs." 
    },
    { 
      title: 'Seamless Execution', 
      id: 4,
      content: "At Gallure Events, we tailor each event to match your unique style and personality. Working closely with you, we craft custom experiences that go beyond your expectations."
    },
    { 
      title: 'Diverse Expertise', 
      id: 5,
      content: "Our dedicated team ensures flawless event execution. From meticulous planning to on-site management, we handle every detail so you can relax and enjoy your special day worry-free." 
    },
    { 
      title: "Let's Plan Your Next Event!", 
      id: 6,
      content: "Gallure Events transforms your dreams into reality, whether it's a wedding, corporate gala, or milestone celebration. Let us handle the stress of planning so you can cherish every moment of your special day."
    },
  ];
    return (
        <>
        <section className="value-outer_wrap">
            <div className="value-title_wrap">
                <h2 className="value-title">Our Values</h2>
            </div>
            <div className="values-section_wrap">
                
                
                <div>
                <EventInnovationSection content={values[activeTab].content}/>
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
            width: 1071px;
            z-index: 1;
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
          margin-left: 4%;
            width: 28%;
            padding: 20px;
        }
        @media (max-width: 991px) {
          .value-outer_wrap{
            display: none;
          }

        }

        `}</style>
        </>
    )
}

export default Values;