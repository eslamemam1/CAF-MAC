import React, { useState } from "react";
import Modal from "react-modal";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import images
import image1 from "../../imges/Gallarey/PadelTennis/1.jpg";
import image2 from "../../imges/Gallarey/PadelTennis/2.jpg";
import image3 from "../../imges/Gallarey/PadelTennis/3.jpg";
import image4 from "../../imges/Gallarey/PadelTennis/4.jpg";
import image5 from "../../imges/Gallarey/PadelTennis/5.jpg";
import image6 from "../../imges/Gallarey/PadelTennis/6.jpg";
// Import other images...

function PadelTennis() {
  const { t, i18n } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Array of image objects with original, thumbnail, and description properties
  const images = [
    { original: image1, thumbnail: image1, description: t("Padel Tennis Flooring") },
    { original: image2, thumbnail: image2, description: t("Padel Tennis Flooring") },
    { original: image3, thumbnail: image3, description: t("Padel Tennis Flooring") },
    { original: image4, thumbnail: image4, description: t("Padel Tennis Flooring") },
    { original: image5, thumbnail: image5, description: t("Padel Tennis Flooring") },
    { original: image6, thumbnail: image6, description: t("Padel Tennis Flooring") },
    // Add other images and descriptions here
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className="image backgroundColorGallary image-container"
            onClick={() => openModal(index)}
            style={{ backgroundImage: `url(${image.thumbnail})` }}
          >
            <div className="overlay">
              <div className="overlay-content relative flex flex-col items-start justify-end h-[230px] v ">
                <div className=" w-full flex justify-center items-center ">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="w-[30px] icon icon1 text-green-500 "
                    id="icon"
                  />
                </div>
                <p
                  className={
                    i18n.language !== "ar"
                      ? " font-normal text-xl w-full text-left pl-5 text-white"
                      : " font-semibold text-xl pr-5 w-full text-right text-white"
                  }
                >
                  {image.description}
                </p>
                <p
                  className={
                    i18n.language !== "ar"
                      ? " font-light text-sm w-full text-left pl-5 pb-5 text-white"
                      : " font-light text-xl pr-5 w-full text-right pb-5 text-white"
                  }
                >
                  {t("Click here")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
        <img src={images[selectedImageIndex].original} alt={`Image ${selectedImageIndex + 1}`} className="modal-image" />
        <button onClick={goToPrevious} className=" absolute left-10 font-bold text-2xl text-white"><FaArrowLeft /></button>
        <button onClick={goToNext} className=" absolute right-10 font-bold text-white text-2xl" ><FaArrowRight /></button>
      </Modal>
    </div>
  );
}

export default PadelTennis;
