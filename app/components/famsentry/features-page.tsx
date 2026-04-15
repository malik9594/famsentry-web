import { featureCards } from "./data";
import FeatureCard from "./feature-card";
import SectionHeading from "./section-heading";

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <SectionHeading subtitle="Built for high accuracy and total privacy.">
        Complete Family Safety Features
      </SectionHeading>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
