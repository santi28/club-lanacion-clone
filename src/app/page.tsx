import Image from "next/image";
import Slider from "./components/Slider";
import Header from "./components/Header";

import photo from "../public/images/slider.jpg";
import { IconMapPin } from "./components/icons/IconMapPin";
import { IconChevronLeft } from "./components/icons/IconChevronLeft";
import { IconChevronRight } from "./components/icons/IconChevronRight";
import DiscountSection from "./components/sections/DiscountsSection";
import VoucherSection from "./components/sections/VoucherSection";
import { AccountProvider } from "./context/accounts.context";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <DiscountSection />
        <VoucherSection />
      </main>
    </>
  );
}

export function CardCarousel() {
  return (
    <div className="flex items-center gap-4 w-full mx-auto">
      <button
        aria-label="Anterior"
        className="text-stone-950 hover:bg-stone-100 p-2 rounded-full"
      >
        <IconChevronLeft className="w-6 h-6" />
      </button>

      {/* Contenedor de las tarjetas */}
      <div className="flex flex-grow gap-4">
        <VoucherBenefitCard />
        <VoucherBenefitCard />
        <VoucherBenefitCard />
        <VoucherBenefitCard />
      </div>

      <button
        aria-label="Siguiente"
        className="text-stone-950 hover:bg-stone-100 p-2 rounded-full"
      >
        <IconChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export function DiscountBenefitCard() {
  return (
    <article className="flex flex-col min-w-[200px] max-w-[250px] flex-grow border border-stone-300 rounded-lg overflow-hidden shadow-sm font-sans">
      <Image
        src={photo}
        alt="Imagen de descuento"
        width={500}
        height={300}
        className="object-cover w-full"
      />
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-gray-800">COTO</h3>
        <div className="flex flex-row items-center gap-2">
          <span className="text-blue-950 font-black">20%</span>
          <span className="text-blue-700 font-black">15%</span>
          <span className="text-blue-500 font-black">10%</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <IconMapPin className="w-4 h-4 inline-block mr-1" />
          <span>
            A <strong>0,5km</strong>
          </span>
        </div>
      </div>
    </article>
  );
}

export function VoucherBenefitCard() {
  return (
    <article className="flex flex-col flex-grow border border-stone-300 rounded-lg overflow-hidden shadow-sm font-sans">
      <Image
        src={photo}
        alt="Imagen de descuento"
        width={500}
        height={300}
        className="object-cover w-full"
      />
      <div className="p-4 flex flex-col gap-3 bg-blue-700">
        <h3 className="text-lg font-bold text-blue-50">COTO</h3>
        <a
          href="#"
          className="text-blue-50 border border-blue-50 rounded-md w-fit px-2 py-1 text-sm font-semibold text-center"
        >
          QUIERO MI CÓDIGO
        </a>
      </div>
    </article>
  );
}
