import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, schema }) => (
  <Helmet>
    <title>{title} | Areykal Ho - Portfolio</title>
    <meta
      name="description"
      content={description}
    />
    <meta
      name="keywords"
      content={keywords}
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
      property="og:type"
      content="website"
    />
    <meta
      property="og:url"
      content={window.location.href}
    />
    <link
      rel="canonical"
      href={window.location.href}
    />
    {schema && (
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    )}
  </Helmet>
);

export default SEO;
