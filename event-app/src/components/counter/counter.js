import './counter.css';
import logo from '../../images/logo.svg';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSnapchat, faTiktok } from '@fortawesome/free-brands-svg-icons'; 
import React, { useState, useRef, useEffect } from "react";


const Countdown = () => {
    const [timerDay, setTimerDay] = useState("00");
    const [timerHour, setTimerHour] = useState("00");
    const [timerMinute, setTimerMinute] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");
    let interval = useRef();

    const startTimer = () => {
        const countdown = new Date("Febuary 29, 2024 00:00:00").getTime();
        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdown - now;
            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDay(day.toString().padStart(2, '0'));
                setTimerHour(hour.toString().padStart(2, '0'));
                setTimerMinute(minute.toString().padStart(2, '0'));
                setTimerSeconds(seconds.toString().padStart(2, '0'));
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    const [hoverStates, setHoverStates] = useState(
        {
            instagram: false,
            snapchat: false,
            tiktok: false
        }
    );
    const iconStyle =(iconName)=> ({
        display: 'inline-block', 
        marginRight: '18px', 
        cursor: 'pointer',
        color: hoverStates[iconName] ? 'white' : '#3FC9AD',
        transition: 'color 0.3s ease',
        paddingLeft: '3px',
    });

    const handleHover = (iconName, isHovered) => {
        setHoverStates(prevState => ({
            ...prevState,
            [iconName]: isHovered
        }));
    };

    return (
        <section>
            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <div className='countdown-text'>
                <p>Countdown to Gallure Lunching....</p>
            </div>
             <div className="timer">
           
           <div className="circle" style={{ '--clr': '#C67F7B', color: 'var(--clr)' }} >
               <svg>
                   <circle cx="70" cy="70" r="70" className="dd" />
               </svg>
               <div className="days">{timerDay}<br /><span>Days</span></div>
           </div>
           <div className="circle" style={{ '--clr': '#FFC7D0', color: 'var(--clr)' }}>
               <svg>
                   <circle cx="70" cy="70" r="70" className="hh" />
               </svg>
               <div className="hours">{timerHour}<br /><span>Hours</span></div>
           </div>
           <div className="circle" style={{ '--clr': '#C9C9C9', color: 'var(--clr)' }} >
               <svg>
                   <circle cx="70" cy="70" r="70" className="mm" />
               </svg>
               <div className="minute">{timerMinute}<br /><span>Minutes</span></div>
           </div>

           <div className="circle" style={{ '--clr': '#3FC9AD', color: 'var(--clr)' }}>
               <svg>
                   <circle cx="70" cy="70" r="70" className="ss" />
               </svg>
               <div className="seconds">{timerSeconds}<br /><span>Seconds</span></div>
           </div>
       </div>
       <div className='social_icons'>
        <a href='https://www.instagram.com/gallure_events?igsh=MXdmcGo0eXVqNDN0ZQ=='>
        <FontAwesomeIcon icon={faInstagram} style={iconStyle('instagram')} onMouseEnter={handleHover}  />

        </a>
        <hr/>

            
            <a href='https://www.snapchat.com/add/gallure23'>
                <FontAwesomeIcon icon={faSnapchat} style={iconStyle('snapchat')} onMouseEnter={handleHover}   />
            </a>
            <hr/>

            <a href=''>
                <FontAwesomeIcon icon={faTiktok} style={iconStyle("tiktok")} onMouseEnter={handleHover}   />
            </a>

       </div>
       </header>
    </div>
       </section>
   );

        
        
       
};

export default Countdown;
