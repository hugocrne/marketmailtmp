import React from "react";
import { File, MailCheck, Send } from "lucide-react";
import { Section } from "./Section";
import { Spacing } from "./Spacing";

import { ReactNode } from "react";

const FeaturesSection = ({ children }: { children: ReactNode }) => (
  <Section className="flex flex-col items-center py-8">{children}</Section>
);

const FeaturesContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full flex flex-col items-center">{children}</div>
);

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="w-4/5 max-w-xs p-5 rounded-xl border-2 border-gray-800 m-2 shadow-md text-center transition-all hover:bg-gray-800 hover:text-white">
    <div className="mb-3">
      <Icon size={50} />
    </div>
    <h4 className="text-xl font-bold mb-2 text-gray-500">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <FeaturesSection>
      <FeaturesContainer>
        <p className="text-lg mb-4">Features</p>
        <Spacing size="sm" />
        <div className="flex flex-row gap-4 justify-center max-lg:flex-col">
          <FeatureCard
            icon={MailCheck}
            title="Create Emails"
            description="Create personalized Emails with our creation tool allowing the creation of unique Emails"
          />
          <FeatureCard
            icon={File}
            title="Add a database"
            description="Add a list of Emails to send the message you created earlier"
          />
          <FeatureCard
            icon={Send}
            title="Send mass emails"
            description="Send this email to all your contacts in one click"
          />
        </div>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;
