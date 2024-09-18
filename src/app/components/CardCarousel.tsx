"use client";

import { useState } from "react";
import { Account, Metadata } from "../services/accounts.service";
import DiscountCard from "./DiscountCard";
import { IconChevronLeft } from "./icons/IconChevronLeft";
import { IconChevronRight } from "./icons/IconChevronRight";
import VoucherCard from "./VoucherCard";

interface CardCarouselProps {
  initialAccounts: Account[];
  initialMeta?: Metadata;
  isVoucherList?: boolean;

  loadMore?: () => void;
}

export default function CardCarousel({
  initialAccounts,
  initialMeta,
  isVoucherList = false,
}: CardCarouselProps) {
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
  const [meta, setMeta] = useState<Metadata | undefined>(initialMeta);

  console.log("CardCarousel", { accounts, meta });

  return (
    <div className="flex items-center gap-4 w-full mx-auto">
      <button
        aria-label="Anterior"
        className={`text-stone-950 hover:bg-stone-100 p-2 rounded-full hidden md:block ${
          meta?.prevPage ? "" : "opacity-10"
        }`}
      >
        <IconChevronLeft className="w-6 h-6" />
      </button>

      {/* Contenedor de las tarjetas */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 flex-1">
        {isVoucherList
          ? accounts.map((account) => (
              <VoucherCard key={account.id} account={account} />
            ))
          : accounts.map((account) => (
              <DiscountCard key={account.id} account={account} />
            ))}
      </div>

      <button
        aria-label="Siguiente"
        className={`text-stone-950 hover:bg-stone-100 p-2 rounded-full hidden md:block ${
          meta?.nextPage ? "" : "opacity-10"
        }`}
      >
        <IconChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
