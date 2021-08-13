import React from "react";
import tw, { GlobalStyles } from "twin.macro";
import { Helmet } from "react-helmet";

const Container = tw.div`m-8`;

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Helmet>
      <title>Giraffi.dev</title>
    </Helmet>
    <Container>{children}</Container>
  </div>
);

export default Layout;
