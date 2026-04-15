import { navigationItems } from "./data";
import type { FamsentryPageId } from "./types";

type MobileMenuProps = {
  currentPage: FamsentryPageId;
  onSelectPage: (page: FamsentryPageId) => void;
};

export default function MobileMenu({
  currentPage,
  onSelectPage,
}: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-[90] bg-white p-6 pt-24 md:hidden">
      <div className="flex flex-col gap-6 text-2xl font-bold text-slate-900">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectPage(item.id)}
            className={currentPage === item.id ? "text-blue-600" : ""}
          >
            {item.label}
          </button>
        ))}
        <hr className="my-4 border-slate-100" />
        <button
          type="button"
          className="rounded-2xl bg-blue-600 py-4 text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
