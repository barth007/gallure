import React from 'react';

const ImageGallery = ({ images, loading }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
        </div>
      ) : images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-48 transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 h-[40vh] w-full pt-[15%]">No images yet</div>
      )}
    </div>
  );
};

export default ImageGallery;
