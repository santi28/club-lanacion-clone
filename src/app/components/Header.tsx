import Image from "next/image";
import React from "react";

import { IconMenu } from "./icons/IconMenu";
import { IconHeart } from "./icons/IconHeart";
import SiteLogo from "./ClubLaNacionLogo";
import avatar from "../../public/images/avatar.png";
import { IconBell } from "./icons/IconBell";
import { IconSearch } from "./icons/IconSearch";

// Optimización de rendimiento usando React.memo
const MemoizedIconMenu = React.memo(IconMenu);
const MemoizedIconHeart = React.memo(IconHeart);
const MemoizedIconBell = React.memo(IconBell);
const MemoizedIconSearch = React.memo(IconSearch);

export default function Header() {
  return (
    <header className="w-full h-[80px] bg-stone-950/80 backdrop-blur-sm fixed top-0 z-50 border-b border-stone-950/80 flex items-center justify-between px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div
          id="left"
          className="flex flex-row gap-x-3 items-center md:gap-x-6"
        >
          <button
            aria-label="Abrir menú"
            className="w-6 h-6 text-white cursor-pointer"
          >
            <MemoizedIconMenu className="w-full h-full" />
          </button>
          <SiteLogo className="h-8" />
        </div>

        <form id="center" className="hidden md:flex flex-row items-center">
          <input
            type="text"
            aria-label="Buscar un local"
            placeholder="Buscá un local"
            className="w-full text-stone-50 placeholder-stone-50/40 bg-transparent border border-stone-50/80 rounded-l-full px-3.5 py-2 outline-none text-sm flex-1"
          />
          <input
            type="text"
            aria-label="Ingresar dirección"
            placeholder="Ingresá tu dirección"
            className="w-full text-stone-50 placeholder-stone-50/40 bg-transparent border border-stone-50/80 rounded-r-full border-l-0 px-3.5 py-2 text-sm outline-none flex-1"
          />
          <button
            aria-label="Buscar"
            className="h-[38px] w-[38px] flex items-center justify-center text-stone-50 ml-4 bg-blue-600 rounded-full"
          >
            <MemoizedIconSearch className="w-4 h-4" />
          </button>
        </form>

        <div id="right" className="flex flex-row gap-x-3 items-center">
          <button
            aria-label="Abrir búsqueda"
            className="w-6 h-6 text-white cursor-pointer md:hidden"
          >
            <MemoizedIconSearch className="w-full h-full" />
          </button>
          <button
            aria-label="Ver notificaciones"
            className="w-6 h-6 text-white cursor-pointer"
          >
            <MemoizedIconBell className="w-full h-full" />
          </button>
          <button
            aria-label="Ver favoritos"
            className="w-6 h-6 text-white cursor-pointer"
          >
            <MemoizedIconHeart className="w-full h-full" />
          </button>
          <Image
            src={avatar}
            alt="avatar"
            className="w-6 h-6 rounded-full"
            width={32}
            height={32}
            priority
          />
        </div>
      </div>
    </header>
  );
}
