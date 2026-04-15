import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  subtitle?: string;
};

export default function SectionHeading({
  children,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center md:text-left">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {children}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-lg text-slate-500">{subtitle}</p>
      ) : null}
    </div>
  );
}
