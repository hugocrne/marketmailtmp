"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mail from "./_components/Mail";
import Account from "./_components/Account";
import Index from "./_components/Index";
import Pricing from "./_components/Pricing";

export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Mail" element={<Mail />} />
          <Route path="/Buy" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
