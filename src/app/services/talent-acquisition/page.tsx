import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TaHero } from "@/components/sections/services/ta/TaHero";
import { TaCapabilities } from "@/components/sections/services/ta/TaCapabilities";
import { TaWhyChoose } from "@/components/sections/services/ta/TaWhyChoose";
import { TaProcess } from "@/components/sections/services/ta/TaProcess";
import { TaBusinessImpact } from "@/components/sections/services/ta/TaBusinessImpact";
import { TaCTA } from "@/components/sections/services/ta/TaCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Acquisition Services | HR Talent Solutions",
  description: "Identify and hire the right talent with HR Talent Solutions. We combine industry expertise and advanced sourcing to drive your business growth.",
};

export default function TalentAcquisitionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <TaHero />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "#services" },
              { label: "Talent Acquisition", href: "/services/talent-acquisition" }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <TaCapabilities />
            <TaWhyChoose />
            <TaProcess />
            <TaBusinessImpact />
          </div>
        </div>

        <TaCTA />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
