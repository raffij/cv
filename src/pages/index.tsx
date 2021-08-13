import React from "react";
import tw from "twin.macro";

import Layout from "../components/Layout";
import Social from "../components/Social";

const Para = tw.p`my-4 text-lg max-w-2xl`;
const LargePara = tw.p`my-4 text-xl md:text-2xl max-w-2xl`;

const IndexPage = () => (
  <Layout>
    <LargePara>
      I'm Raffi Jacobs, a lead React product developer based in the UK
    </LargePara>
    <Para>
      Over the last 10 years I’ve taken an agile approach to building digital
      products in small cross discipline teams.
    </Para>
    <Para>
      I take a highly contextual approach to technology - focussing on the real
      world impact / change of behaviour that our decisions make on the client's
      business and the end user's experience. I'm known for balancing the
      tradeoff between meticulous code and rapid prototyping, in order to get
      products into customers hands for testing as part of the product
      development process.
    </Para>
    <Para>
      I’m as passionate about building / influencing the best solution as I am
      about being approachable and using my experiences and research skills to
      help others. As well as seeking out mentoring opportunities in the wider
      business, I always take the opportunity to help others understand the
      value of the technical decisions we make and what they bring to the
      business. Just as important is bridging the gap between the product team
      and senior members of a client's business, in order to secure trust and
      confidence in the development partnership. My strategic approach has often
      resulted in clients both extending existing projects, and returning for
      further future project work.
    </Para>
    <Para>
      The most recent client projects I've worked on have suited a React / React
      Native, Typescript & GraphQL based solution, but previously I've worked on
      a more conventional production stack based on Ruby on Rails and Phoenix /
      Elixir. The build pipeline has normally consisted of a CI build process on
      CircleCI, GitHub Actions, CodeShip or Jenkins with the infrastructure
      being managed in terraform and deployed to a client's aws or heroku
      account. I've also built React Native mobile apps, which were released to
      the App Store and Google Play through fastlane and Visual Studio App
      Center.
    </Para>
    <Para>
      Throughout my career I've built up a wide range of expertise and depth of
      knowledge in the entire product development process. Whether it be
      responding to RFPs; rapid prototyping; user testing; building production
      ready code; working with in-house qa engineers; or managing a project
      handover; I’ve always been eager to learn more.
    </Para>
    <Social />
  </Layout>
);

export default IndexPage;
