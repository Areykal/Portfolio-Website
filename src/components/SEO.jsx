import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => (
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
    {/* Add more meta tags as needed */}
  </Helmet>
);

export default SEO;
