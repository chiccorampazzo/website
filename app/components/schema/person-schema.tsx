import Script from 'next/script';

// Base schema for the person - will be used across all pages
export default function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Francesco Rampazzo",
    url: "https://francescorampazzo.com",
    jobTitle: "Lecturer in Social Statistics and Demography",
    worksFor: {
      "@type": "Organization",
      name: "University of Manchester",
      url: "https://www.manchester.ac.uk/"
    },
    sameAs: [
      "https://research.manchester.ac.uk/en/persons/francesco-rampazzo",
      "https://scholar.google.com/citations?user=_oD24CIAAAAJ",
      "https://linkedin.com/in/frampazzo",
      "https://bsky.app/profile/francescorampazzo.com"
    ]
  };

  return (
    <Script id="person-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(personSchema)}
    </Script>
  );
}
