export type FamsentryPageId =
  | "home"
  | "features"
  | "privacy"
  | "compare"
  | "faq";

export type NavigationItem = {
  id: FamsentryPageId;
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href?: string;
};
