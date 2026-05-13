import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import ContactPage from "@/app/components/famsentry/contact-page";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Contact Us | FamSentry",
  description:
    "Get in touch with the FamSentry team for questions about our family safety platform, plans, or enterprise solutions.",
};

export default function ContactUsRoute() {
  return (
    <FamsentrySiteShell>
      <ContactPage />
    </FamsentrySiteShell>
  );
}
