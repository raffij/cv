import React from "react";
import { Link } from "gatsby";
import tw from "twin.macro";

const List = tw.ul`mb-8 divide-x flex`;
const ListItem = tw.li`px-4 first:pl-0`;
const Link2 = tw.a`md:hover:underline inline-flex`;

const StyledLink = tw(Link)`md:hover:underline`;

interface SocialProps {
  includeLabel?: boolean;
}

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

const Social: React.FC<SocialProps> = ({ includeLabel = false }) => (
  <List>
    <ListItem>
      <StyledLink to="/">About</StyledLink>
    </ListItem>
    <ListItem>
      <StyledLink to="/work">Work</StyledLink>
    </ListItem>
    <ListItem>
      <Link2 href="https://github.com/raffij">
        GitHub <ExternalLink />
      </Link2>
    </ListItem>
    <ListItem>
      <Link2 href="https://www.linkedin.com/in/raffi-jacobs-7413701/">
        LinkedIn <ExternalLink />
      </Link2>
    </ListItem>
    <ListItem>
      <Link2 href="mailto:raffij@gmail.com">
        Email <ExternalLink />
      </Link2>
    </ListItem>
  </List>
);

export default Social;
