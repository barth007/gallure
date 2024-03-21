import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Swiper = ({ 
    children, 
    showArrowsProp, 
    cardLength, 
    cardHeight, 
    itemWidth, 
    itemHeight, 
    arrowLeft, 
    arrowRight, 
    arrowPosition,
    indicatorPostion
 }) => {
    const [startX, setStartX] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [showArrows, setShowArrows] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        setShowArrows(showArrowsProp);
    }, [showArrowsProp]);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.addEventListener('scroll', handleOnScroll);
        }
        return () => {
            if (swiperRef.current) {
                swiperRef.current.removeEventListener('scroll', handleOnScroll);
            }
        };
    }, []);
    useEffect(() => {
        // Calculate active index based on scroll position
        const containerWidth = swiperRef.current.offsetWidth;
        const cardWidth = 400; // Width of each card
        const newIndex = Math.round(scrollLeft / (cardWidth + 24)); // Considering margin
        setActiveIndex(newIndex);
    }, [scrollLeft]);

    const handleOnMouseDown = (event) => {
        setStartX(event.clientX);
        setIsMouseDown(true);
    }

    const handleOnMouseMove = (event) => {
        if (!isMouseDown || !swiperRef.current) return;
        event.preventDefault();
        const deltaX = (event.clientX - startX) * 0.115;
        swiperRef.current.scrollLeft = scrollLeft - deltaX;
    }

    const handleOnMouseUp = () => {
        setIsMouseDown(false);
    }

    const handleOnScroll = () => {
        setScrollLeft(swiperRef.current.scrollLeft);
    }

    const handleArrowClick = (direction) => {
        const deltaScroll = 430;
        if (direction === 'left') {
            swiperRef.current.scrollLeft -= deltaScroll;
        } else {
            swiperRef.current.scrollLeft += deltaScroll;
        }
    }

    const updateActiveIndex = (index) => {
        setActiveIndex(index);
        if (swiperRef.current) {
            swiperRef.current.scrollTo({ left: index * 430, behavior: 'smooth' });
        }
    }

    return (
        <>
            <div className="mainArrow" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: "center", margin: '0 0px', top: arrowPosition, fontSize: '23px' }}>
                {showArrows && (
                    <>
                        <div
                        style={{marginLeft: arrowLeft}}
                            className={`leftArrow ${activeIndex === 0 ? 'disabled' : ''}`}
                            onClick={() => {
                                if (activeIndex > 0) {
                                    handleArrowClick('left');
                                    updateActiveIndex(activeIndex - 1);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <div
                        style={{marginRight: arrowRight}}
                            className={`rightArrow ${activeIndex === children.length - 1 ? 'disabled' : ''}`}
                            onClick={() => {
                                if (activeIndex < children.length - 1) {
                                    handleArrowClick('right');
                                    updateActiveIndex(activeIndex + 1);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </>
                )}
            </div>
            <div
                onMouseDown={handleOnMouseDown}
                onMouseMove={handleOnMouseMove}
                onMouseUp={handleOnMouseUp}
                onScroll={handleOnScroll}
                ref={swiperRef}
                style={{maxWidth: cardLength, height: cardHeight}}
                className='swiperRootContainer'
            >
                <div className='swiperItemsContainer'>
                    {React.Children.map(children, (child, index) => (
                        <div key={index} className={`swiperItem ${index === activeIndex ? 'active' : ''}`} style={{width: itemWidth, height: itemHeight}}>
                            {child}
                        </div>
                    ))}
                </div>
               
            </div>
            <div style={{bottom: indicatorPostion}} className="indicator">
                    {React.Children.map(children, (_, index) => (
                        <div  key={index} className={`indicatorDot ${index === activeIndex ? 'active' : ''}`} onClick={() => updateActiveIndex(index)}></div>
                    ))}
                </div>
            <style jsx>{`
                .swiperRootContainer{
                   
                    overflow-x: hidden;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;

                }
                .swiperItemsContainer{
                    margin-left: 9px;
                    display: flex;
                    height: 96%;
                    width: max-content;
                }
                .swiperItem{
                   
                    background-color: #faf0f7;
                    margin: 20px;
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    font-size: 30px;
                    border-radius: 32px;
                    display: flex;
                    flex-direction: column;
                    padding: 27px 45px;
                    
                }
                .swiperItem.active{
                    box-shadow: -15px 13px 4px -4px #CD8B87;
                    border: 3px solid #cd8b87;
                }
                .swiperRootContainer::-webkit-scrollbar{
                    display: none;
                }
                .indicator {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                }
                .indicatorDot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: #CF8F8C;
                    margin: 0 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .indicatorDot.active {
                    background-color: #FFFFFF;
                }
                .leftArrow.disabled,
                .rightArrow.disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
               
                .leftArrow{
                    color: white;
                    cursor: pointer;
                }
                .rightArrow{
                    color: white;
                    cursor: pointer;
                }
                @media (max-width: 991px){
                    .swiperItem{
                        width: 260px !important;
                        height: 450px !important;
                    }
                    .swiperItem.active {
                        box-shadow: -10px 13px 4px -4px #CD8B87;
                        
                    }
                    .mainArrow{
                        top: 267px !important;

                    }
                    .indicator{
                        bottom: 175px !important;
                    }
                    .swiperRootContainer{
                        height: 486px !important;
                    }
                    .leftArrow{
                        margin-left: -35px !important;
                    }
                    .rightArrow{
                        margin-right: -38px !important;
                    }
                    .swiperItemsContainer{}
                    height: 100%;

                }
            `}</style>
        </>
    )
}

export default Swiper;
