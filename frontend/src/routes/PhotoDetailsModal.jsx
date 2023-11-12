import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {setModalVisibility} = props;
  const handleCloseModal = () => {
    setModalVisibility(false);
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleCloseModal}/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
