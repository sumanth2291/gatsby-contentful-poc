import React from "react";
import { PageProps } from "gatsby";

const IndexPage = (props: PageProps) => {
  return (
    <>
      <h1>Index Page:</h1>
      <p>{props.path}</p>
    </>
  );
};

export default IndexPage;
