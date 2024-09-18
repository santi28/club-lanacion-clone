import Image from "next/image";

import { IconChevronLeft } from "./icons/IconChevronLeft";
import { IconChevronRight } from "./icons/IconChevronRight";

import sliderPicture from "../../public/images/slider.jpg";

export default function Slider() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={sliderPicture}
        alt="Beer Coffee"
        width={1920}
        height={800}
        className="object-cover w-full h-full absolute"
        priority
      />

      {/* Flechas */}
      <div className="absolute inset-0 z-10 flex justify-between items-center px-4 md:px-8">
        <button
          aria-label="Previous Slide"
          className="cursor-pointer backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 text-white flex justify-center items-center bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300"
        >
          <IconChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          aria-label="Next Slide"
          className="cursor-pointer backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 text-white flex justify-center items-center bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300"
        >
          <IconChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Indicadores de página */}
      <div className="absolute z-10 bottom-6 md:bottom-8 w-full flex justify-center space-x-2 md:space-x-3">
        <span className="cursor-pointer w-3 h-3 md:w-4 md:h-4 bg-white border-2 border-white rounded-full shadow-sm transition-transform transform hover:scale-110"></span>
        <span className="cursor-pointer w-3 h-3 md:w-4 md:h-4 border-2 border-white rounded-full shadow-sm transition-transform transform hover:scale-110"></span>
        <span className="cursor-pointer w-3 h-3 md:w-4 md:h-4 border-2 border-white rounded-full shadow-sm transition-transform transform hover:scale-110"></span>
        <span className="cursor-pointer w-3 h-3 md:w-4 md:h-4 border-2 border-white rounded-full shadow-sm transition-transform transform hover:scale-110"></span>
      </div>
    </div>
  );
}
