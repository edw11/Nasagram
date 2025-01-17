"use client";

import { Sun, Moon, Github } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  // Ensure the component only renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until hydration is complete

  return (
    <div className="fixed w-full z-10">
      <div className="px-5 py-3 dark:bg-gray-800 bg-white dark:border-none border-b-2 border-solid border-gray-300 dark:text-white text-black flex justify-center">
        <div className="flex justify-between items-center w-[55rem]">
          <p
            className="font-title text-3xl lg:text-4xl cursor-pointer"
            onClick={scrollToTop}
          >
            Nasagram
          </p>
          <div className="flex gap-5 md:gap-6">
            {resolvedTheme === "dark" ? (
              <Sun
                size={27}
                onClick={() => setTheme("light")}
                className="cursor-pointer"
              />
            ) : (
              <Moon
                size={27}
                onClick={() => setTheme("dark")}
                className="cursor-pointer"
              />
            )}
            <Link
              href="https://github.com/edw11/Nasagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                color="currentColor"
                size={27}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
