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
    title: "Independent Mapping Infrastructure",
    description:
      "FamSentry processes all location data within its own private infrastructure. We never rely on third-party mapping APIs that could track or log your movements.",
  },
  {
    title: "No Data Monetization",
    description:
      "Your personal data is never sold, shared, or used for advertising. FamSentry operates on a subscription-based model, ensuring privacy is at the core of our business.",
  },
  {
    title: "User-Controlled Access",
    description:
      "Only you and the family members or groups you authorize can access your location data. Even FamSentry engineers cannot view your paths without explicit consent.",
  },
  {
    title: "Zero-Knowledge Encryption",
    description:
      "All stored location history is protected with zero-knowledge encryption, meaning only you hold the keys to decrypt your data.",
  },
  {
    title: "Enterprise-Grade Privacy Options",
    description:
      "Organizations and families requiring maximum control can opt for on-premise deployment, ensuring complete ownership of their data environment.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "FamSentry adheres to global privacy standards, including GDPR and CCPA, giving you confidence that your data is handled responsibly.",
  },
  {
    title: "Transparency & Accountability",
    description:
      "We provide clear privacy policies and regular audits to ensure our practices remain aligned with our promise of protecting your personal information.",
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

export const famsentryAdvantages = [
  {
    title: "100% Data Sovereignty",
    description:
      "We own our mapping infrastructure. No third-party APIs handle your data.",
    className: "bg-blue-600 text-white shadow-xl",
    items: [
      "Independent mapping stack",
      "No external map requests",
      "Private server routing",
    ],
  },
  {
    title: "Absolute Privacy",
    description:
      "Your personal data is never sold, shared, or monetized for ads.",
    className: "bg-slate-900 text-white",
    items: [
      "No data selling",
      "Zero-knowledge architecture",
      "No ad-based monetization",
    ],
  },
  {
    title: "Cross-Platform Control",
    description:
      "A unified experience that works perfectly whether you're on Android or iOS.",
    className: "bg-slate-100 text-slate-900",
    items: [
      "Android and iOS parity",
      "Seamless group syncing",
      "Universal dashboard access",
    ],
  },
];

export const famsentryFeaturesList = [
  { feature: "Ad-Free Experience", famsentry: true },
  { feature: "Independent Mapping", famsentry: true },
  { feature: "No Data Monetization", famsentry: true },
  { feature: "Enterprise Options", famsentry: true },
  { feature: "Cross-Platform Parity", famsentry: true },
  { feature: "Detailed History Logs", famsentry: true },
  { feature: "Advanced Driving Stats", famsentry: true },
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
  // { label: "Offline Tracking", href: "/features/offline-tracking" },
  // { label: "Diamond Plan", href: "/plans/diamond" },
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
