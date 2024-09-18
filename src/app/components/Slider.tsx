import Image from "next/image";

import { IconChevronLeft } from "./icons/IconChevronLeft";
import { IconChevronRight } from "./icons/IconChevronRight";

import sliderPicture from "../../public/images/slider.jpg";

export default function Slider() {
  return (
    <div className="w-full h-dvh relative">
      <Image
        src={sliderPicture}
        alt="Beer Coffee"
        width={1920}
        height={800}
        className="object-cover w-full h-full absolute"
      />

      {/* Arrows */}
      <div className="absolute z-10 w-full flex justify-between px-8 h-full items-center">
        <span className="cursor-pointer w-8 h-8 text-white flex justify-center items-center text-4xl">
          <IconChevronRight />
        </span>
        <span className="cursor-pointer w-8 h-8 text-white flex justify-center items-center text-4xl">
          <IconChevronLeft />
        </span>
      </div>

      <div className="absolute z-10 bottom-0 w-full flex justify-center py-6">
        <span className="cursor-pointer w-3 h-3 border-2 border-white bg-white rounded-full mx-1 shadow-sm"></span>
        <span className="cursor-pointer w-3 h-3 border-2 border-white rounded-full mx-1 shadow-sm"></span>
        <span className="cursor-pointer w-3 h-3 border-2 border-white rounded-full mx-1 shadow-sm"></span>
        <span className="cursor-pointer w-3 h-3 border-2 border-white rounded-full mx-1 shadow-sm"></span>
      </div>
    </div>
  );
}
