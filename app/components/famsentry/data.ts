import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  CheckCircle2,
  Globe,
  Lock,
  MapPin,
  Navigation,
  Shield,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";
import type { FamsentryPageId, NavigationItem } from "./types";

export const navigationItems: NavigationItem[] = [
  { id: "features", label: "Features" },
  { id: "privacy", label: "Privacy" },
  { id: "compare", label: "Compare" },
  { id: "faq", label: "FAQ" },
];

export const brandIcon = Shield;
export const homePointIcon = CheckCircle2;

export const bottomActionIcons: LucideIcon[] = [
  Lock,
  Navigation,
  Bell,
  Users,
];

export const footerSocialIcons: LucideIcon[] = [Globe, User, Zap];

export const homeValuePoints = [
  "No external map APIs handling your data",
  "No ad-based monetization",
  "No hidden tracking layers",
];

export const featureCards: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}> = [
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "High accuracy location tracking with minimal battery usage.",
    badge: "Precise",
  },
  {
    icon: Bell,
    title: "Smart Geofencing",
    description: "Instant alerts for home, school, and custom zones.",
    badge: "Smart",
  },
  {
    icon: AlertTriangle,
    title: "SOS Emergency",
    description: "Instant location sharing to trusted members in distress.",
    badge: "Urgent",
  },
  {
    icon: BarChart3,
    title: "Driving Insights",
    description: "Monitor speed and behavior patterns for safer journeys.",
    badge: "Insight",
  },
  {
    icon: Navigation,
    title: "Location History",
    description: "Secure timeline of movements with private storage.",
    badge: "Secure",
  },
  {
    icon: Users,
    title: "Private Groups",
    description: "Complete control over who can see your location.",
    badge: "Private",
  },
];

export const privacySections = [
  {
    title: "No Third-Party Mapping Dependency",
    description:
      "All location processing is handled within a controlled infrastructure. We do not pipe your coordinates through big tech APIs that log your behavior.",
  },
  {
    title: "No Data Monetization",
    description:
      "We do not sell, share, or analyze user data for advertising. Our business model is based on subscriptions, not your personal life.",
  },
  {
    title: "Controlled Data Environment",
    description:
      "Your location data is only accessible to you and your approved group. Not even our engineers can view your real-time paths without permission.",
  },
  {
    title: "Enterprise-Level Deployment",
    description:
      "Optional on-premise deployment ensures maximum control for organizations and families requiring extreme privacy.",
  },
];

export const valuePropCards: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}> = [
  {
    icon: Lock,
    title: "Independent",
    description: "Our own mapping stack.",
  },
  {
    icon: User,
    title: "No Ads",
    description: "Zero data selling.",
    className: "mt-4",
  },
];

export const comparisonCards = [
  {
    title: "Best Life360 Alternative",
    description:
      "If you are using Life360, you are relying on a system built around data sharing.",
    className: "bg-blue-600 text-white shadow-xl",
    items: [
      "No data selling",
      "Independent mapping",
      "Better privacy architecture",
    ],
  },
  {
    title: "Better Than Google Maps",
    description:
      "Google Maps is built for ads, not dedicated family safety.",
    className: "bg-slate-900 text-white",
    items: [
      "Dedicated safety features",
      "Real-time smart alerts",
      "Private infrastructure",
    ],
  },
  {
    title: 'The "Find My" Alternative',
    description:
      "Escape the closed Apple ecosystem with cross-platform control.",
    className: "bg-slate-100 text-slate-900",
    items: [
      "Android and iOS parity",
      "Detailed history logs",
      "Advanced driving stats",
    ],
  },
];

export const comparisonRows: Array<{
  feature: string;
  famsentry: boolean;
  life360: boolean;
  googleMaps: boolean;
  findMy: boolean;
}> = [
  {
    feature: "Ad-Free Experience",
    famsentry: true,
    life360: false,
    googleMaps: false,
    findMy: true,
  },
  {
    feature: "Independent Mapping",
    famsentry: true,
    life360: false,
    googleMaps: false,
    findMy: false,
  },
  {
    feature: "No Data Monetization",
    famsentry: true,
    life360: false,
    googleMaps: false,
    findMy: true,
  },
  {
    feature: "Enterprise Options",
    famsentry: true,
    life360: false,
    googleMaps: false,
    findMy: false,
  },
  {
    feature: "Cross-Platform",
    famsentry: true,
    life360: true,
    googleMaps: true,
    findMy: false,
  },
];

export const faqItems = [
  {
    question: "Is FamSentry better than Life360?",
    answer:
      "FamSentry focuses on privacy and infrastructure control rather than ad-driven tracking models. We do not sell your data.",
  },
  {
    question: "Does FamSentry use Google Maps?",
    answer:
      "No. FamSentry uses an independent mapping infrastructure to ensure your location behavior is not tracked by third-party providers.",
  },
  {
    question: "Is my data sold?",
    answer:
      "No. Data is never sold or shared. Our revenue comes purely from memberships.",
  },
  {
    question: "Can I track my family in real-time?",
    answer:
      "Yes, with high accuracy and low battery usage across both Android and iOS devices.",
  },
  {
    question: "Can businesses use FamSentry?",
    answer:
      "Yes, we offer enterprise versions for fleet tracking and workforce safety with private deployment options.",
  },
  {
    question: "Is location history secure?",
    answer:
      "Yes, all history is encrypted and accessible only to you and your authorized family members.",
  },
];

export const footerPlatformLinks: Array<{
  label: string;
  page?: FamsentryPageId;
}> = [
  { label: "Features", page: "features" },
  { label: "Comparison", page: "compare" },
  { label: "Download App" },
  { label: "Enterprise" },
];

export const footerTrustLinks: Array<{
  label: string;
  page?: FamsentryPageId;
}> = [
  { label: "Privacy Policy", page: "privacy" },
  { label: "Terms of Service" },
  { label: "FAQ", page: "faq" },
  { label: "Help Center" },
];

export const comparisonCellIcons = {
  true: CheckCircle2,
  false: X,
};
