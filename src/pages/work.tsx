import React from "react";
import tw from "twin.macro";
import { Helmet } from "react-helmet";
import { PageProps } from "gatsby";

import Layout from "@components/Layout";

const Para = tw.p`my-4 text-lg max-w-2xl`;
const List = tw.ul`my-4 text-lg max-w-2xl`;
const H2 = tw.h2`my-4 text-2xl`;
const H3 = tw.h3`my-4 text-xl font-medium`;
const Small = tw.small`block text-sm font-medium text-gray-600`;

const WorkPage: React.FC<PageProps> = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Work | Giraffi" />
    <H2>
      Made by Many — Senior Full Stack Developer
      <Small>APR 2013 - MAY 2021</Small>
    </H2>
    <H3>Multinational apprenticeship startup:</H3>
    <Para>
      Alongside the client’s principle developer, I co-lead a mixed ability
      development team through the process of re-imaging their marketing
      website. Helped quickly upskill and mentor the team in Next.js / React /
      Typescript, Sanity.io and Storybook. This was done through a mixture of
      open video calls at the start of the project followed on with ad hoc pair
      programming and pr reviews. Worked closely with designers, client
      stakeholders and a product manager to shape a growing site that was both
      performant for the end user, but also enjoyable to develop for. I also led
      technical walkthroughs during our end of sprint demos and was a key part
      of helping manage client expectations helping to prioritise and deliver a
      scaled back, but impressive mvp.
    </Para>
    <H3>World Economic Forum:</H3>
    <Para>
      Senior Ruby on Rails developer on a 4 year engagement working on requests
      for new functionality alongside a team working on incremental improvements
      to the service.
    </Para>
    <List>
      <li>
        Built a React SPA to Integrate the client's custom Ruby on Rails cms
        with Buffer, their social media management service, to streamline
        promotion of new articles to facebook / twitter and linked in.
      </li>
      <li>
        Worked with a designer to build a user generated content platform to
        capture and present videos recorded by Forum staff at Davos and users on
        social media to answer questions supporting the main themes of the
        event.
      </li>
      <li>
        Kickstarted the technical implementation of a style guide. Working
        closely with a designer we built a react component library to be used
        throughout the site. Allowing the website to move incrementally away
        from a ruby on rails monolith. Technologies used were a React /
        TypeScript frontend with Ruby GraphQL backend. Components were designed
        in Figma and the corresponding react components presented in Storybook.
      </li>
    </List>
    <H3>Cannes Lions / Ascential:</H3>
    <Para>
      <b>React Native event app</b> - Drove product development on a project to
      migrate from a white-label event app to a custom solution written in React
      Native. Co-working with a newly recruited growing client development team
      to ensure continued success of the product. Worked with internal
      technology stakeholders to connect with legacy integrations and deliver a
      solution that could eventually be repurposed for their other events
      throughout the year.
    </Para>
    <Para>
      <b>Next.js content archive</b> - Worked alongside several internal teams
      to build a Next.js / Elixir based site to replace the existing Cannes
      Lions Archive allowing the business to better monetize previous award
      entries.
    </Para>
    <H3>Sir Trevor JS (https://github.com/madebymany/sir-trevor-js):</H3>
    <Para>
      Lead development over a 4 year period on an open source web-based content
      editor used on client projects and other websites around the world. During
      this time I migrated the codebase from jQuery to ES6 standards and
      transformed the editor from a rudimentary block based editor to a document
      based approach inspired by medium.com. I also engaged with the community
      managing github issues, attended client meetings on improvements and
      managed prs from external contributors.
    </Para>
    <H2>
      Freelance — Ruby on Rails Developer
      <Small>NOV 2011 - APR 2013</Small>
    </H2>
    <Para>Ruby on Rails contractor working on a variety of projects.</Para>
    <H2>
      Freelance — Web Developer
      <Small>SEPT 2002 - NOV 2011</Small>
    </H2>
    <Para>
      Wordpress, PHP, Flash / Actionscript, HTML, CSS Worked with small
      businesses tailoring open source solutions to their needs. Built a pre
      YouTube video sharing solution in Flash / Actionscript backed by a Perl
      api and custom video encoding backend.
    </Para>
    <H2>
      Gilmore House Associates — Microsoft Web Developer
      <Small>JUNE 2002 - 2005</Small>
    </H2>
    <Para>
      Automated an existing manual HR 360 Degree Appraisal process using a
      combination of Microsoft Technologies to capture feedback online and
      generate reports for delivery to clients.
    </Para>
  </Layout>
);

export default WorkPage;
