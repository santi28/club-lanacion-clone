"use server";

import { getAccountsByTag } from "@/app/services/accounts.service";
import CardCarousel from "./CardCarousel";

export default async function DiscountSection() {
  const fetchedAccounts = await getAccountsByTag("Turismo en Buenos Aires");

  return (
    <section className="mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 items-center">
      <header className="flex justify-between items-center mb-6 gap-4 flex-col md:flex-row">
        <div className="flex flex-col w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Turismo por Buenos Aires
          </h2>
        </div>
        <button className="font-sans w-full md:w-fit border-blue-600 border-2 text-blue-600 px-4 py-2 rounded-full text-nowrap text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors">
          TODOS LOS BENEFICIOS
        </button>
      </header>

      <CardCarousel
        initialAccounts={fetchedAccounts.data}
        initialMeta={fetchedAccounts.metadata}
        tag="Turismo en Buenos Aires"
      />
    </section>
  );
}
