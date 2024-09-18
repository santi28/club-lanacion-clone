import SiteLogo from "./ClubLaNacionLogo";
import { IconMenu } from "./icons/IconMenu";

export default function Header() {
  return (
    <header className="w-full h-[80px] bg-stone-950/80 backdrop-blur-sm fixed top-0 z-50 border-b border-stone-950/80 items-center justify-between flex px-4">
      <div id="left" className="flex flex-row gap-x-6">
        <IconMenu className="w-8 h-8 text-white cursor-pointer" />
        <SiteLogo className="h-8" />
      </div>
      <div id="center"></div>
      <div id="rigth"></div>
    </header>
  );
}
