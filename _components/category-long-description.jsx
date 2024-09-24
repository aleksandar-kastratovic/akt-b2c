"use client";

import { useCategory } from "@/hooks/akt.hooks";
import React
  from "react";

export const CategoryLongDescription = ({ slug }) => {
  const { data } = useCategory({ slug });

  if (data) {
    const {
      basic_data: { long_description },
    } = data;

    return (
        <div
            className={`pt-12 prose !max-w-full`}
            >
          <div
              className="text-[1rem] mx-auto max-md:text-[0.8rem] text-center font-light w-[95%] lg:w-[80%] max-lg:text-left !text-black"
              dangerouslySetInnerHTML={{__html: long_description}}
          ></div>
        </div>
    )
  }
  return null;
};
