import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StaffingHero } from "@/components/sections/services/staffing/StaffingHero";
import { StaffingCapabilities } from "@/components/sections/services/staffing/StaffingCapabilities";
import { StaffingWhyChoose } from "@/components/sections/services/staffing/StaffingWhyChoose";
import { StaffingProcess } from "@/components/sections/services/staffing/StaffingProcess";
import { StaffingBusinessImpact } from "@/components/sections/services/staffing/StaffingBusinessImpact";
import { StaffingCTA } from "@/components/sections/services/staffing/StaffingCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staffing Services | HR Talent Solutions",
  description: "Efficiently hire the right talent across roles, industries, and employment types with HR Talent Solutions' flexible staffing solutions.",
};

export default function StaffingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <StaffingHero />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "#services" },
              { label: "Staffing Services", href: "/services/staffing" }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <StaffingCapabilities />
            <StaffingWhyChoose />
            <StaffingProcess />
            <StaffingBusinessImpact />
          </div>
        </div>

        <StaffingCTA />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
