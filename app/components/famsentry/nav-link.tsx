import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
};

export default function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
      }`}
    >
      {label}
    </Link>
  );
}
