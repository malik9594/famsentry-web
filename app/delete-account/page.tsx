import type { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import DeleteAccountPage from "@/app/components/famsentry/delete-account-page";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Delete Account | FamSentry",
  description:
    "Learn how to permanently delete your FamSentry account from the app in a few steps.",
};

export default function DeleteAccountRoute() {
  return (
    <FamsentrySiteShell>
      <DeleteAccountPage />
    </FamsentrySiteShell>
  );
}
