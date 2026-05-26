import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RpoHero } from "@/components/sections/services/rpo/RpoHero";
import { RpoCapabilities } from "@/components/sections/services/rpo/RpoCapabilities";
import { RpoWhyChoose } from "@/components/sections/services/rpo/RpoWhyChoose";
import { RpoProcess } from "@/components/sections/services/rpo/RpoProcess";
import { RpoBusinessImpact } from "@/components/sections/services/rpo/RpoBusinessImpact";
import { ServiceSidebar } from "@/components/sections/services/ServiceSidebar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RPO Services | HR Talent Solutions",
  description: "Scalable, data-driven Recruitment Process Outsourcing (RPO) solutions to enhance talent quality, reduce time-to-hire, and optimize recruitment costs.",
};

export default function RpoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <RpoHero />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "#services" },
              { label: "RPO", href: "/services/rpo" }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <RpoCapabilities />
            <RpoWhyChoose />
            <RpoProcess />
            <RpoBusinessImpact />
          </div>
        </div>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
