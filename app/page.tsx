import type { Metadata } from "next";
import FamSentryApp from "@/app/components/famsentry/famsentry-app";

export const metadata: Metadata = {
  title: "FamSentry | Privacy-First Family Tracking Alternative",
  description:
    "The best private alternative to Life360 and Google Maps. Real-time family safety with independent mapping infrastructure.",
};

export default function Home() {
  return <FamSentryApp />;
}
