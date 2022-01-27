import dynamic from "next/dynamic";

export const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"));
export const DropdownMenu = dynamic(
  () => import("./DropdownMenu/DropdownMenu")
);
