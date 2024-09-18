import { CardCarousel } from "@/app/page";

export default function VoucherSection() {
  return (
    <section className="mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 bg-neutral-100 items-center">
      <header className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Códigos de descuento
          </h2>
          <p className="text-sm text-gray-600">
            ¿Sos socio de Club LA NACION? Descargá tu código y disfrutá
            beneficios exclusivos en tus marcas favoritas
          </p>
        </div>
        <button className="font-sans border-blue-600 border-2 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors">
          TODOS LOS CÓDIGOS
        </button>
      </header>

      <CardCarousel />
    </section>
  );
}
