"use client";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

type data = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

const CardDetail = (data: data) => {
  const [expand, setExpand] = useState(false);
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="py-5 flex flex-col gap-3 sm:bg-gray-800 w-full sm:w-[32rem] md:w-[40rem] rounded-sm sm:border-2 border-gray-700 border-solid">
        {data.title ? (
          <h1 className="px-5 text-sm text-white">{data.title}</h1>
        ) : (
          <div className="flex w-full justify-start px-4">
            <Skeleton className="relative w-40 h-6 rounded-sm" />
          </div>
        )}

        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[660px]">
          {data.hdurl ? (
            <Image src={data.url} fill alt="image" className="object-cover" />
          ) : (
            <div className="flex w-full h-full justify-center ">
              <Skeleton className="relative w-full h-full rounded-none" />
            </div>
          )}
        </div>
        {data.explanation ? (
          <div className="px-5 flex flex-col gap-3">
            <div className="flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={20}
                height={20}
                onClick={() => {
                  setClick(!click);
                }}
                className={`${
                  click ? "fill-red-500" : "fill-white"
                } transition-all cursor-pointer`}
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={20}
                height={20}
                className="hidden"
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
                  {data.explanation}
                </p>
                <button
                  onClick={() => {
                    setExpand(!expand);
                  }}
                >
                  {!expand ? <p>More</p> : <p>Close</p>}
                </button>
              </div>

              <p className="text-xs">{data.date}</p>
            </div>
          </div>
        ) : (
          <div className="px-5 flex flex-col gap-3">
            <div className="flex gap-4">
              <Skeleton className="w-[25px] h-[25px] rounded-full" />
              <Skeleton className="w-[25px] h-[25px] rounded-full" />
            </div>
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-28 h-5" />
          </div>
        )}
      </div>
    </>
  );
};

export default CardDetail;
