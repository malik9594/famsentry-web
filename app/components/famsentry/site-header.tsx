import { Menu, User, X } from "lucide-react";
import { brandIcon as BrandIcon, navigationItems } from "./data";
import NavLink from "./nav-link";
import type { FamsentryPageId } from "./types";

type SiteHeaderProps = {
  currentPage: FamsentryPageId;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onSelectPage: (page: FamsentryPageId) => void;
};

export default function SiteHeader({
  currentPage,
  isMenuOpen,
  onToggleMenu,
  onSelectPage,
}: SiteHeaderProps) {
  return (
    <nav className="sticky top-0 z-[100] border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2"
          onClick={() => onSelectPage("home")}
        >
          <div className="rounded-lg bg-blue-600 p-1.5 shadow-lg shadow-blue-200">
            <BrandIcon className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900">
            famsentry.com
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              label={item.label}
              isActive={currentPage === item.id}
              onSelect={onSelectPage}
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
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-100 transition-all hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>

        <button
          type="button"
          className="p-2 text-slate-600 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={onToggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
