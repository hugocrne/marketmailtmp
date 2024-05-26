/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Spacing } from "./Spacing";
import { Link } from "react-router-dom";
import React from "react";

const Title = () => {
  return (
    <Section className="self-center overflow-hidden w-10/12 py-8">
      <div className="flex flex-col gap-16 items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight animate-slideInFromLeft lg:text-5xl">
            Change the way you send emails
          </h1>
          <Spacing size="md" />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full flex justify-center mb-8">
            <p className="text-gray-400 text-lg font-medium animate-slideInFromRight max-lg:text-sm">
              MarketMail is the best way to send emails to your customers. Our
              platform offers the best tools to help you reach your customers.
            </p>
          </div>
          <div className="mt-8 animate-slideInFromLeft">
            <Button className="rounded-2xl px-5 py-6 text-lg font-extrabold hover:scale-110 transition-all">
              <Link to="/Mail" className="flex flex-row gap-2 items-center">
                <ChevronRight />
                <p className="animate-pulse">Get Started</p>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Title;
