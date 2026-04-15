import type { ReactNode } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

type FamsentrySiteShellProps = {
  children: ReactNode;
};

export default function FamsentrySiteShell({
  children,
}: FamsentrySiteShellProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-[#1e293b] selection:bg-blue-100 selection:text-blue-900">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-slate-200 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
