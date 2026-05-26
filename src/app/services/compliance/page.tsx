import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ComplianceHero } from "@/components/sections/services/compliance/ComplianceHero";
import { ComplianceCapabilities } from "@/components/sections/services/compliance/ComplianceCapabilities";
import { ComplianceWhyChoose } from "@/components/sections/services/compliance/ComplianceWhyChoose";
import { ComplianceProcess } from "@/components/sections/services/compliance/ComplianceProcess";
import { ComplianceBusinessImpact } from "@/components/sections/services/compliance/ComplianceBusinessImpact";
import { ComplianceCTA } from "@/components/sections/services/compliance/ComplianceCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Services | HR Talent Solutions",
  description: "Reliable and structured compliance solutions by HR Talent Solutions. Minimize risks and ensure statutory adherence for your workforce.",
};

export default function CompliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <ComplianceHero />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "#services" },
              { label: "Compliance Services", href: "/services/compliance" }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <ComplianceCapabilities />
            <ComplianceWhyChoose />
            <ComplianceProcess />
            <ComplianceBusinessImpact />
          </div>
        </div>

        <ComplianceCTA />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
