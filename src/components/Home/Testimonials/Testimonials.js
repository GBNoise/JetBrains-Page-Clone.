import React from "react";
import { FullContainer } from "../FullContainer/FullContainer";
import "./Testimonials.css";

const testimonialsArr = [
  {
    testimonial:
      "IntelliJ IDEA is undoubtedly the top-choice IDE for software developers.",
    name: "Mary Grygleski",
    workplace: "IBM",
    img: "",
  },
];

export const Testimonials = () => {
  const [width, setWidth] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useState(() => {
    window.addEventListener("resize", () => {
      setWidth({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  return (
    <section className="testimonials_container">
      <FullContainer color="darkGray">
        <span>
          <h1>Trusted</h1>
          <h2>
            Many of the world's most dynamic companies and individuals find
            JetBrains tools make them more creative and effective
          </h2>
        </span>
        <span className="numbers">
          <span>
            <h1>12.8M</h1>
            <h6>users trust our tools</h6>
          </span>
          <span>
            <h1>164K</h1>
            <h6>join every month</h6>
          </span>
        </span>
      </FullContainer>

      <div className="testimonials"></div>

      <FullContainer color="white">
        <h1>
          <b>
            Width: {width.width} ||| Height: {width.height}
          </b>
        </h1>
      </FullContainer>
    </section>
  );
};
