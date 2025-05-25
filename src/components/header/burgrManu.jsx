"use client";
import Image from "next/image";
import React, { useState } from "react";
import MobileMenu from "./mobileMenu";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="burger-menu flex lg:hidden cursor-pointer mr-1"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/icon/menu.svg"
          width={30}
          height={30}
          alt="menu"
        />
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default BurgerMenu;
