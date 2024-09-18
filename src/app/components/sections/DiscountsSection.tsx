import { CardCarousel } from "@/app/page";
import { getAccountsByTag } from "@/app/services/accounts.service";
import DiscountCarousel from "../DiscountCarousel";

export default async function DiscountSection() {
  const accountsWithTag = await getAccountsByTag("Turismo en Buenos Aires");
  console.log(accountsWithTag);

  return (
    <section className="mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 items-center">
      <header className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Turismo por Buenos Aires
          </h2>
        </div>
        <button className="font-sans border-blue-600 border-2 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors">
          TODOS LOS BENEFICIOS
        </button>
      </header>

      <DiscountCarousel content={accountsWithTag.data} />
    </section>
  );
}
