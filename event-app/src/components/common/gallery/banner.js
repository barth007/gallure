import React from 'react';

function BannerTitle(props) {
    const {title, color}=props;
  return (
    <section>
      <h1 className="gallery-title" style={{color: color}}>{title}</h1>
      <style jsx>{`
        .gallery-title {
          text-align: center;
          flex-grow: 1;
          word-wrap: break-word;
          letter-spacing: -2.84px;
          max-width: 816px;
          font: 700 91px/102px "Plus Jakarta Sans", -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0 auto; /* Center the title */
          padding-top: 10px;
          
        }
        @media (max-width: 991px) {
          .gallery-title {
            
            font-size: 80px;
            line-height: 99px;
            margin-top: 156px;
            
          }
          @media (max-width: 600px) {
            .gallery-title {
              font-size: 40px;
              line-height: 50px;
                margin-top: 86px;
            }

          }
        }
      `}</style>
    </section>
  );
}

export default BannerTitle;