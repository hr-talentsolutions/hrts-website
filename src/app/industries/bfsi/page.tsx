import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BfsiHero } from "@/components/sections/industries/bfsi/BfsiHero";
import { BfsiChallenges } from "@/components/sections/industries/bfsi/BfsiChallenges";
import { BfsiSolutions } from "@/components/sections/industries/bfsi/BfsiSolutions";
import { BfsiRoles } from "@/components/sections/industries/bfsi/BfsiRoles";
import { BfsiWhyChoose } from "@/components/sections/industries/bfsi/BfsiWhyChoose";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BFSI Industry Solutions | HR Talent Solutions",
  description: "Empowering the Banking, Financial Services & Insurance (BFSI) sector with scalable, compliant, and high-performance workforce solutions.",
};

export default function BfsiIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <BfsiHero />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Industries", href: "#industries" },
              { label: "BFSI", href: "/industries/bfsi" }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <BfsiChallenges />
            <BfsiSolutions />
            <BfsiRoles />
            <BfsiWhyChoose />
          </div>
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
