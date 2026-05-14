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
  Network,
  Radar,
  Battery,

} from "lucide-react";
import type { FooterLink, NavigationItem } from "./types";

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "features", label: "Features", href: "/features" },
  { id: "compare", label: "Sovereign Choice", href: "/sovereign-choice" },
  { id: "pricing", label: "Pricing", href: "/pricing" },
  { id: "privacy", label: "Privacy", href: "/privacy" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact Us", href: "/contact-us" },
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
    {
      icon: Network,
      title: "Offline Mode",
      description: "Access critical safety maps and last-known locations without signal.",
      badge: "Secure",
    },
    {
      icon: Battery,
      title: "Battery Optimized",
      description: "Military-grade tracking algorithms that won't drain your device.",
      badge: "Private",
    },
    {
      icon: Radar,
      title: "Device Health",
      description: "Monitor battery levels and connectivity status for all group members.",
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
      className: "",
    },
    {
      icon: Network,
      title: "Full-Stack Privacy",
      description: "From map tiles to routing servers, we own the entire infrastructure stack."
    },
    {
      icon: Radar,
      title: "Low Latency",
      description: "Fast, water smooth updates powered by dedicated high-performance hardware.",
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

export const sovereignComparisonRows = [
  {
    feature: "Data Sovereignty",
    famsentry: "Proprietary Mapifyit Engine",
    mainstream: "Shared 3rd Party APIs",
  },
  {
    feature: "Privacy Model",
    famsentry: "Zero-Knowledge Encryption",
    mainstream: "Ad-Supported / Data Brokering",
  },
  {
    feature: "History Archive",
    famsentry: "365 Days",
    mainstream: "2–30 Days",
  },
  {
    feature: "Offline Reliability",
    famsentry: "Ghost-Sync (Local Cache)",
    mainstream: "Requires Constant Data",
  },
];

export const faqItems = [
  {
    question: "What is FamSentry?",
    answer:
      "FamSentry is a private family tracking app that allows parents or administrators to monitor family members in real time with strong privacy protections.",
  },
  {
    question: "Does FamSentry use Google Maps?",
    answer:
      "No. FamSentry operates on its own independent mapping infrastructure, ensuring your location data is never shared with third-party providers.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Your data is never sold or shared. FamSentry’s revenue comes solely from memberships, not advertising.",
  },
  {
    question: "Can I track my family in real time?",
    answer:
      "Yes. FamSentry provides accurate, real-time tracking with minimal battery usage across Android and iOS devices.",
  },
  {
    question: "Can businesses use FamSentry?",
    answer:
      "Yes. We provide enterprise solutions for fleet tracking and workforce safety, with options for private deployment.",
  },
  {
    question: "Is location history secure?",
    answer:
      "Yes. All location history is encrypted and accessible only to you and your authorized family members.",
  },
  {
    question: "Does FamSentry work offline?",
    answer:
      "Yes. With Ghost-Sync technology, FamSentry caches coordinates locally when signal is lost and updates your dashboard once the device reconnects.",
  },
  {
    question: "How long is location history stored?",
    answer:
      "The FamSentry Diamond Package stores up to 365 days of movement history, protected by zero-knowledge encryption.",
  },
  {
    question: "What makes FamSentry unique?",
    answer:
      "FamSentry combines end-to-end encryption, independent mapping, and private infrastructure to deliver a secure, ad-free family tracking experience.",
  },
];


export const footerPlatformLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Crash Detection", href: "/features/crash-detection" },
  { label: "Driving Safety", href: "/features/driving-safety" },
  { label: "Offline Tracking", href: "/features/offline-tracking" },
  { label: "Diamond Plan", href: "/plans/diamond" },
  { label: "Pricing", href: "/pricing" },
];

export const footerTrustLinks: FooterLink[] = [
  { label: "Sovereign Choice", href: "/sovereign-choice" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms of Service" },
  { label: "Contact Us", href: "/contact-us" },
];

export const comparisonCellIcons = {
  true: CheckCircle2,
  false: X,
};
