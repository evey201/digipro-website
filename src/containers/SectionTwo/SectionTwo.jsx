import React from "react";
import Image from "next/image";
import Link from "next/link";
import PlaceholderImageOne from "../../../public/images/placeholder3.svg";

export const SectionTwo = () => {
  return (
    <div className="flex flex-col px-4 sm:px-6 mt-6 sm:mt-20 w-full">
      <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="uppercase text-sm">What we believe in</p>
        <div className="w-[70%] mt-3 mb-6">
          <h2 className="text-4xl text-center">
            Grow your business, establish your brand, and put your customers
            first.
          </h2>
        </div>
      </div>
      <div class="py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="Party"
              src={PlaceholderImageOne}
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div class="lg:py-24 flex flex-col gap-y-4">
            <div>
              <h6 class="text-xs uppercase tracking-wider">About</h6>
              <h2 class="text-3xl tracking-wider">Who we are</h2>
            </div>
            <div>
              <p class="mt-4 text-gray-600">
                Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor
                venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
                Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras
                ullamcorper gravida tellus ut consequat.
              </p>
            </div>
            <div>
              <Link
                className="rounded-md bg-black px-5 py-2.5 text-base font-medium text-white uppercase tracking-wider shadow"
                href="/"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="lg:py-24 flex flex-col gap-y-4  lg:order-last">
            <div>
              <h6 class="text-xs uppercase tracking-wider">TEAM</h6>
              <h2 class="text-3xl tracking-wider">What we do</h2>
            </div>
            <div>
              <p class="text-black">
                Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor
                venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
                Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras
                ullamcorper gravida tellus ut consequat.
              </p>
            </div>
            <div>
              <Link
                className="rounded-md bg-black px-5 py-2.5 text-base font-medium text-white uppercase tracking-wider shadow"
                href="/"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
            <Image
              alt="Party"
              src={PlaceholderImageOne}
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
