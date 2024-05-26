import React from "react";
import { CircleCheckBig, CircleOff } from "lucide-react";
import { Section } from "./Section";
import { Spacing } from "./Spacing";
import { Link } from "react-router-dom";

type PricingSectionProps = {
  children: React.ReactNode;
};

const PricingSection = ({ children }: PricingSectionProps) => (
  <Section className="flex flex-col items-center py-8">
    <p className="text-lg mb-4">Pricing</p>
    {children}
  </Section>
);

type PricingContainerProps = {
  children: React.ReactNode;
};

const PricingContainer = ({ children }: PricingContainerProps) => (
  <div className="w-full flex flex-col items-center">{children}</div>
);

const PricingCard = ({
  title,
  price,
  perMonth,
  features,
  unavailableFeatures,
}: {
  title: string;
  price: string;
  perMonth: string;
  features: string[];
  unavailableFeatures: string[];
}) => (
  <div className="flex flex-col items-center p-5 rounded-xl border-2 border-gray-800 m-4 shadow-md transition-all hover:bg-gray-800 hover:text-white text-center">
    <h3 className="text-xl font-bold mb-2 text-gray-500">{title}</h3>
    <h1 className="text-3xl font-bold mb-2">
      {price}
      <span className="text-lg text-muted-foreground">/year</span>
    </h1>
    <p className="text-sm text-muted-foreground mb-2">
      {perMonth}
      <span className="text-xs">/month</span>
    </p>
    <hr className="w-full mb-4" />
    <div className="mb-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center mb-2">
          <CircleCheckBig className="w-6 h-6 mr-2" />
          <span>{feature}</span>
        </div>
      ))}
      {unavailableFeatures.map((feature, index) => (
        <div key={index} className="flex items-center mb-2 text-gray-500">
          <CircleOff className="w-6 h-6 mr-2" />
          <span>
            <s>{feature}</s>
          </span>
        </div>
      ))}
    </div>
    <Link
      to="/Account"
      className="text-gray-400 no-underline px-5 py-2 rounded border-2 border-gray-400"
    >
      Go Account
    </Link>
  </div>
);

const Pricing = () => {
  return (
    <PricingSection>
      <PricingContainer>
        <Spacing size="sm" />
        <div className="flex flex-row gap-4 justify-center flex-wrap">
          <PricingCard
            title="Beginner"
            price="$240"
            perMonth="$20"
            features={[
              "1000 Emails/week",
              "Email Builder Tool",
              "25 Emails max",
            ]}
            unavailableFeatures={["Edge table", "AI assistance"]}
          />
          <PricingCard
            title="Premium"
            price="$600"
            perMonth="$50"
            features={[
              "10000 Emails/week",
              "Email Builder Tool",
              "25 Emails max",
              "Edge table",
            ]}
            unavailableFeatures={["AI assistance"]}
          />
          <PricingCard
            title="Company"
            price="$3600"
            perMonth="$300"
            features={[
              "Unlimited Emails",
              "Email Builder Tool",
              "25 Emails max",
              "Edge table",
              "AI assistance",
            ]}
            unavailableFeatures={[]}
          />
        </div>
      </PricingContainer>
    </PricingSection>
  );
};

export default Pricing;
