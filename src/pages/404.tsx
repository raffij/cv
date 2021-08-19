import * as React from "react";
import { PageProps } from "gatsby";

import { LargePara, Para } from "@pages/index";
import Layout from "@components/Layout";

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <title>Not found</title>
      <h1>
        <LargePara>Page not found</LargePara>
      </h1>
      <Para>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
      </Para>
    </Layout>
  );
};

export default NotFoundPage;
