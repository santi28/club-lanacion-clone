import Image from "next/image";
import { IconMapPin } from "./icons/IconMapPin";
import { Account } from "../services/accounts.service";

function formatDistance(distance: number) {
  return distance > 1000
    ? `${(distance / 1000).toFixed(1)} km`
    : `${distance} m`;
}

interface DiscountCardProps {
  account: Account;
}

export default function DiscountCard({ account }: DiscountCardProps) {
  const formatedDistance = formatDistance(account.distance);

  return (
    <article className="flex flex-col flex-grow border border-stone-300 rounded-lg overflow-hidden shadow-sm font-sans flex-1">
      <a href={account.url}>
        <Image
          src={account.images[0].url}
          alt="Imagen de descuento"
          width={500}
          height={300}
          className="object-cover w-full h-40"
        />
      </a>
      <div className="p-4 flex flex-col gap-3 justify-between flex-1">
        <div className="flex flex-col">
          <a href={account.url} className="hover:underline decoration-blue-600">
            <h3 className="font-bold text-gray-800 w-full">{account.name}</h3>
          </a>
          <div className="flex flex-row items-center divide-x divide-stone-300 -ml-2">
            {account.benefits.Black > 0 && (
              <span className="text-black-700 font-black px-2">
                {account.benefits.Black}%
              </span>
            )}
            {account.benefits.Premium > 0 && (
              <span className="text-blue-700 font-black px-2">
                {account.benefits.Premium}%
              </span>
            )}
            {account.benefits.Classic > 0 && (
              <span className="text-blue-500 font-black px-2">
                {account.benefits.Classic}%
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
