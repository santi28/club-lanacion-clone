import Image from "next/image";
import { Account } from "../services/accounts.service";

interface VoucherCardProps {
  account: Account;
}

export default function VoucherCard({ account }: VoucherCardProps) {
  return (
    <article className="flex flex-col flex-grow border border-stone-300 rounded-lg overflow-hidden shadow-sm font-sans">
      <Image
        src={account.images[0].url}
        alt="Imagen de descuento"
        width={500}
        height={300}
        className="object-cover w-full h-40"
      />
      <div className="p-4 flex flex-col gap-3 bg-blue-700 flex-1 justify-between">
        <h3 className="text-lg font-bold text-blue-50">{account.name}</h3>
        <a
          href={account.url}
          className="text-blue-50 border border-blue-50 rounded-md w-fit px-2 py-1 text-sm font-semibold text-center"
        >
          QUIERO MI CÓDIGO
        </a>
      </div>
    </article>
  );
}
