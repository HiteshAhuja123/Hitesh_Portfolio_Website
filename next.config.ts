import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Retired project — never mine. Route removed, send anyone who has the link home.
      { source: "/projects/iltakecare", destination: "/", permanent: true },
      // Renamed for accuracy: "FreshBuy" was a placeholder name for the Home Insurance work.
      { source: "/projects/freshbuy", destination: "/projects/home-insurance", permanent: true },
      // Retired project.
      { source: "/projects/flick-ticket", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
