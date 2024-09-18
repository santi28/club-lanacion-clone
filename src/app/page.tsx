import Slider from "./components/Slider";
import Header from "./components/Header";

import DiscountSection from "./components/TurismoSection";
import VoucherSection from "./components/VoucherSection";

export default function Home() {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return (
      <div>
        <h1>Missing configuration</h1>
        <p>
          Please make sure to set the <code>NEXT_PUBLIC_BASE_API_URL</code>{" "}
          environment variable.
        </p>
      </div>
    );
  }

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
