"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navs = [
  { name: "صفحه اصلی", href: "/" },
  { name: "فروشگاه", href: "/store" },
  { name: "آرایشی", href: "/makeup" },
  { name: "مراقبت پوست", href: "/skin" },
  { name: "زیبایی مو", href: "/hair" },
  { name: "عطر و اسپری", href: "/spray" },
];


const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`bg-[#00BF6F] flex cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};


const MobileMenu = ({ isOpen, onClose }) => {
  const [activePath, setActivePath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
      <Button className="absolute top-4 right-4 text-2xl bg-transparent" onClick={onClose}>
        ✕
      </Button>
      <ul className="flex flex-col gap-6 text-xl">
        {navs.map((nav) => {
          const isActive = activePath === nav.href;
          return (
            <li key={nav.name} onClick={onClose}>
              <Link
                href={nav.href}
                className={`${isActive ? "text-sorkhabi font-bold" : ""}`}
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;