const policySections = [
  {
    title: "1. Information we collect",
    content: (
      <>
        <p>We collect information needed to provide FamSentry, a family safety and location-sharing service. Depending on the features you use, this may include:</p>
        <ul>
          <li>Account information such as your name, email address, phone number, and password credentials.</li>
          <li>Family-group information, invitations, roles, permissions, and safety-zone settings.</li>
          <li>Precise device location, location timestamps, routes, location history, and safety-zone events when you enable location sharing.</li>
          <li>Motion or activity information, such as walking, cycling, driving, or being stationary, when you enable activity features.</li>
          <li>Device and technical information such as device model, operating system, app version, IP address, push-notification token, battery level, connectivity status, and diagnostic logs.</li>
          <li>Profile photos or other files that you choose to upload.</li>
          <li>Messages and information you provide when you contact support.</li>
          <li>Subscription and transaction information processed through the applicable app store or payment provider.</li>
        </ul>
        <p>We do not access your entire photo library merely because you choose one photo. We access only the photo or file you select through the device controls.</p>
      </>
    ),
  },
  {
    title: "2. How we use information",
    content: (
      <>
        <p>We use information to:</p>
        <ul>
          <li>Create and secure accounts and family groups.</li>
          <li>Provide location sharing, location history, maps, activity information, safety zones, and alerts you request.</li>
          <li>Show authorized family members the information you choose to share.</li>
          <li>Send service, safety, account, and push notifications.</li>
          <li>Process subscriptions and provide customer support.</li>
          <li>Maintain, troubleshoot, and improve the service; detect fraud, abuse, and security incidents; and comply with law.</li>
        </ul>
        <p>FamSentry does not sell personal information, does not use precise location for targeted advertising, and does not use personal information for cross-context behavioral advertising.</p>
      </>
    ),
  },
  {
    title: "3. Location and background access",
    content: (
      <>
        <p>Location sharing is permission-based. It starts only after you enable the relevant feature and grant the device permission requested by the app. Background location is optional and is used to support continuous sharing, location history, and safety-zone alerts when the app is not visible on screen.</p>
        <p>You can stop continuous sharing in the app under Settings → Location &amp; Permissions → Continuous Location Sharing. You can also change permissions in your device settings. Turning off a permission may disable the related feature.</p>
      </>
    ),
  },
  {
    title: "4. How we share information",
    content: (
      <>
        <p>Information you choose to share may be visible to the family members and groups you authorize. Depending on your settings, this may include your name, profile photo, current or last-known location, location history, activity status, battery level, online status, and safety-zone events. Invite only people you know and trust.</p>
        <p>We may share information with service providers that process it on our behalf, including hosting, databases, backups, security, email, notifications, maps or place-name services, customer support, and payment providers. These providers may receive only the information needed to perform their services and must protect it appropriately.</p>
        <p>We may also disclose information when reasonably necessary to comply with law, respond to valid legal process, protect safety, investigate fraud or abuse, or support a merger, acquisition, financing, or sale of assets.</p>
      </>
    ),
  },
  {
    title: "5. Retention",
    content: <p>We keep personal information only for as long as needed to provide the service, meet the purposes described here, resolve disputes, prevent abuse, enforce agreements, and satisfy legal obligations. Location and activity history are retained according to the plan and settings shown in the app. When you delete your account, we delete associated personal information from active systems within 30 days. Protected backups may retain copies for up to 90 additional days before they are overwritten. Information that must be kept by law may be retained for the required period and then securely deleted.</p>,
  },
  {
    title: "6. Account and data deletion",
    content: (
      <>
        <p>You can request deletion in the app under Settings → Account → Delete Account. You can also use our public deletion page at <a href="/delete-account">/delete-account</a> or email <a href="mailto:hi@mapifyit.com">hi@mapifyit.com</a> with the subject “Account deletion request”.</p>
        <p>We may verify ownership of the account before processing a request. Deleting the app from your device does not delete your account. Deletion removes account-linked profile, family membership, location, activity, safety-zone, and device data, except information we must retain by law or for legitimate security and legal purposes.</p>
      </>
    ),
  },
  {
    title: "7. Your choices and privacy rights",
    content: <p>Depending on where you live, you may have rights to access, correct, delete, or receive a copy of your information; restrict or object to certain processing; withdraw consent; and appeal a privacy decision. Contact <a href="mailto:hi@mapifyit.com">hi@mapifyit.com</a> to make a request. We may ask for information needed to verify your identity. You may also complain to your local data-protection authority. We do not discriminate against you for exercising a privacy right.</p>,
  },
  {
    title: "8. Children and family accounts",
    content: <p>FamSentry is designed for family use. A parent or legal guardian must create or authorize a family account and must provide any consent required before information about a minor is collected. FamSentry is not intended for a child to independently create or administer an account. Parents or guardians may contact us at <a href="mailto:hi@mapifyit.com">hi@mapifyit.com</a> to request access, correction, or deletion of a minor’s information. If we learn that information was collected without required authorization, we will take appropriate steps, including deletion where required.</p>,
  },
  {
    title: "9. Security and international transfers",
    content: <p>We use safeguards designed to protect information, including HTTPS/TLS, authentication and access controls, restricted administrative access, logging, monitoring, and service-provider security requirements. No system is completely secure. FamSentry and its service providers may process information in countries other than where you live. Where required, we use appropriate legal safeguards for those transfers.</p>,
  },
  {
    title: "10. Changes and contact",
    content: (
      <>
        <p>We may update this policy when our services or legal obligations change. We will publish the new version at <a href="https://famsentry.com/privacy">famsentry.com/privacy</a> and update the date below. If a change requires additional notice or consent, we will provide it through the app or another appropriate method.</p>
        <address className="not-italic"><strong>FamSentry Inc.</strong><br />Office #9100 Southwest Fwy<br />Houston, TX 77074, USA<br />Privacy and support: <a href="mailto:hi@mapifyit.com">hi@mapifyit.com</a></address>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="mb-8 text-3xl font-bold text-blue-600 md:text-5xl">
        Privacy-First Location Tracking
      </h1>
      <p className="mb-3 text-xl leading-relaxed text-slate-500">
        FamSentry is fundamentally different from apps like Google Maps. We
        prioritize your sovereignty over your data.
      </p>
      <p className="mb-16 text-sm text-slate-400">
        Effective date: November 11, 2026 · Last updated: November 11, 2026
      </p>

      <div className="space-y-16 text-base leading-8 text-slate-600 [&_a]:font-medium [&_a]:text-blue-600 [&_a]:underline [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_li]:ml-5 [&_li]:list-disc [&_ul]:my-4 [&_ul]:space-y-2">
        {policySections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <div className="space-y-4">{section.content}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
