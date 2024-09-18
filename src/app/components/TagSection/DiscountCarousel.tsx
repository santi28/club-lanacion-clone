import { VoucherBenefitCard } from "../../page";
import { IconChevronLeft } from "../icons/IconChevronLeft";
import { IconChevronRight } from "../icons/IconChevronRight";
import Image from "next/image";
import photo from "../../public/images/slider.jpg";
import { IconMapPin } from "../icons/IconMapPin";
import { AccountTagResult } from "../../services/accounts.service";

interface DiscountBenefitCardProps {
  content: AccountTagResult[];
}

export default function DiscountCarousel({
  content,
}: DiscountBenefitCardProps) {
  return (
    <div className="flex items-center gap-4 w-full mx-auto">
      <button
        aria-label="Anterior"
        className="text-stone-950 hover:bg-stone-100 p-2 rounded-full"
      >
        <IconChevronLeft className="w-6 h-6" />
      </button>

      {/* Contenedor de las tarjetas */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 flex-1">
        {content.map((account) => (
          // Simulamos la distancia con un valor aleatorio (0m - 1200m)
          // account.distance = Math.floor(Math.random() * 1200),

          <DiscountBenefitCard key={account.name} content={account} />
        ))}
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

function DiscountBenefitCard({ content }: { content: AccountTagResult }) {
  // Formateamos la distancia segun corresponda (> 1000m -> km, < 1000m -> m)

  const formatedDistance = `  
    ${
      content.distance > 1000
        ? `${(content.distance / 1000).toFixed(1)} km`
        : `${content.distance} m`
    }
  `;

  return (
    <article className="flex flex-col flex-grow border border-stone-300 rounded-lg overflow-hidden shadow-sm font-sans flex-1">
      <a href={content.url}>
        <Image
          src={content.images[0].url}
          alt="Imagen de descuento"
          width={500}
          height={300}
          className="object-cover w-full h-40"
        />
      </a>
      <div className="p-4 flex flex-col gap-3 justify-between flex-1">
        <div className="flex flex-col">
          <a href={content.url} className="hover:underline decoration-blue-600">
            <h3 className="font-bold text-gray-800 w-full">{content.name}</h3>
          </a>
          <div className="flex flex-row items-center divide-x divide-stone-300 -ml-2">
            {content.benefits.Black > 0 && (
              <span className="text-black-700 font-black px-2">
                {content.benefits.Black}%
              </span>
            )}
            {content.benefits.Premium > 0 && (
              <span className="text-blue-700 font-black px-2">
                {content.benefits.Premium}%
              </span>
            )}
            {content.benefits.Classic > 0 && (
              <span className="text-blue-500 font-black px-2">
                {content.benefits.Classic}%
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <IconMapPin className="w-4 h-4 inline-block mr-1" />
          <span>
            A <strong>{formatedDistance}</strong>
          </span>
        </div>
      </div>
    </article>
  );
}
