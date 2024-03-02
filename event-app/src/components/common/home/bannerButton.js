import React from "react";

function BookingButton() {
  return (
    <button className="bookingButton">
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
          font: 700 20px / 1.3 Urbanist, -apple-system, Roboto, Helvetica, sans-serif;
          cursor: pointer;
        }

        .bookingButton:focus {
          outline: none;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #c48383;
        }
        .bookingButton:hover{
          border: 3px solid #192e28;

        }
      `}</style>
    </button>
  );
}

export default BookingButton;