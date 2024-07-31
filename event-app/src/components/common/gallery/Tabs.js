import React from 'react';

const Tabs = ({ categories, activeCategory, onChangeCategory }) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 m-1 rounded ${category === activeCategory ? 'bg-[#192E28] text-white' : 'bg-gray-200'}`}
          onClick={() => onChangeCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
