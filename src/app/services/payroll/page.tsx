import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PayrollHero } from "@/components/sections/services/payroll/PayrollHero";
import { PayrollCapabilities } from "@/components/sections/services/payroll/PayrollCapabilities";
import { PayrollWhyChoose } from "@/components/sections/services/payroll/PayrollWhyChoose";
import { PayrollProcess } from "@/components/sections/services/payroll/PayrollProcess";
import { PayrollBusinessImpact } from "@/components/sections/services/payroll/PayrollBusinessImpact";
import { PayrollCTA } from "@/components/sections/services/payroll/PayrollCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Services | HR Talent Solutions",
  description: "Accurate, timely, and compliant payroll processing services by HR Talent Solutions. Streamline your salary processing and statutory compliance.",
};

export default function PayrollPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <PayrollHero />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "#services" },
              { label: "Payroll Services", href: "/services/payroll" }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <PayrollCapabilities />
            <PayrollWhyChoose />
            <PayrollProcess />
            <PayrollBusinessImpact />
          </div>
        </div>

        <PayrollCTA />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
