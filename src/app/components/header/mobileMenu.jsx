"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navs = [
  { name: "صفحه اصلی", href: "/" },
  { name: "فروشگاه", href: "/shop" },
  { name: "آرایشی", href: "/makeup" },
  { name: "مراقبت پوست", href: "/skin" },
  { name: "زیبایی مو", href: "/hair" },
  { name: "عطر و اسپری", href: "/perfume" },
];


const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`flex cursor-pointer ${className}`}
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex min-h-dvh flex-col items-center justify-center bg-white/95 p-6 backdrop-blur-sm">
      <Button className="absolute right-5 top-5 h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-2xl" onClick={onClose} aria-label="بستن منو">
        ✕
      </Button>
      <ul className="flex flex-col items-center gap-5 text-lg">
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
