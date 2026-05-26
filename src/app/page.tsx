import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { StatsSection } from "@/components/sections/StatsSection";
import { HRLifecycle } from "@/components/sections/HRLifecycle";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClientStrip />
        <StatsSection />
        <WhyChoose />
        <HRLifecycle />
        <ServicesSection />
        <IndustriesGrid />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
