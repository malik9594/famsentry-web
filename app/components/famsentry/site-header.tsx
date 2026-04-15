"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, X } from "lucide-react";
import { brandIcon as BrandIcon, navigationItems } from "./data";
import MobileMenu from "./mobile-menu";
import NavLink from "./nav-link";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-[100] border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex cursor-pointer items-center gap-2">
          <div className="rounded-lg bg-blue-600 p-1.5 shadow-lg shadow-blue-200">
            <BrandIcon className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900">
            famsentry.com
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            className="p-2 text-slate-600 transition-colors hover:text-blue-600"
            aria-label="User account"
          >
            <User size={20} />
          </button>
          <Link
            href="/compare"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-100 transition-all hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="p-2 text-slate-600 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen ? (
        <MobileMenu
          pathname={pathname}
          onNavigate={() => setIsMenuOpen(false)}
        />
      ) : null}
    </nav>
  );
}
