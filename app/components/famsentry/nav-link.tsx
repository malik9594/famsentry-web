import type { FamsentryPageId } from "./types";

type NavLinkProps = {
  id: FamsentryPageId;
  label: string;
  isActive: boolean;
  onSelect: (page: FamsentryPageId) => void;
};

export default function NavLink({
  id,
  label,
  isActive,
  onSelect,
}: NavLinkProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`text-sm font-medium transition-colors ${
        isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
      }`}
    >
      {label}
    </button>
  );
}
