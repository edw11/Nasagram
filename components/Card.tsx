"use client";

import Image from "next/image";
import React, { useState } from "react";

const Card = () => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="py-5 flex flex-col gap-3 sm:bg-gray-800 w-full sm:w-[32rem] md:w-[40rem] rounded-sm sm:border-2 border-gray-700 border-solid">
        <h1 className="px-5 text-sm text-white">M27: The Dumbbell Nebula</h1>
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[660px]">
          <Image
            src="/M27_Stobie_960.jpg"
            fill
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="px-5 flex flex-col gap-3">
          <div className="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={20}
              height={20}
            >
              <path
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={20}
              height={20}
            >
              <path
                d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div
              className={`flex  text-sm ${
                expand ? "flex-col gap-3 items-start" : "items-center"
              }`}
            >
              <p className={`${!expand ? "truncate" : ""} max-w-xl`}>
                Is this what will become of our Sun? Quite possibly. The first
                hint of our Sun&apos;s future was discovered inadvertently in
                1764. At that time, Charles Messier was compiling a list of
                diffuse objects not to be confused with comets. The 27th object
                on Messier&apos;s list, now known as M27 or the Dumbbell Nebula,
                is a planetary nebula, one of the brightest planetary nebulas on
                the sky and visible with binoculars toward the constellation of
                the Fox (Vulpecula). It takes light about 1000 years to reach us
                from M27, featured here in colors emitted by sulfur (red),
                hydrogen (green) and oxygen (blue). We now know that in about 6
                billion years, our Sun will shed its outer gases into a
                planetary nebula like M27, while its remaining center will
                become an X-ray hot white dwarf star. Understanding the physics
                and significance of M27 was well beyond 18th century science,
                though. Even today, many things remain mysterious about
                planetary nebulas, including how their intricate shapes are
                created.
              </p>
              <button
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                {!expand ? <p>More</p> : <p>Close</p>}
              </button>
            </div>

            <p className="text-xs">December 30, 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
