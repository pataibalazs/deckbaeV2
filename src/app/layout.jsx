<Head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="next-size-adjust" content="100%" /> {/* ✅ THIS LINE */}
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:image" content="/og-image.jpg" />
  <meta name="robots" content="index, follow" />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Deckbae",
        url: "https://deckbae.hu",
        description: metadata.description,
      }),
    }}
  />
</Head>;
