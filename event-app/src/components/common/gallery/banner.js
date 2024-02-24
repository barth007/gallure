import React from 'react';

function BannerTitle(props) {
    const {title}=props;
  return (
    <section>
      <h1 className="gallery-title">{title}</h1>
      <style jsx>{`
        .gallery-title {
          color: #ba716d;
          text-align: center;
          letter-spacing: -2.84px;
          max-width: 809px;
          font: 700 91px/102px "Plus Jakarta Sans", -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0 auto; /* Center the title */
          padding-top: 10px;
        }
        @media (max-width: 991px) {
          .gallery-title {
            font-size: 40px;
            line-height: 50px;
          }
        }
      `}</style>
    </section>
  );
}

export default BannerTitle;