"use client";
import React, { useState } from "react";

const Gallery = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const handleImageClick = (src) => {
    openModal(<img src={src} className="w-full" />);
  };

  const handleVideoClick = (src) => {
    openModal(
      <video className="w-full" controls>
        <source src={src} type="video/mp4" />
      </video>
    );
  };

  return (
    <div>
      <div id="gallery" className="container mx-auto">
        <img
          src="assets/image00001.jpeg"
          className="img-responsive"
          onClick={handleImageClick}
        />
        <img src="assets/image00002.jpeg" className="img-responsive" />
        <img src="assets/image00003.jpeg" className="img-responsive" />
        <img src="assets/image00004.jpeg" className="img-responsive" />
        <img src="assets/image00005.jpeg" className="img-responsive" />
        <img src="assets/image00006.jpeg" className="img-responsive" />
        <img src="assets/image00007.jpeg" className="img-responsive" />
        <img src="assets/image00008.jpeg" className="img-responsive" />
        <img src="assets/image00009.jpeg" className="img-responsive" />
        <img src="assets/image00010.jpeg" className="img-responsive" />
        <img src="assets/Grinder.jpg" className="img-responsive" />
        <img src="assets/KenwoodModel.png" className="img-responsive" />
        <img src="assets/Model008.jpg" className="img-responsive" />
        <img src="assets/Model009.jpg" className="img-responsive" />
        <img src="assets/Model010.jpg" className="img-responsive" />
        <img src="assets/Model011.jpg" className="img-responsive" />
        <img src="assets/PTAdapt.jpg" className="img-responsive" />
        <img src="assets/WatchModel.jpg" className="img-responsive" />
        <img src="assets/3DMontBlanc.jpeg" className="img-responsive" />
        <img src="assets/boAtWatch.jpeg" className="img-responsive" />
        <img src="assets/Carme.jpeg" className="img-responsive" />
        <img src="assets/Damtilis.jpeg" className="img-responsive" />
        <img src="assets/Fragrance.jpeg" className="img-responsive" />
        <img src="assets/GoboLightTest.jpeg" className="img-responsive" />
        <img src="assets/Inswest.jpeg" className="img-responsive" />
        <img src="assets/lighting.jpeg" className="img-responsive" />
        <img src="assets/MASERATI2.jpeg" className="img-responsive" />
        <img src="assets/MASERATI.jpeg" className="img-responsive" />
        <img src="assets/OMEGA.jpeg" className="img-responsive" />
        <img src="assets/perfume.jpeg" className="img-responsive" />
        <img src="assets/perfume2.jpeg" className="img-responsive" />
        <img src="assets/Porsche992.jpeg" className="img-responsive" />
        <img src="assets/Porshe.jpeg" className="img-responsive" />
        <img src="assets/Tanqueray.jpeg" className="img-responsive" />
        <img src="assets/WATCH.jpeg" className="img-responsive" />
        <img src="assets/WatchTime.jpeg" className="img-responsive" />
      </div>

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
