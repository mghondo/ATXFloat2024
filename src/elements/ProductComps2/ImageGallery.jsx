// ImageGallery.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the styles

const ImageGallery = ({ photos }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <div className="image-gallery">
      {photos.map((photo, index) => (
        <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
          <img src={photo.bigImage} alt={`Gallery Item ${index}`} />
        </div>
      ))}

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={photos[photoIndex].bigImage}
          nextSrc={photos[(photoIndex + 1) % photos.length].bigImage}
          prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].bigImage}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + photos.length - 1) % photos.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % photos.length)}
        />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      bigImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
