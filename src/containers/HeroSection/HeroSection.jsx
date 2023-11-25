"use client";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="background rounded-md flex">
      <div className="flex justify-center w-full items-center flex-col gap-y-4">
        <div className="text-white flex flex-col justify-center items-center gap-y-2">
          <h2 className="text-5xl tracking-wider">Grow your business</h2>
          <p className="text-xl">Give your business a boost</p>
        </div>
        <div className="flex sm:gap-4">
          <div
            className="rounded-md bg-white px-5 py-2.5 text-base font-medium text-black uppercase tracking-wider shadow"
            href="/"
          >
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};
