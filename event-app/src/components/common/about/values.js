import EventInnovationSection from "./valueCard";
import ValuesSection from "./valueSection";

const Values = ()=>{
    return (
        <>
        <section className="value-outer_wrap">
            <div className="value-title_wrap">
                <h2 className="value-title">Our Values</h2>
            </div>
            <div className="values-section_wrap">
                <div>
                <EventInnovationSection/>
                </div>
                <div><ValuesSection/></div>
                
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