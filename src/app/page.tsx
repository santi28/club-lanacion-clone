import Slider from "./components/Slider";
import Header from "./components/Header";

import { IconChevronLeft } from "./components/icons/IconChevronLeft";
import { IconChevronRight } from "./components/icons/IconChevronRight";
import DiscountSection from "./components/TurismoSection";
import VoucherCard from "./components/VoucherCard";
import VoucherSection from "./components/VoucherSection";

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

// export function CardCarousel() {
//   return (
//     <div className="flex items-center gap-4 w-full mx-auto">
//       <button
//         aria-label="Anterior"
//         className="text-stone-950 hover:bg-stone-100 p-2 rounded-full"
//       >
//         <IconChevronLeft className="w-6 h-6" />
//       </button>

//       {/* Contenedor de las tarjetas */}
//       <div className="flex flex-grow gap-4">
//         <VoucherCard
//           title="COTO"
//           image="http://bucket1.glanacion.com/Club.LN/anexos/fotos/47/A766147.JPG?ver=1427531269"
//           url="#"
//         />
//         <VoucherCard
//           title="COTO"
//           image="http://bucket1.glanacion.com/Club.LN/anexos/fotos/47/A766147.JPG?ver=1427531269"
//           url="#"
//         />
//         <VoucherCard
//           title="COTO"
//           image="http://bucket1.glanacion.com/Club.LN/anexos/fotos/47/A766147.JPG?ver=1427531269"
//           url="#"
//         />
//         <VoucherCard
//           title="COTO"
//           image="http://bucket1.glanacion.com/Club.LN/anexos/fotos/47/A766147.JPG?ver=1427531269"
//           url="#"
//         />
//       </div>

//       <button
//         aria-label="Siguiente"
//         className="text-stone-950 hover:bg-stone-100 p-2 rounded-full"
//       >
//         <IconChevronRight className="w-6 h-6" />
//       </button>
//     </div>
//   );
// }
