import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { LocationProps } from "@pages";

interface SeoProps extends LocationProps {}

const SEO: React.FC<SeoProps> = ({ location }) => {
  const {
    site: { siteMetadata: seo },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);

  const canonical = `${seo.siteUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={canonical} />
      {canonical && <meta property="og:url" content={canonical} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;
