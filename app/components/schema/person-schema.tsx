import Script from 'next/script';

// Base schema for the person - will be used across all pages
export default function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Francesco Rampazzo",
    url: "https://francescorampazzo.com",
    jobTitle: "Demographer",
    worksFor: {
      "@type": "Organization",
      name: "University of Oxford",
      url: "https://www.ox.ac.uk/"
    },
    sameAs: [
      "https://research.manchester.ac.uk/en/persons/francesco-rampazzo",
      "https://www.demography.ox.ac.uk/people/francesco-rampazzo",
      "https://scholar.google.com/citations?user=_oD24CIAAAAJ"
    ]
  };

  return (
    <Script id="person-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(personSchema)}
    </Script>
  );
}