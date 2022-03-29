import React from "react";
import "./News.css";
import { Tools } from "../Tools/Tools";
import { FullContainer } from "../FullContainer/FullContainer";

const news = [
  {
    name: "DataSpell 2022.1 EAP 2: What's New?",
    description:
      "DataSpell 2022.1 EAP 2 is now available, and you can try the newly added features right away. Get the latest version using the ToolBox App by clicking Update...",
    option: "Learn more",
    date: "Mar 22, 2022",
  },
  {
    name: "JetBrains' Statement on Ukraine",
    description:
      "We have already made our position very clear in regard to the invasion of Ukraine. We condemn the attacks of the Russian government, and we stand with the Ukrainian people, including our own...",
    option: "Learn more",
    date: "Mar 11, 2022",
  },
  {
    name: "Space Roadmap Q1-Q2 2022",
    description:
      "Discover the JetBrains Space Roadmap for Q1-Q2 2022, and learn about upcoming features and our priorities...",
    option: "Learn more",
    date: "Mar 4, 2022",
  },
];

export const News = () => {
  return (
    <FullContainer color={"darkWhite"}>
      <h1>News & Events</h1>
      <Tools arr={news} />
    </FullContainer>
  );
};
