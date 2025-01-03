import React, { useState } from 'react';
import './Featured.css';
import featuredWorks from './featuredWorks.json';

const Featured = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openPopup = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index); // Save the index of the selected image
    setZoomLevel(1); // Reset zoom level
  };

  const closePopup = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 3)); // Limit zoom to 3x
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 1)); // Limit zoom to 1x
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredWorks.length);
    setSelectedImage(featuredWorks[(currentIndex + 1) % featuredWorks.length].image);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredWorks.length) % featuredWorks.length);
    setSelectedImage(featuredWorks[(currentIndex - 1 + featuredWorks.length) % featuredWorks.length].image);
  };

  return (
    <div className="featured-works">
        <h2>Featured Works</h2>
      <div className="works-row">
        {featuredWorks.map((work, index) => (
          <div key={work.id} className="work-box">
            <img
              src={`${work.image}`}
              alt={work.title}
              className="work-image"
            />
            <div className="overlay">
              <h3 className="work-title">{work.title}</h3>
              <div className="buttons">
                <button className="button magnify" onClick={() => openPopup(`${work.image}`, index)}>
                  🔍
                </button>
                <button className="button info" onClick={() => alert(`Go to details page for work ID: ${work.id}`)}>
                  ℹ️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox">
          <div className="lightbox-content">
            <button className="close-button" onClick={closePopup}>
              ✖
            </button>
            <div className="lightbox-image-wrapper" style={{ transform: `scale(${zoomLevel})` }}>
              <img src={selectedImage} alt="Full View" className="lightbox-image" />
            </div>
            <div className="zoom-controls">
              <button onClick={zoomIn}>➕ Zoom In</button>
              <button onClick={zoomOut}>➖ Zoom Out</button>
            </div>
            <div className="navigation-controls">
              <button onClick={prevImage}>← Previous</button>
              <button onClick={nextImage}>Next →</button>
            </div>
          </div>
        </div>
      )}

      <button className="view-all">View all</button>
    </div>
  );
};

export default Featured;
