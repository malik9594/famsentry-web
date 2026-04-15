import { brandIcon as BrandIcon } from "./data";
import {
  footerPlatformLinks,
  footerSocialIcons,
  footerTrustLinks,
} from "./data";
import type { FamsentryPageId } from "./types";

type SiteFooterProps = {
  onSelectPage: (page: FamsentryPageId) => void;
};

export default function SiteFooter({ onSelectPage }: SiteFooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="col-span-2">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-lg bg-blue-600 p-1.5 shadow-lg shadow-blue-200">
              <BrandIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-black text-slate-900">
              famsentry.com
            </span>
          </div>
          <p className="mb-6 max-w-sm leading-relaxed text-slate-500">
            Independent, private, and secure family safety for the modern age.
            No ads, no selling data, no compromises.
          </p>
          <div className="flex gap-4">
            {footerSocialIcons.map((Icon) => (
              <button
                key={Icon.displayName ?? Icon.name}
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-colors hover:text-blue-600"
                aria-label={Icon.displayName ?? Icon.name}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-slate-900">
            Platform
          </h4>
          <div className="space-y-3 text-sm font-medium text-slate-500">
            {footerPlatformLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={
                  link.page
                    ? () => {
                        if (link.page) {
                          onSelectPage(link.page);
                        }
                      }
                    : undefined
                }
                className="block text-left transition-colors hover:text-blue-600"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-slate-900">
            Trust
          </h4>
          <div className="space-y-3 text-sm font-medium text-slate-500">
            {footerTrustLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={
                  link.page
                    ? () => {
                        if (link.page) {
                          onSelectPage(link.page);
                        }
                      }
                    : undefined
                }
                className="block text-left transition-colors hover:text-blue-600"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs font-bold text-slate-400 md:flex-row">
        <span>© 2026 FAMSENTRY INC. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-8">
          <span>SECURE INFRASTRUCTURE</span>
          <span>PRIVATE GEOLOCATION STACK</span>
        </div>
      </div>
    </footer>
  );
}
