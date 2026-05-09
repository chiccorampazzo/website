import Script from 'next/script';

export default function WebsiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Francesco Rampazzo",
    url: "https://francescorampazzo.com",
    description: "Francesco Rampazzo is a Lecturer in Social Statistics and Demography at the University of Manchester",
    author: {
      "@type": "Person",
      name: "Francesco Rampazzo"
    }
  };

  return (
    <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(websiteSchema)}
    </Script>
  );
}
