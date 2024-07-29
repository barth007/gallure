import React from "react";
import { useNavigate} from "react-router-dom"

function BookingButton() {
  const navigate = useNavigate();
  return (
    <button onClick={()=>navigate('/contact')} className="bookingButton">
      Click to Book Us
      <style jsx>{`
        .bookingButton {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          background-color: #c48383;
          color: #fff;
          padding: 20px 40px;
          font: 600 18px / 1.3 Urbanist, -apple-system, Roboto, Helvetica, sans-serif;
          cursor: pointer;
          width: 232px;
          height: 66px;
        }

        .bookingButton:focus {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #c48383;
        }
        .bookingButton:hover{
          border: 3px solid #192e28;
        }
        @media (max-width: 991px){
          .bookingButton{
            font-size: 16px;
            width: 213px;
            height: 50px;
          }
        }
      `}</style>
    </button>
  );
}

export default BookingButton;