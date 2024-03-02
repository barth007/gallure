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
      title: 'Our value', 
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
      content: "At Gallure Events, we understand that every event is as unique as the individuals hosting it. Our approach is personalized, ensuring that your event reflects your personality and style. We collaborate closely with our clients to create customized experiences that exceed expectations."
    },
    { 
      title: 'Diverse Expertise', 
      id: 5,
      content: "Our team is dedicated to the flawless execution of your event. We meticulously plan every detail, coordinate logistics, and provide on-site management to ensure that your celebration runs smoothly. With Gallure Events, you can relax and enjoy your special day while we take care of the rest." 
    },
    { 
      title: "Let's Plan Your Next Event!", 
      id: 6,
      content: "Whether you're envisioning a romantic wedding, a corporate gala, or a milestone celebration, Gallure Events is here to bring your dreams to life. Let us take the stress out of event planning, allowing you to savor every moment of your special day."
    },
  ];
    return (
        <>
        <section className="value-outer_wrap">
            <div className="value-title_wrap">
                <h2 className="value-title">Our Values</h2>
            </div>
            <div className="values-section_wrap">
                
                <div><ValuesSection activeTab={activeTab} values={values} click={()=>handleTabClick}/></div>
                <div>
                <EventInnovationSection content={values[activeTab].content}/>
                </div>
                
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
            flex-direction: column;margin-right: auto;
            margin-left: auto;
            margin-right: auto;
            border-radius: 20px;
            width: 1071px;
             
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
            margin-left: 11%;
            width: 28%;
            padding: 20px;
        }

        `}</style>
        </>
    )
}

export default Values;