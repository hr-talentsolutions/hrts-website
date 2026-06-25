import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
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
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-sm group"
                >
                  <Icon size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-black text-lg mb-8 tracking-tight text-white">Our Services</h4>
            <ul className="space-y-4 text-white/50 text-sm font-bold">
              <li><Link href="/services/talent-acquisition" className="hover:text-white hover:pl-2 transition-all">Talent Acquisition</Link></li>
              <li><Link href="/services/staffing" className="hover:text-white hover:pl-2 transition-all">Staffing Solutions</Link></li>
              <li><Link href="/services/tech-staffing" className="hover:text-white hover:pl-2 transition-all">Tech Staffing</Link></li>
              <li><Link href="/services/payroll" className="hover:text-white hover:pl-2 transition-all">Payroll Management</Link></li>
              <li><Link href="/services/compliance" className="hover:text-white hover:pl-2 transition-all">Compliance Services</Link></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="font-black text-lg mb-8 tracking-tight text-white">Industries</h4>
            <ul className="space-y-4 text-white/50 text-sm font-bold">
              <li><Link href="#industries" className="hover:text-white hover:pl-2 transition-all">Technology & IT</Link></li>
              <li><Link href="#industries" className="hover:text-white hover:pl-2 transition-all">BFSI & Fintech</Link></li>
              <li><Link href="#industries" className="hover:text-white hover:pl-2 transition-all">Healthcare & Pharma</Link></li>
              <li><Link href="#industries" className="hover:text-white hover:pl-2 transition-all">Logistics & FMCG</Link></li>
              <li><Link href="#industries" className="hover:text-white hover:pl-2 transition-all">Manufacturing</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="font-black text-lg mb-8 tracking-tight text-white">Contact Us</h4>
            <ul className="space-y-5 text-white/50 text-sm font-bold">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1 opacity-100 font-normal italic">📞</span>
                <span>+91 7569067002</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1 opacity-100 font-normal italic">✉️</span>
                <span className="break-all">info@hrtalentsolutions.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1 opacity-100 font-normal italic">📍</span>
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} HR Talent Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
