"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import ImageSliderLoop from "../ImageSliderLoop/ImageSliderLoop";
const HomepageBanners = ({ banners, mobileBanners }) => {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="line mx-auto max-md:mt-0 mt-[1.313rem] line2 relative">
      <div className={`max-sm:hidden`}>
        <ImageSliderLoop
          bannerimages={banners}
          updateImage={selectedImage}
          key={Math?.random()}
        />
      </div>
      <div className={`sm:hidden`}>
        <ImageSliderLoop
          bannerimages={mobileBanners}
          updateImage={selectedImage}
          key={Math?.random()}
        />
      </div>
      <div className="flex max-lg:justify-center justify-end mt-5 w-[95%] lg:w-[80%] mx-auto items-center max-lg:gap-5 gap-10"></div>
    </div>
  );
};

export default HomepageBanners;
