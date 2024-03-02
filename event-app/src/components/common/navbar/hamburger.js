import React, { useState } from 'react';
import NavigationMenu from './sideBar';

export default function GalleryHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header>
                <nav>
                    <div className="logo-and-name">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6091f7d68ab946ee137a88dc128fde6c599eff2596cdfa11ff50af883553dcf?apiKey=c79a152b41e64f7db55346c2899c15e3&" alt="Gallure Logo" className="logo" />
                        <div className="company-name">
                            <div className="title">Gallure</div>
                            <div className="subtitle">EVENTS LLC</div>
                        </div>
                    </div>
                    <button className="hamburger" onClick={toggleSidebar}>☰</button>
                    <div className={`nav-links-and-contact ${isSidebarOpen ? 'active' : ''}`}>
                        <div className="nav-links">
                            <div className="nav-link">About Us</div>
                            <div className="divider" />
                            <div className="nav-link">Our Services</div>
                            <div className="divider" />
                            <div className="nav-link">Gallery</div>
                        </div>
                       <div> {isSidebarOpen &&(<NavigationMenu/>)}</div>
                        <div className="contact-options">
                            <div className="contact-option">Call Us</div>
                            <div className="contact-option green">Contact Us</div>
                        </div>
                    </div>
                </nav>
            </header>
            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    align-items: center;
                }
                .logo-and-name {
                    align-self: start;
                    display: flex;
                    gap: 14px;
                    color: #05060f;
                    padding: 1px 2px;
                }
                .logo {
                    aspect-ratio: 1.56;
                    object-fit: cover;
                    width: 80px;
                    align-self: start;
                }
                .company-name {
                    display: flex;
                    flex-direction: column;
                    padding: 0 20px;
                }
                .title {
                    font-size: 56px;
                    font-family: 'Grange Sofany', sans-serif;
                }
                .subtitle {
                    letter-spacing: 5.04px;
                    align-self: center;
                    margin-top: 7px;
                    font-size: 10px;
                    font-family: 'Grantha Sangam MN', -apple-system, Roboto, Helvetica, sans-serif;
                }
                .nav-links-and-contact {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    font-size: 20px;
                    transition: transform 0.3s ease-in-out;
                }
                .nav-links {
                    display: flex;
                    gap: 12px;
                    padding: 0 20px;
                }
                .nav-link {
                    font-family: 'Urbanist', sans-serif;
                    margin: auto 0;
                }
                .divider {
                    background-color: rgba(5, 6, 15, 0.35);
                    align-self: stretch;
                    width: 2px;
                    height: 35px;
                }
                .contact-options {
                    display: flex;
                    gap: 20px;
                    text-align: center;
                }
                .contact-option {
                    font-family: 'Urbanist', sans-serif;
                    border-radius: 12px;
                    background-color: rgba(5, 6, 15, 0.04);
                    color: #05060f;
                    padding: 17px 19px;
                }
                .green {
                    background-color: #192e28;
                    color: #fff;
                    padding: 17px 20px;
                }
                .hamburger {
                    display: none;
                    font-size: 24px;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                @media (max-width: 991px) {
                    .nav-links-and-contact, .contact-options {
                        flex-direction: column;
                        display: none;
                    }
                    .nav-links-and-contact.active {
                        display: flex;
                    }
                    .nav-links{
                        display: none;
                    }
                    .hamburger {
                        display: block;
                    }
                    .title{
                        font-size: 20px;
                    }
                    .subtitle{
                        letter-spacing: 2.04px;
                        align-self: center;
                        margin-top: 1px;
                        font-size: 3px;
                    }
                    .company-name{
                        padding: 0 6px;
                    }
                    .logo-and-name {
                        padding: 1px 11px;
                        gap: 0px;
                    }
                    .hamburger{
                        padding-right: 10px; 
                    }
                    .logo
                    {
                        width: 29px;
                    }

                }
            `}</style>
        </>
    );
}