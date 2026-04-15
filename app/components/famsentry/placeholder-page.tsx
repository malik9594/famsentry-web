type PlaceholderPageProps = {
  label: string;
};

export default function PlaceholderPage({ label }: PlaceholderPageProps) {
  return <div className="p-20 text-center text-slate-400">{label}</div>;
}
