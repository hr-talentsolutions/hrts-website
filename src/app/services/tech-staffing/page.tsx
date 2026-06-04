import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TechStaffingHero } from "@/components/sections/services/tech-staffing/TechStaffingHero";
import { TechStaffingCapabilities } from "@/components/sections/services/tech-staffing/TechStaffingCapabilities";
import { TechStaffingWhyChoose } from "@/components/sections/services/tech-staffing/TechStaffingWhyChoose";
import { TechStaffingProcess } from "@/components/sections/services/tech-staffing/TechStaffingProcess";
import { TechStaffingBusinessImpact } from "@/components/sections/services/tech-staffing/TechStaffingBusinessImpact";
import { TechStaffingCTA } from "@/components/sections/services/tech-staffing/TechStaffingCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Staffing Services | HR Talent Solutions",
  description: "Accelerate your product and engineering roadmap with top-tier technical talent. Flexible IT recruitment, staffing, and contracting solutions.",
};

export default function TechStaffingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <TechStaffingHero />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/#services" },
              { label: "Tech Staffing", href: "/services/tech-staffing" }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <TechStaffingCapabilities />
            <TechStaffingWhyChoose />
            <TechStaffingProcess />
            <TechStaffingBusinessImpact />
          </div>
        </div>

        <TechStaffingCTA />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
