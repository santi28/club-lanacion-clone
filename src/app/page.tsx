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
