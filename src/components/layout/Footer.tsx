import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const FOOTER_SERVICES = [
  { name: "Manpower Outsourcing", href: "/services/manpower-outsourcing" },
  { name: "RPO", href: "/services/rpo" },
  { name: "Talent Acquisition", href: "/services/talent-acquisition" },
  { name: "Staffing", href: "/services/staffing" },
  { name: "Tech Staffing", href: "/services/tech-staffing" },
  { name: "Payroll", href: "/services/payroll" },
  { name: "Compliance", href: "/services/compliance" },
];

const FOOTER_INDUSTRIES = [
  { name: "BFSI", href: "/industries/bfsi" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Technology & IT", href: "/industries/technology-it" },
  { name: "Healthcare & Pharma", href: "/industries/healthcare-pharma" },
  { name: "Telecom", href: "/industries/telecom" },
  { name: "E-Commerce", href: "/industries/e-commerce" },
  { name: "Education", href: "/industries/education" },
  { name: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain" },
  { name: "Media & Entertainment", href: "/industries/media-entertainment" },
  { name: "FMCG / FMCD / Retail", href: "/industries/fmcg-fmcd-retail" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-white px-5 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Image
                src="/logo.png"
                alt="HR Talent Solutions"
                width={280}
                height={90}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 max-w-sm mb-10 text-base leading-relaxed font-medium">
              India's leading workforce solutions partner, transforming business growth through elite talent acquisition, statutory compliance, and strategic HR management.
            </p>
            <div className="flex gap-5">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583921061860" },
                { Icon: Twitter, href: "https://x.com/hrts_pvt_ltd" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/hr-talent-solutions-pvt-ltd/" },
                { Icon: Instagram, href: "https://www.instagram.com/hrtalentsolutions.in/" }
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 shadow-sm transition-all hover:bg-white hover:text-primary sm:h-12 sm:w-12"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-lg font-black tracking-tight text-white">Our Services</h4>
            <ul className="space-y-3 text-sm font-bold text-white/60">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="inline-block transition-all hover:translate-x-1 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-lg font-black tracking-tight text-white">Industries</h4>
            <ul className="space-y-3 text-sm font-bold text-white/60">
              {FOOTER_INDUSTRIES.map((industry) => (
                <li key={industry.href}>
                  <Link
                    href={industry.href}
                    className="inline-block transition-all hover:translate-x-1 hover:text-white"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-4">
            <h4 className="mb-6 text-lg font-black tracking-tight text-white">Contact Us</h4>
            <ul className="space-y-5 text-sm font-bold leading-relaxed text-white/70">
              <li>
                <a
                  href="tel:+917569067002"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 shrink-0 text-white" size={18} />
                  <span>+91 7569067002</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hrtalentsolutions.in"
                  className="flex min-w-0 items-start gap-3 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 shrink-0 text-white" size={18} />
                  <span className="min-w-0 break-words">
                    info@hrtalentsolutions.in
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-white" size={18} />
                <address className="min-w-0 break-words not-italic">
                  1st Floor, Finecab Chambers, 1-8-229/2 &amp; 2/A, PG Road,
                  beside Union Bank Of India, Sindhi Colony, Begumpet,
                  Secunderabad, Hyderabad, Telangana 500003
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center text-xs text-white/50 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} HR Talent Solutions. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-end">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
