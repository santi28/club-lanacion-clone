import Image from "next/image";
import Slider from "./components/Slider";
import Header from "./components/Header";

import photo from "../public/images/slider.jpg";
import { IconMapPin } from "./components/icons/IconMapPin";
import { IconChevronLeft } from "./components/icons/IconChevronLeft";
import { IconChevronRight } from "./components/icons/IconChevronRight";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <CardCarouselSection />
      </main>
    </>
  );
}

export function DiscountCarouselSection() {
  <section className="mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
    <header className="flex justify-between items-center mb-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
        Turismo por Buenos Aires
      </h2>
      <button className="border-blue-600 border-2 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors">
        TODOS LOS BENEFICIOS
      </button>
    </header>

    {/* Carrusel de tarjetas con 4 visibles */}
    <div className="flex items-center gap-4">
      <button
        aria-label="Anterior"
        className="text-stone-950 hover:bg-stone-100 p-2 rounded-full"
      >
        <IconChevronLeft className="w-6 h-6" />
      </button>

      {/* Contenedor de las tarjetas */}
      <div className="flex flex-grow gap-4">
        <DiscountBenefitCard />
        <DiscountBenefitCard />
        <DiscountBenefitCard />
        <DiscountBenefitCard />
      </div>

      <button
        aria-label="Siguiente"
        className="text-stone-950 hover:bg-stone-100 p-2 rounded-full"
      >
        <IconChevronRight className="w-6 h-6" />
      </button>
    </div>
  </section>;
}

export function CardCarouselSection() {
  return (
    <section className="mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 bg-neutral-100 items-center">
      <header className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Turismo por Buenos Aires
          </h2>
          <p className="text-sm text-gray-600">
            ¿Sos socio de Club LA NACION? Descargá tu código y disfrutá
            beneficios exclusivos en tus marcas favoritas
          </p>
        </div>
        <button className="font-sans border-blue-600 border-2 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors">
          TODOS LOS BENEFICIOS
        </button>
      </header>

      <CardCarousel />
    </section>
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
