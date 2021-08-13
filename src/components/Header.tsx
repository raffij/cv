import React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";

import Social from "../components/Social";

import LogoSrc from "../images/giraffi-logo.svg";

const Container = tw.header`mb-8`;
const Logo = tw.img`w-[120px] md:w-[160px]`;

const Header = () => (
  <>
    <Container>
      <Link to="/">
        <h1>
          <Logo src={LogoSrc} alt="Giraffi logo" />
        </h1>
      </Link>
    </Container>
    <Social />
  </>
);

export default Header;
