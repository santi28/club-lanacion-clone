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
  tag?: string;
}

export default function CardCarousel({
  initialAccounts,
  initialMeta,
  isVoucherList = false,
  tag,
}: CardCarouselProps) {
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
  const [meta, setMeta] = useState<Metadata | undefined>(initialMeta);
  const [loading, setLoading] = useState(false);

  const loadPage = async (page: number) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      //  Si hay un tag, lo agregamos a los parámetros
      if (tag) {
        params.append("tag", tag);
      }

      // Si es una lista de vouchers, lo agregamos a los parámetros
      if (isVoucherList) {
        params.append("withVoucher", "true");
      }

      const res = await fetch(
        `/api/accounts?${params.toString()}&page=${page}`
      );

      const newAccounts = await res.json();
      setAccounts(newAccounts.data); // Reemplazamos las cuentas actuales
      setMeta(newAccounts.metadata); // Actualizamos los metadatos
    } catch (error) {
      console.error("Error fetching page:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadNextPage = () => {
    if (meta?.nextPage && !loading) {
      loadPage(meta.nextPage);
    }
  };

  const loadPrevPage = () => {
    if (meta?.prevPage && !loading) {
      loadPage(meta.prevPage);
    }
  };

  return (
    <div className="flex items-center gap-4 w-full mx-auto">
      {/* Botón para cargar la página anterior */}
      <button
        onClick={loadPrevPage}
        aria-label="Anterior"
        className={`text-stone-950 hover:bg-stone-100 p-2 rounded-full hidden md:block ${
          meta?.prevPage ? "" : "opacity-10"
        }`}
        disabled={!meta?.prevPage || loading}
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

      {/* Botón para cargar la siguiente página */}
      <button
        onClick={loadNextPage}
        aria-label="Siguiente"
        className={`text-stone-950 hover:bg-stone-100 p-2 rounded-full hidden md:block ${
          meta?.nextPage ? "" : "opacity-10"
        }`}
        disabled={!meta?.nextPage || loading}
      >
        <IconChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
