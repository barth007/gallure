import netBox from "../../../images/cards/netBox.svg"

const TestimonyForm = ({cardContent})=>{
    
    return(
        <>
        <div className="testimonyRoot" style={{ backgroundImage: `url(${netBox})`, backgroundSize: 'center', backgroundPosition: 'center', width: '100%', height: '100%' }}>
        <article className="testimonialCard">
           <header className="testimonialHeader">
             <h2>Testimonials</h2>
           </header>
           <p className="testimonialText">
            {cardContent.testimony}
           </p>
           <footer className="testimonialFooter">
             <span className="testimonialAvatar"></span>
             <div className="testimonialAuthor">
               <strong >{cardContent.name}</strong><br/>
               {/* <span >{element.position}</span> */}
             </div>
           </footer>
         </article>

        </div>
        <style jsx>{`
        .testimonialCard {
            border-radius: 32px;
            display: flex;
            flex-direction: column;
            padding: 27px 45px;
          }
          .testimonialHeader h2 {
            letter-spacing: -1.67px;
            font: 700 54px Sora, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 1.625rem;
            float: left;
            line-height: 60.23px;
            // font-size: 20px;
            color: #05060f;
            margin-bottom: -24px;
          }
          .testimonialText {
            color: #1d1c1c;
            font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
            font-weight: 400;
            line-height: 25px;
            margin-top: 39px;
            width: 100%;
            height: 258px;
            font-size: 17px;
          }
          .testimonialFooter {
            border-radius: 42px;
            border: 1.236px solid rgba(244, 244, 244, 0.44);
            background-color: #ffcbcb;
            display: flex;
            gap: 15px;
            justify-content: start;
            align-items: start;
            white-space: nowrap;
            letter-spacing: -1.48px;
            line-height: 100%;
            margin: -30px 0 40px;
            padding: 10px 29px;
          }
          .testimonialAvatar {
            border-radius: 11.126px;
            background-color: #05060f;
            width: 50px;
            height: 46px;
          }
          .testimonialAuthor strong {
            font-family: Open Sans, sans-serif;
            font-weight: 700;
            font-size: 18px;
          }
          .testimonialAuthor span {
            font-family: Open Sans, sans-serif;
            font-weight: 400;
            margin-top: 7px;
            font-size: 19px;
          }
          @media (max-width: 991px){
            .testimonyRoot{
              width: 212px !important;
            }
            .testimonialCard{
              padding: 0;
            }
            .testimonialText {
              font-size: 16px;
              line-height: 20px;
            }
            .testimonialFooter{
              padding: 8px 8px;
              width: 223px;
            }
            .testimonialAuthor strong {
              font-size: 16px;
            }
            .testimonialAvatar {
              width: 42px;
              height: 34px;
            }

          }
        `}</style>
        </>
    )
}

export default TestimonyForm;