import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
}) => {
  const siteUrl = "https://www.areykalho.dev"; // Replace with your actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imgUrl = image
    ? `${siteUrl}${image}`
    : `${siteUrl}/default-og-image.jpg`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
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
