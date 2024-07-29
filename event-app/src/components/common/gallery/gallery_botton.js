import React, { useState, useEffect, useRef } from 'react';

const CategoryButton = ({ label, isActive = false, onClick }) => (
  <div className={`category-button ${isActive ? 'active' : ''}`} onClick={onClick}>
    {label}
  </div>
);

const useSlider = (elementRef, itemCount) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToNextItem = () => {
    if (elementRef.current) {
      const maxScrollLeft = elementRef.current.scrollWidth - elementRef.current.clientWidth;
      if (scrollPosition < maxScrollLeft) {
        const newScrollPosition = scrollPosition + elementRef.current.clientWidth / itemCount;
        elementRef.current.scroll({ left: newScrollPosition, behavior: 'smooth' });
        setScrollPosition(newScrollPosition);
      }
    }
  };

  const scrollToPrevItem = () => {
    if (scrollPosition > 0) {
      const newScrollPosition = scrollPosition - elementRef.current.clientWidth / itemCount;
      elementRef.current.scroll({ left: newScrollPosition, behavior: 'smooth' });
      setScrollPosition(newScrollPosition);
    }
  };

  return { scrollToNextItem, scrollToPrevItem };
};

const EventCategories = () => {
  const categories = [
    { label: 'Wedding', isActive: true },
    { label: 'Birthdays', isActive: false },
    { label: 'Baby Showers', isActive: false },
    { label: 'Coperate Events', isActive: false },
    { label: 'Marriage Proposal', isActive: false },
    { label: 'Anniversaries', isActive: false },
  ];

  const categoriesRef = useRef(null);
  const { scrollToNextItem, scrollToPrevItem } = useSlider(categoriesRef, categories.length);

  useEffect(() => {
    const handleResize = () => {
      // Reset scroll position on window resize
      if (categoriesRef.current) {
        categoriesRef.current.scroll({ left: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="event-categories">
      <button className="scroll-button prev" onClick={scrollToPrevItem}>
        &#10094;
      </button>
      <div className="categories-container" ref={categoriesRef}>
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            label={category.label}
            isActive={category.isActive}
          />
        ))}
      </div>
      <button className="scroll-button next" onClick={scrollToNextItem}>
        &#10095;
      </button>

      <style jsx>{`
        .event-categories {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 13px 19px;
          background-color: #fff;
          color: #727272;
          font-size: 20px;
          font-weight: 500;
          text-align: center;
          position: relative;
          margin-top:10%;
        }
        .categories-container {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .categories-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
        .category-button {
          font-family: Urbanist, sans-serif;
          border-radius: 12.576px;
          padding: 16px 25px;
          flex: 0 0 auto;
          color: #fff;
          background-color: #d7d7d7;
          cursor: pointer;
        }
        .category-button.active {
          background-color: #192e28;
        }
        .scroll-button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          position: absolute;
        }
        .scroll-button.prev {
          left: 0;
        }
        .scroll-button.next {
          right: 0;
        }
        @media (max-width: 991px) {
          .category-button {
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default EventCategories;