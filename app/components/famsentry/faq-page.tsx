"use client";

import { useState } from "react";
import { faqItems } from "./data";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold tracking-wider text-blue-700 uppercase">
          Support Center
        </span>
        <h1 className="text-4xl font-black text-slate-900 md:text-6xl">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="space-y-4">
        {faqItems.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                  ? "border-blue-500 bg-white shadow-lg shadow-blue-500/10"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
                }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-expanded={isOpen}
              >
                <h3 className={`text-lg md:text-xl font-bold pr-4 transition-colors duration-300 ${isOpen ? "text-blue-600" : "text-slate-900"}`}>
                  {faq.question}
                </h3>
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                      ? "rotate-180 bg-blue-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                    }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px w-full bg-slate-100 mb-6" />
                    <p className="text-lg leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
