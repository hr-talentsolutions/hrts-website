import React, { Suspense } from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import OverviewContent from "./OverviewContent";

export const metadata: Metadata = {
  title: "Investor Documents & Downloads | HRTS",
  description: "Download key investor relations documents including annual reports, investor presentations, MOA, AOA, COI, and governance charters.",
};

export default function OverviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <Suspense fallback={
          <div className="max-w-7xl mx-auto px-6 py-20 text-center text-text-sub font-semibold text-lg">
            Loading Documents...
          </div>
        }>
          <OverviewContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
