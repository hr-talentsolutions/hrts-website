"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FileText, Calendar, Download, ArrowLeft, Shield } from "lucide-react";

const POLICIES = [
  { name: "Archival and Preservation of Document Policy", date: "Apr 2025", size: "796 KB", path: "/policies/Archival_and_Preservation_of_Document_Policy_copy.pdf" },
  { name: "CSR Policy", date: "Jan 2025", size: "185 KB", path: "/policies/CSR_Policy.pdf" },
  { name: "Code of Conduct for Directors and Senior Management", date: "Jan 2025", size: "1.3 MB", path: "/policies/Code-of-Conduct-for-Directors-and-Senior-Management.pdf" },
  { name: "Code of Fair Disclosure", date: "Jan 2025", size: "762 KB", path: "/policies/Code_of_Fair_Disclosure.pdf" },
  { name: "Code of Practices and Procedure for Fair Disclosure of Unpublished Price Sensitive Information", date: "Jan 2025", size: "766 KB", path: "/policies/Code_of_Practices_and_Procedure_for_Fair_Disclosure_of_Unpublished_Price_Sensitive_Information.pdf" },
  { name: "Criteria of Making Payments to Non Executive", date: "Jan 2025", size: "739 KB", path: "/policies/Criteria_of_Making_Payments_to_Non_Executive.pdf" },
  { name: "Dividend Policy", date: "Jan 2025", size: "210 KB", path: "/policies/Dividend_Policy.pdf" },
  { name: "Familiarization Program for Independent Directors", date: "Jan 2025", size: "129 KB", path: "/policies/Familiarization_Program_for_Independent_Directors.pdf" },
  { name: "Health Safety and Environment Policy", date: "Jan 2025", size: "165 KB", path: "/policies/Health_Safety_and_Environment_Policy.pdf" },
  { name: "Internal Procedures and Conduct for Prevention of Insider Trading", date: "Jan 2025", size: "212 KB", path: "/policies/Internal_Procedures_and_Conduct _for_Prevention_of_Insider_Trading.pdf" },
  { name: "Nomination and Remuneration Policy", date: "Jan 2025", size: "206 KB", path: "/policies/Nomination_and_Remuneration_Policy.pdf" },
  { name: "P16 Succession Policy", date: "Jan 2025", size: "158 KB", path: "/policies/P16_Succession_Policy_D.pdf" },
  { name: "P8 Policy on Evaluation of Board and Independent Directors", date: "Jan 2025", size: "225 KB", path: "/policies/P8_Policy_on_Evaluation_of_Board_and_Independent_Directors_.pdf" },
  { name: "Policy for Determination of Materiality of Related Party Transactions", date: "Jan 2025", size: "739 KB", path: "/policies/Policy_for _Determination_of_Materiality_of_Related_Party_Transactions.pdf" },
  { name: "Policy for Determination of Material Events and Disclosure", date: "Jan 2025", size: "1.0 MB", path: "/policies/Policy_for_Determination_of_Material_Events_and_Disclosure.pdf" },
  { name: "Policy on Diversity on Board", date: "Jan 2025", size: "231 KB", path: "/policies/Policy_on_Diversity_on_Board.pdf" },
  { name: "Policy on Evaluation of Board and Independent Directors", date: "Jan 2025", size: "348 KB", path: "/policies/Policy_on_Evaluation_of_Board_and_Independent_Directors.pdf" },
  { name: "Policy on Identification of Group Companies", date: "Jan 2025", size: "159 KB", path: "/policies/Policy_on_Identification_of_Group_Companies.pdf" },
  { name: "Policy on Identification of Material Creditors and Material Litigations", date: "Jan 2025", size: "1.2 MB", path: "/policies/Policy on Identification of Material Creditors and Material Litigations_.pdf" },
  { name: "Policy on Prevention of Sexual Harassment at Workplace", date: "Jan 2025", size: "1.0 MB", path: "/policies/Policy on Prevention of Sexual Harrasment at Workplace_.pdf" },
  { name: "Policy for Determining Material Subsidiary", date: "Jan 2025", size: "150 KB", path: "/policies/olicy_for_determining_Material_Subsidiary.pdf" },
  { name: "Whistle Blower Policy", date: "Jan 2025", size: "992 KB", path: "/policies/Whistle Blower Policy_.pdf" },
];

const STATUTORY = [
  { name: "Memorandum of Association (MOA)", date: "Corporate Charter", size: "1.4 MB", path: "/downloads/HRTS_MOA.pdf" },
  { name: "Articles of Association (AOA)", date: "Corporate Rules", size: "1.6 MB", path: "/downloads/HRTS_AOA.pdf" },
  { name: "Certificate of Incorporation (COI)", date: "Certificate", size: "450 KB", path: "/downloads/Incorporation.pdf" },
];

const ANNUAL_REPORTS = [
  { name: "Annual Report FY 2024–25", date: "FY 2024–25", size: "5.5 MB", path: "/Annual Reports/Audit report FY 24-25.pdf" },
  { name: "Annual Report FY 2023–24", date: "FY 2023–24", size: "6.6 MB", path: "/Annual Reports/Audit report FY 23-24.pdf" },
  { name: "Annual Report FY 2022–23", date: "FY 2022–23", size: "5.1 MB", path: "/Annual Reports/Audit Report FY 22-23.pdf" },
  { name: "Annual Report FY 2021–22", date: "FY 2021–22", size: "6.6 MB", path: "/Annual Reports/Audit Report FY 21-22.pdf" },
  { name: "Annual Report FY 2020–21", date: "FY 2020–21", size: "12.6 MB", path: "/Annual Reports/Audit Report FY 20-21.pdf" },
];

const ANNUAL_RETURNS = [
  { name: "Annual Return FY 2024–25", date: "FY 2024–25", size: "1.1 MB", path: "/Annual Returns/MGT 7 FY 2024-25.pdf" },
  { name: "Annual Return FY 2023–24", date: "FY 2023–24", size: "4.8 MB", path: "/Annual Returns/MGT_7 FY 2023-24.pdf" },
  { name: "Annual Return FY 2022–23", date: "FY 2022–23", size: "4.3 MB", path: "/Annual Returns/MGT_7 FY 2022-23.pdf" },
  { name: "Annual Return FY 2021–22", date: "FY 2021–22", size: "3.1 MB", path: "/Annual Returns/MGT_7 FY 2021-22.pdf" },
  { name: "Annual Return FY 2020–21", date: "FY 2020–21", size: "1.6 MB", path: "/Annual Returns/MGT_7 FY 2020-21.pdf" },
];

const SECTIONS = [
  {
    id: "sec-annual-reports",
    title: "Annual Reports",
    docs: ANNUAL_REPORTS,
    isPolicy: false,
  },
  {
    id: "sec-annual-returns",
    title: "Annual Returns",
    docs: ANNUAL_RETURNS,
    isPolicy: false,
  },
  {
    id: "sec-policies",
    title: "Policies",
    docs: POLICIES,
    isPolicy: true,
  },
  {
    id: "sec-corporate",
    title: "Statutory Corporate Documents",
    docs: STATUTORY,
    isPolicy: false,
  },
];

export default function OverviewContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    if (tab) {
      let targetId = "";
      if (
        tab === "policies" ||
        tab === "financials" ||
        tab === "announcements" ||
        tab === "governance" ||
        tab === "shareholder"
      ) {
        targetId = "sec-policies";
      } else if (tab === "annual-reports") {
        targetId = "sec-annual-reports";
      } else if (tab === "annual-returns") {
        targetId = "sec-annual-returns";
      } else if (tab === "documents") {
        targetId = "sec-corporate";
      }

      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            element.classList.add("text-primary");
            setTimeout(() => {
              element.classList.remove("text-primary");
            }, 1500);
          }, 300);
        }
      }
    }
  }, [tab]);

  return (
    <div>
      {/* Banner / Header */}
      <section className="relative py-16 bg-gradient-to-br from-[#002f6c] to-[#0b1b3d] text-white overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl -z-10 -translate-x-1/4 translate-y-1/4" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <Link
            href="/investors"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold text-slate-300 hover:text-white border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-all hover:-translate-x-0.5"
          >
            <ArrowLeft size={14} />
            Back to Investors
          </Link>

          <h1 className="font-display font-black text-4xl lg:text-5xl uppercase tracking-tight mb-4">
            Investor Documents Hub
          </h1>
          <p className="max-w-3xl text-sm lg:text-base text-white/70 font-medium leading-relaxed">
            Access, view, and download all official corporate policies, statutory filings, and corporate certificates of HRTS Staffing Solutions Limited.
          </p>
        </div>
      </section>

      {/* Categories Content */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="space-y-16">
          {SECTIONS.map((section) => (
            <div key={section.id} className="scroll-mt-32">
              <h2
                id={section.id}
                className="font-display font-black text-2xl lg:text-3xl text-secondary uppercase tracking-tight pb-4 mb-8 border-b-2 border-slate-100 relative transition-colors duration-500"
              >
                {section.title}
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-primary" />
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {section.docs.map((doc) => (
                  <div
                    key={doc.path}
                    className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-premium hover:shadow-premium-hover transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${section.isPolicy
                          ? "bg-amber-50 text-amber-500"
                          : "bg-red-50 text-red-500"
                          }`}
                      >
                        {section.isPolicy ? (
                          <Shield size={22} />
                        ) : (
                          <FileText size={24} />
                        )}
                      </div>

                      {/* Details */}
                      <div>
                        <h4 className="font-display font-bold text-sm lg:text-base text-text-main group-hover:text-primary transition-colors duration-200 leading-snug">
                          {doc.name}
                        </h4>
                        <div className="flex items-center gap-3 text-xs font-semibold text-text-sub mt-1.5">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={11} />
                            {doc.date}
                          </span>
                          <span className="text-slate-300">|</span>
                          <span>PDF ({doc.size})</span>
                        </div>
                      </div>
                    </div>

                    {/* Download CTA */}
                    <a
                      href={doc.path}
                      download
                      className="w-10 h-10 flex-shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-text-sub hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md ml-3"
                      title={`Download ${doc.name}`}
                    >
                      <Download size={15} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
