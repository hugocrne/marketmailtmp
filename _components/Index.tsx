// Index.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import { Spacing } from "./Spacing";

import Features from "./Features";
import Contact from "./Contact";
import Pricing from "./Pricing";

const Index = () => {
  return (
    <main>
      <Outlet />
      <Header />
      <Spacing size="md" />
      <Title />
      <Spacing size="md" />
      <Features />
      <Spacing size="md" />
      <Pricing />
      <Spacing size="md" />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
