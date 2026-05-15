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
    <div
      className="min-h-screen font-sans text-[#1e293b] selection:bg-blue-100 selection:text-blue-900"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 100% 0%, rgba(219,234,254,0.55) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(226,232,240,0.45) 0%, transparent 70%), #f8fafc",
      }}
    >

      <div className="relative z-10">
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
