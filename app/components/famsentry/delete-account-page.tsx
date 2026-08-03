const deleteAccountSteps = [
  "Log in to the app with your credentials.",
  "Tap on the settings gear icon on the home screen.",
  'Navigate to the "Account" screen from the listed options.',
  'Tap on the "Delete Account" button.',
  "Confirm deletion.",
];

export default function DeleteAccountPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h1 className="mb-6 text-3xl font-bold text-blue-600 md:text-5xl">
        Delete Account
      </h1>
      <p className="mb-10 text-xl leading-relaxed text-slate-500">
        Follow these steps to permanently remove your FamSentry account:
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
    </div>
  );
}
