import React from "react";
import { Ads } from "./Ads/Ads";
import "./Home.css";
import { News } from "./News/News";
import { Testimonials } from "./Testimonials/Testimonials";
import { Tools } from "./Tools/Tools";
import { ToolsShowcase } from "./ToolsShowcase/ToolsShowcase";
import { DiscoverMore } from "./DiscoverMore/DiscoverMore";

const toolsShowcaseObj = {
  description1: (
    <h2>
      However big or small your team is, our products will ensure that it always
      has a smooth and enjoyable experience when{" "}
      <a href="#">building and shipping your code</a>,{" "}
      <a href="#">planning your work</a> and <a href="#">collaborating</a>
    </h2>
  ),
  description2: (
    <h2>
      Whatever platform or language you work with, JetBrains has a development
      tool for you.
    </h2>
  ),
  technologies: [
    "Javascript",
    ".NET",
    "Java & JVM",
    "C++",
    "macOS & iOS",
    "Python & Django",
    "PHP",
    "Ruby & Rails",
    "Go",
    "Kotlin",
    "SQL",
  ],
  linkBtn: <a href="#">See all tools</a>,
};

const tools = [
  {
    name: "Developer Tools",
    description: "The complete developer toolkit",
    option: "Choose your tool",
  },
  {
    name: "Team Tools",
    description: "A wide range of tools and integrations for any team",
    option: "See all tools",
  },
  {
    name: "Learning Tools",
    description: "Solutions and opportunities for teachers and students",
    option: "Find your solution",
  },
  {
    name: "Kotlin",
    description: "A modern multiplatform programming language",
    option: "Discover Kotlin",
  },
];

export const Home = () => {
  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Meta") e.preventDefault();
    });

    return () => document.removeEventListener("keydown");
  }, []);

  return (
    <section className="home_container">
      <h1>Essential tools for software developers and teams</h1>
      <h3>We build our software so you can enjoy building yours</h3>
      <Tools arr={tools} />
      <Ads />
      <ToolsShowcase obj={toolsShowcaseObj} />
      <News />
      <Testimonials />
      <DiscoverMore />
    </section>
  );
};
