import React from "react";
import tw, { GlobalStyles } from "twin.macro";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Seo from "./Seo";
import Social from "./Social";

import { LocationProps } from "@pages";

const Container = tw.div`m-4 md:m-8 my-8`;
const Footer = tw.footer`my-8`;

interface LayoutProps extends LocationProps {}

const Layout: React.FC<LayoutProps> = ({ children, location, ...rest }) => (
  <div {...rest}>
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    />
    <script src="http://localhost:8097"></script>

    <GlobalStyles />
    <Seo location={location} />
    <Container>
      <Header />
      {children}
      <Footer>
        <Social />
      </Footer>
    </Container>
  </div>
);

export default Layout;
