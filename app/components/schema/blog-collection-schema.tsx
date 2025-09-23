import Script from 'next/script';

// Blog collection schema for the blog index page
export default function BlogCollectionSchema({ url }) {
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog | Francesco Rampazzo",
    description: "Blog posts by Francesco Rampazzo",
    url: url,
    author: {
      "@type": "Person",
      name: "Francesco Rampazzo"
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: `${url}` // This is a simplified version
        }
      ]
    }
  };

  return (
    <Script id="blog-collection-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(blogCollectionSchema)}
    </Script>
  );
}