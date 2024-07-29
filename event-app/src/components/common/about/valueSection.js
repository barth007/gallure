import React from 'react';
import EventInnovationSection from "./valueCard";



function ValueCard({isActive, title, backgroundColor = 'rgba(243, 174, 236, 0.02)', onClick}) {

 
  return (
    <div className={`value-card ${isActive}`}  style={{ 
       backgroundColor: isActive ? '#FFF' : backgroundColor}} onClick={onClick}>
      <h3 className='title-btn' style={{ color: isActive ? '#0D0D0D': '#FFF'}} >{title}</h3>
    </div>
  );
}

function ValuesSection({values, click, activeTab}) {
  
  
  return (
    <>
    
              
    <section>
      
      {values.map((value, index) => {
       return ( <ValueCard 
        isActive={ index === activeTab ? 'active' : ''} 
        key={value.id} 
        title={value.title} 
        onClick={()=>click(index)}/>)
})}
                
          
      <style jsx>{`
      .values-section_wrap{
        display: flex;
        gap: 20px;
        justify-content: center;
        padding:0;
    }
        .value-card {
          display: flex;
          align-items: center;
          border-radius: 8px;
          margin-top: 16px;
          padding: 21px;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid #1c2724;
        }
        .primary-border {
          border: 1px solid #1c2724;
        }
        .title-btn {
          font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
          color: #FFF;
          margin: 0;
          
        }
        
        }
        .cta-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(243, 174, 236, 0.02);
          margin-top: 16px;
          padding: 19px;
        }
        @media (max-width: 991px) {
          .value-card {
            white-space: initial;
            padding: 0 20px;
            max-width: 100%;
          }
       
        }
      `}</style>
    </section>
   
    </>
   
  );
}

export default ValuesSection;