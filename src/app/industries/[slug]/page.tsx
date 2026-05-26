import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";
import { INDUSTRIES_DATA } from "@/data/industries";
import { IndustryHero } from "@/components/sections/industries/dynamic/IndustryHero";
import { IndustryChallenges } from "@/components/sections/industries/dynamic/IndustryChallenges";
import { IndustrySolutions } from "@/components/sections/industries/dynamic/IndustrySolutions";
import { IndustryRoles } from "@/components/sections/industries/dynamic/IndustryRoles";
import { IndustryWhyChoose } from "@/components/sections/industries/dynamic/IndustryWhyChoose";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = INDUSTRIES_DATA.find((i) => i.slug === params.slug);
  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.name} Industry Solutions | HR Talent Solutions`,
    description: industry.shortDesc,
  };
}

export default function DynamicIndustryPage({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES_DATA.find((i) => i.slug === params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-8">
        <IndustryHero 
          name={industry.name} 
          description={industry.description} 
          iconName={industry.iconName} 
        />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Breadcrumbs 
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.name, href: `/industries/${industry.slug}` }
            ]} 
          />
          
          <div className="space-y-24 mt-8">
            <IndustryChallenges name={industry.name} challenges={industry.challenges} />
            <IndustrySolutions name={industry.name} solutions={industry.solutions} />
            <IndustryRoles roles={industry.roles} />
            <IndustryWhyChoose />
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

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    slug: industry.slug,
  }));
}
