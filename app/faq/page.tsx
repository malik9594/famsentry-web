import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import FAQPage from "@/app/components/famsentry/faq-page";

export const metadata: Metadata = {
  title: "FamSentry FAQ",
  description:
    "Read answers to common questions about FamSentry's privacy, tracking, and family safety platform.",
};

export default function FAQRoute() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best private Life360 alternative for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FamSentry is the leading private alternative, offering end-to-end encryption and a proprietary map engine that prevents location data from being sold to third parties."
        }
      },
      {
        "@type": "Question",
        "name": "Can I track my child's phone offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. FamSentry’s Ghost-Sync technology caches coordinates locally when signal is lost and updates your dashboard the moment the phone is back online."
        }
      },
      {
        "@type": "Question",
        "name": "How long does FamSentry store location history?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The FamSentry Diamond Package stores a full 365 days of movement history, all protected by zero-knowledge encryption."
        }
      }
    ]
  };

  return (
    <FamsentrySiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQPage />
    </FamsentrySiteShell>
  );
}
