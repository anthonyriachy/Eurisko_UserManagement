
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useState } from "react";
import { Logo } from "../../atoms/Logo";
import { DesktopNav } from "../../molecules/DesktopNav";
import { MobileNav } from "../../molecules/MobileNav";
 function Header() {

  return (
    <nav className="relative flex items-center justify-between  gap-[8px] px-[16px] sm:px-[24px] py-[16px] bg-[var(--bg-blue)] shadow-md">
      <Logo/>
      <DesktopNav/>
      <MobileNav/>
    </nav>
  );
}

export {Header};
