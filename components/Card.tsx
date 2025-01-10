"use client";

import React, { useState, useEffect, useCallback } from "react";
import { config } from "@/contants/config";
import CardDetail from "./CardDetail";
import Image from "next/image";

// Define the type for each APOD item
interface ApodData {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const Card: React.FC = () => {
  const [data, setData] = useState<ApodData[]>([]); // State to store fetched data
  const [loading, setLoading] = useState<boolean>(false); // Loading indicator
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().split("T")[0] // Start with today's date
  );

  // Fetch data for a given date range
  const getData = async (startDate: string, endDate: string) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${config.api}&start_date=${startDate}&end_date=${endDate}`
      );
      const response: ApodData[] = await res.json();
      setData((prevData) => [...prevData, ...response.reverse()]); // Reverse to maintain chronological order
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load the next batch of images
  const loadMore = useCallback(() => {
    if (loading) return;

    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() - 5); // Fetch 5 days at a time
    const newEndDate = currentDate;
    const newStartDate = nextDate.toISOString().split("T")[0];
    setCurrentDate(newStartDate);

    getData(newStartDate, newEndDate);
  }, [currentDate, loading]);

  // Load initial data
  useEffect(() => {
    const endDate = currentDate;
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - 5); // Fetch 5 days initially
    getData(startDate.toISOString().split("T")[0], endDate);
  }, []);

  // Handle scroll to load more
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore]);

  return (
    <div className="flex flex-col items-center gap-5">
      {data.map(
        (item, index) => item.hdurl && <CardDetail key={index} {...item} />
      )}
      {loading && (
        <Image
          src="/icons/loader.svg"
          alt="loader"
          width={24}
          height={24}
          className="ml-2 animate-spin"
        />
      )}
    </div>
  );
};

export default Card;
