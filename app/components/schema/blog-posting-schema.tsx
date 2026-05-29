import Script from 'next/script';

interface BlogPostingSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  url: string;
}

// Blog posting schema for individual blog posts
export default function BlogPostingSchema({ 
  title, 
  description, 
  datePublished,
  url,
}: BlogPostingSchemaProps) {
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: datePublished,
    url: url,
    author: {
      "@type": "Person",
      name: "Francesco Rampazzo",
    },
    publisher: {
      "@type": "Person",
      name: "Francesco Rampazzo",
      url: "https://francescorampazzo.com"
    }
  };

  return (
    <Script id="blogpost-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(blogPostSchema)}
    </Script>
  );
}
