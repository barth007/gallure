import React from 'react';

function ValueCard({ title, borderColor = '#1c2724', backgroundColor = 'rgba(243, 174, 236, 0.02)' }) {
  return (
    <div className={`value-card ${borderColor === '#1c2724' ? 'primary-border' : ''}`} style={{ borderColor, backgroundColor }}>
      <h3 className='title-btn' >{title}</h3>
    </div>
  );
}

function ValuesSection() {
  const values = [
    { title: 'Our value', id: 1 },
    { title: 'Excellence', id: 2 },
    { title: 'Client-Centric: Tailored Experiences', id: 3 },
    { title: 'Seamless Execution', id: 4 },
    { title: 'Diverse Expertise', id: 5 },
    { title: "Let's Plan Your Next Event!", id: 6 },
  ];

  return (
    <section>
      
      {values.map((value) => (
        <ValueCard key={value.id} title={value.title} />
      ))}
     

      <style jsx>{`
        .value-card {
          display: flex;
          align-items: center;
          border-radius: 8px;
          margin-top: 16px;
          padding: 21px;
          white-space: nowrap;
          cursor: pointer;
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
  );
}

export default ValuesSection;