"use client";

import Link from "next/link";
import { navigationItems } from "./data";

type MobileMenuProps = {
  pathname: string;
  onNavigate: () => void;
};

export default function MobileMenu({ pathname, onNavigate }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-[90] bg-white p-6 pt-24 md:hidden">
      <div className="flex flex-col gap-6 text-2xl font-bold text-slate-900">
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={onNavigate}
            className={pathname === item.href ? "text-blue-600" : ""}
          >
            {item.label}
          </Link>
        ))}
        <hr className="my-4 border-slate-100" />
        <Link
          href="/compare"
          onClick={onNavigate}
          className="rounded-2xl bg-blue-600 py-4 text-center text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
