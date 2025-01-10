"use client";

import { Compass, Sun, Moon, Github } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until hydration is complete

  return (
    <div className="fixed w-full z-10">
      <div className="px-5 py-3 bg-gray-800 text-white flex justify-center">
        <div className="flex justify-between items-center w-[55rem]">
          <p className="font-title text-3xl">Nasagram</p>
          <div className="flex gap-5 md:gap-6">
            {resolvedTheme === "dark" ? (
              <Sun
                size={22}
                onClick={() => setTheme("light")}
                className="cursor-pointer"
              />
            ) : (
              <Moon
                size={22}
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
                size={22}
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
