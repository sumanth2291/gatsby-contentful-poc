import React from "react";
import { PageProps, graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = site.siteMetadata;
  return (
    <>
      <h1>Index Page: {title}</h1>
      <p>{description}</p>
    </>
  );
};

export default IndexPage;
