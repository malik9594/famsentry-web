import { faqItems } from "./data";

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="mb-12 text-4xl font-black text-slate-900 md:text-6xl">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqItems.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
          >
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {faq.question}
            </h3>
            <p className="leading-relaxed text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
