import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  author = "Areykal Ho",
  lang = "en",
}) => {
  const siteUrl = "https://www.areykalho.dev";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imgUrl = image
    ? `${siteUrl}${image}`
    : `${siteUrl}/default-og-image.jpg`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <html lang={lang} />
      <title>{title} | Areykal Ho - Portfolio</title>
      <meta
        name="description"
        content={description}
      />
      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}
      <meta
        name="author"
        content={author}
      />
      <meta
        name="robots"
        content="index, follow"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="theme-color"
        content="#1e293b"
      />

      {/* OpenGraph tags */}
      <meta
        property="og:url"
        content={fullUrl}
      />
      <meta
        property="og:type"
        content={type}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={imgUrl}
      />
      <meta
        property="og:site_name"
        content="Areykal Ho Portfolio"
      />
      <meta
        property="og:image:width"
        content="1200"
      />
      <meta
        property="og:image:height"
        content="630"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      {/* Twitter Card tags */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={imgUrl}
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={fullUrl}
      />
    </Helmet>
  );
};

export default SEO;
