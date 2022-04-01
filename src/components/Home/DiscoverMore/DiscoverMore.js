import React from "react";
import "./DiscoverMore.css";
import { FullContainer } from "../FullContainer/FullContainer";
import { Tools } from "../Tools/Tools";
import annual from "./images/annual-highlights-icon.svg";
import play from "./images/banner_home-play_black.svg";
import survey from "./images/banner_home-survey.svg";
const arr = [
  {
    name: "Software development the JetBrains way: dogfooding",
    description:
      "Giving you the scoop on how your favorite products are created",
    option: "Watch now",
    image: play,
  },
  {
    name: "JetBrains Annual Highlights 2022",
    description:
      "Find out why more than 12.8 million developers use and trust our tools",
    option: "Read now",
    image: annual,
  },
  {
    name: "The State of Developer Ecosystem 2021",
    description:
      "Developer community trends in JetBrains' fifth annual survey results",
    option: "Learn more",
    image: survey,
  },
];

export const DiscoverMore = () => {
  return (
    <FullContainer color="darkWhite">
      <h1>Discover More</h1>
      <Tools arr={arr} />
    </FullContainer>
  );
};
