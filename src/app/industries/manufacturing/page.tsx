import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ManufacturingHero } from "@/components/sections/industries/manufacturing/ManufacturingHero";
import { ManufacturingChallenges } from "@/components/sections/industries/manufacturing/ManufacturingChallenges";
import { ManufacturingSolutions } from "@/components/sections/industries/manufacturing/ManufacturingSolutions";
import { ManufacturingRoles } from "@/components/sections/industries/manufacturing/ManufacturingRoles";
import { ManufacturingWhyChoose } from "@/components/sections/industries/manufacturing/ManufacturingWhyChoose";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Industry Solutions | HR Talent Solutions",
  description: "Driving operational excellence in manufacturing with skilled workforce solutions and scalable support by HR Talent Solutions.",
};

export default function ManufacturingIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <ManufacturingHero />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Industries", href: "#industries" },
              { label: "Manufacturing", href: "/industries/manufacturing" }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <ManufacturingChallenges />
            <ManufacturingSolutions />
            <ManufacturingRoles />
            <ManufacturingWhyChoose />
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
