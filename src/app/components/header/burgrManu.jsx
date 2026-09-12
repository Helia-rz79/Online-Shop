"use client";
import Image from "next/image";
import React, { useState } from "react";
import MobileMenu from "./mobileMenu";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="burger-menu flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="باز کردن منو"
      >
        <Image
          src="/icon/menu.svg"
          width={30}
          height={30}
          alt="menu"
        />
      </button>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default BurgerMenu;
