import { config } from "./config";

export const getData = async () => {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=" + config.api
  );
  const data = await res.json();
  return data;
};
