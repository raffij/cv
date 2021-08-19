import React from "react";
import { Link } from "gatsby";
import tw, { styled } from "twin.macro";

const List = tw.ul`mb-6 md:mb-8 divide-x flex flex-wrap`;
const ListItem = tw.li`text-sm px-2 first-of-type:pl-0 md:px-4 md:text-base`;
const Link2 = tw.a`md:hover:underline inline-flex`;

const StyledLink = styled(Link)`
  &[aria-current] {
    color: #275875;
  }
  ${tw`md:hover:underline`}
`;

const ExternalLink = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const Social = () => (
  <List>
    <ListItem>
      <StyledLink to="/">About</StyledLink>
    </ListItem>
    <ListItem>
      <StyledLink to="/work">Work</StyledLink>
    </ListItem>
    <ListItem>
      <Link2 href="/Raffi Jacobs CV.pdf" download>
        CV
      </Link2>
    </ListItem>
    <ListItem>
      <Link2 href="https://github.com/raffij">GitHub</Link2>
    </ListItem>
    <ListItem>
      <Link2 href="https://www.linkedin.com/in/raffi-jacobs-7413701/">
        LinkedIn
      </Link2>
    </ListItem>
    <ListItem>
      <Link2 href="mailto:raffij@gmail.com">Email</Link2>
    </ListItem>
  </List>
);

export default Social;
