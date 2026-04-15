"use client";

import { useState } from "react";
import ComparisonPage from "./comparison-page";
import FeaturesPage from "./features-page";
import FAQPage from "./faq-page";
import HomePage from "./home-page";
import MobileMenu from "./mobile-menu";
import PrivacyPage from "./privacy-page";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import type { FamsentryPageId } from "./types";

export default function FamSentryApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<FamsentryPageId>("home");

  const handleSelectPage = (page: FamsentryPageId) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-[#1e293b] selection:bg-blue-100 selection:text-blue-900">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-slate-200 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <SiteHeader
          currentPage={currentPage}
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((open) => !open)}
          onSelectPage={handleSelectPage}
        />

        {isMenuOpen ? (
          <MobileMenu
            currentPage={currentPage}
            onSelectPage={handleSelectPage}
          />
        ) : null}

        <main className="relative z-10">
          {currentPage === "home" ? (
            <HomePage onSelectPage={handleSelectPage} />
          ) : null}
          {currentPage === "features" ? <FeaturesPage /> : null}
          {currentPage === "privacy" ? <PrivacyPage /> : null}
          {currentPage === "compare" ? <ComparisonPage /> : null}
          {currentPage === "faq" ? <FAQPage /> : null}
        </main>

        <SiteFooter onSelectPage={handleSelectPage} />
      </div>
    </div>
  );
}
