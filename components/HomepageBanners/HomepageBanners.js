"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import ImageSliderLoop from "../ImageSliderLoop/ImageSliderLoop";
const HomepageBanners = ({ banners, mobileBanners }) => {
  return (
    <div className="line mx-auto max-md:mt-1 mt-[1.313rem] line2 relative">
      <div className={`max-md:hidden`}>
        <ImageSliderLoop bannerimages={banners} />
      </div>
      <div className={`md:hidden`}>
        <ImageSliderLoop bannerimages={mobileBanners} />
      </div>
      <div className="flex max-lg:justify-center justify-end mt-5 w-[95%] lg:w-[80%] mx-auto items-center max-lg:gap-5 gap-10"></div>
    </div>
  );
};

export default HomepageBanners;
