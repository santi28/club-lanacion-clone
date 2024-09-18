import Slider from "./components/Slider";
import Header from "./components/Header";

import DiscountSection from "./components/TurismoSection";
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
