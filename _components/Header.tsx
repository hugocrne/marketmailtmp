// Header.tsx
import React from "react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { User2 } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Logo = () => {
  return (
    <h1 className="scroll-m-20 my-0.5 font-sans text-2xl font-bold">
      <a href="#">MarketMail</a>
    </h1>
  );
};

const UserButton = () => {
  return (
    <Button className="bg-transparent rounded-2xl border-2 w-auto gap-1 hover:bg-accent/50 text-accent text-white">
      <Link to="/account" className="flex flex-row gap-2 items-center w-auto">
        <User2 />
        <p className="max-lg:hidden text-muted-foreground">Account</p>
      </Link>
    </Button>
  );
};

const Header = () => {
  return (
    <Section>
      <div className="flex sticky flex-row justify-around w-full">
        <div className="flex">
          <Logo />
        </div>
        <div className="flex flex-row gap-2 max-lg:gap-0 justify-between">
          <div className="flex gap-2 w-auto justify-normal">
            <UserButton />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Header;
