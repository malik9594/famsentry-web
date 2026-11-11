const deleteAccountSteps = [
  "Open FamSentry and sign in.",
  "Open the Settings tab.",
  "Select Account or Account Details.",
  "Scroll to the bottom of the page.",
  'Tap the red "Delete Account" button.',
  'A confirmation dialog titled “Delete this account?” appears.',
  "Review the permanent-deletion warning.",
  'Tap "Delete Account" again to confirm.',
  "After deletion completes, the app signs you out and returns you to the Login screen.",
];

export default function DeleteAccountPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h1 className="mb-6 text-3xl font-bold text-blue-600 md:text-5xl">
        Delete Account
      </h1>
      <p className="mb-10 text-xl leading-relaxed text-slate-500">
        Follow these steps to permanently remove your FamSentry account from the app:
      </p>

      <ol className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        {deleteAccountSteps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-4 text-slate-700"
          >
            <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
              {index + 1}
            </span>
            <span className="text-base leading-relaxed text-slate-700">{step}</span>
          </li>
        ))}
      </ol>

      <p className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 leading-relaxed text-slate-700 md:p-8">
        You can select <strong>Keep My Account</strong> in the confirmation
        dialog to cancel the deletion request.
      </p>

      <div className="mt-8 space-y-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-slate-700 md:p-8">
        <h2 className="text-xl font-bold text-slate-900">Can’t access the app?</h2>
        <p className="leading-relaxed">
          Email <a className="font-semibold text-blue-700 underline" href="mailto:hi@mapifyit.com?subject=Account%20deletion%20request">hi@mapifyit.com</a> with the subject “Account deletion request”. Include the email address on the account so we can verify ownership.
        </p>
        <p className="leading-relaxed">
          After verification, we delete account-linked personal information from active systems within 30 days. Protected backups may be overwritten within 90 additional days. Deleting the app alone does not delete your account.
        </p>
      </div>
    </div>
  );
}
