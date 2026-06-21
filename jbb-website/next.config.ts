import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old service URLs → new canonical URLs (permanent 308 redirects)
      { source: "/services/business-incorporation",  destination: "/services/business-formation-advisory",      permanent: true },
      { source: "/services/audit-assurance",          destination: "/services/accounting-reporting-assurance",   permanent: true },
      { source: "/services/direct-tax",               destination: "/services/direct-taxes-compliance",          permanent: true },
      { source: "/services/gst-advisory",             destination: "/services/goods-and-services-tax",           permanent: true },
      { source: "/services/transaction-advisory",     destination: "/services/transaction-advisory-services",    permanent: true },
      // Remove old services — redirect to main services page
      { source: "/services/company-law-secretarial",  destination: "/services/business-support-services",        permanent: true },
      { source: "/services/fema-rbi-compliance",      destination: "/services/business-support-services",        permanent: true },
      { source: "/services/virtual-cfo",              destination: "/services/accounting-reporting-assurance",   permanent: true },
      { source: "/services/taxation",                 destination: "/services/direct-taxes-compliance",          permanent: true },
    ];
  },
};

export default nextConfig;
