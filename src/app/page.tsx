import Image from "next/image";
import Slider from "./components/Slider";
import Header from "./components/Header";

import photo from "../public/images/slider.jpg";
import { IconMapPin } from "./components/icons/IconMapPin";
import { IconChevronLeft } from "./components/icons/IconChevronLeft";
import { IconChevronRight } from "./components/icons/IconChevronRight";
import DiscountSection from "./components/TagSection/TagSection";
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
