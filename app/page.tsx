import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import HomePage from "@/app/components/famsentry/home-page";

export const metadata: Metadata = {
  title: "FamSentry | Privacy-First Family Tracking Alternative",
  description:
    "The best private alternative to Life360 and Google Maps. Real-time family safety with independent mapping infrastructure.",
};

export default function Home() {
  return (
    <FamsentrySiteShell>
      <HomePage />
    </FamsentrySiteShell>
  );
}
