import React from "react";
import tw, { GlobalStyles } from "twin.macro";

import Header from "./Header";
import Seo from "./Seo";

const Container = tw.div`m-4 md:m-8 my-8`;

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Seo />
    <Container>
      <Header />
      {children}
    </Container>
  </div>
);

export default Layout;
