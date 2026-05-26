import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutTeamVision } from "@/components/sections/about/AboutTeamVision";
import { AboutStats } from "@/components/sections/about/AboutStats";
import { AboutManagement } from "@/components/sections/about/AboutManagement";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutWhyChoose } from "@/components/sections/about/AboutWhyChoose";
import { AboutProcess } from "@/components/sections/about/AboutProcess";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | HR Talent Solutions",
  description: "Learn more about HR Talent Solutions, our vision, mission, and the leadership driving our success in the recruitment and talent management industry.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <AboutTeamVision />
        <AboutStats />
        <AboutManagement />
        <AboutValues />
        <AboutWhyChoose />
        <AboutProcess />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
