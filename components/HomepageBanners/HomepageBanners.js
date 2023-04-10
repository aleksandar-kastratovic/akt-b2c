"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import ImageSliderLoop from "../ImageSliderLoop/ImageSliderLoop";
const HomepageBanners = ({ banners }) => {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="line mx-auto mt-[1.313rem] line2 relative">
      <ImageSliderLoop bannerimages={banners} updateImage={selectedImage} />
      <div className="flex max-lg:justify-center justify-end mt-5 w-[95%] lg:w-[80%] mx-auto items-center max-lg:gap-5 gap-10">
        {banners?.map((image) => (
          <p
            className="text-lg"
            key={image.id}
            onClick={() => handleImageClick(image)}
          >
            {image.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HomepageBanners;
