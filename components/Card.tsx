"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { config } from "@/contants/config";
import { Skeleton } from "./ui/skeleton";
import CardDetail from "./CardDetail";

const Card = () => {
  const [data, setData] = useState({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
  });

  const getData = async () => {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${config.api}`
    );
    const response = await res.json();
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return <CardDetail {...data} />;
};

export default Card;
