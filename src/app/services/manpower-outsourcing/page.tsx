import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { CoreServicesGrid } from "@/components/sections/services/CoreServicesGrid";
import { ServiceWhyChoose } from "@/components/sections/services/ServiceWhyChoose";
import { ProcessApproach } from "@/components/sections/services/ProcessApproach";
import { BusinessImpact } from "@/components/sections/services/BusinessImpact";
import { ServiceSidebar } from "@/components/sections/services/ServiceSidebar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manpower Outsourcing Services | HR Talent Solutions",
  description: "Optimize your workforce with HR Talent Solutions' end-to-end manpower outsourcing. We manage recruitment, operations, and compliance for efficiency.",
};

export default function ManpowerOutsourcingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <ServiceHero />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "#services" },
              { label: "Manpower Outsourcing", href: "/services/manpower-outsourcing" }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <CoreServicesGrid />
            <ServiceWhyChoose />
            <ProcessApproach />
            <BusinessImpact />
          </div>
        </div>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
