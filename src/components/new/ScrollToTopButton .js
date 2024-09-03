import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  

  return (
    <button className=' text-[20px] text-white centered-div '>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;
