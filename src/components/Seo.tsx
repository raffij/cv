import React from "react";
import { Helmet } from "react-helmet";

const seo = {
  title: "Giraffi",
  description: "Home of Raffi",
  image: "https://giraffi.dev/icons/icon-512x512.png",
  url: "",
};

const SEO = () => (
  <Helmet title={seo.title}>
    <meta name="description" content={seo.description} />
    <meta name="image" content={seo.image} />
    {seo.url && <meta property="og:url" content={seo.url} />}
    {seo.title && <meta property="og:title" content={seo.title} />}
    {seo.description && (
      <meta property="og:description" content={seo.description} />
    )}
    {seo.image && <meta property="og:image" content={seo.image} />}
    <meta name="twitter:card" content="summary" />
    {seo.title && <meta name="twitter:title" content={seo.title} />}
    {seo.description && (
      <meta name="twitter:description" content={seo.description} />
    )}
    {seo.image && <meta name="twitter:image" content={seo.image} />}
  </Helmet>
);

export default SEO;
