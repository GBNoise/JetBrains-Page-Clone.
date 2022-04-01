import React, { useState } from "react";
import { FullContainer } from "../FullContainer/FullContainer";
import "./Testimonials.css";
import { Tools } from "../Tools/Tools";
import mary from "./imgs/Mary-Grygleski@2x.png";
import frans from "./imgs/Frans-Bouma@2x.png";
import marvin from "./imgs/Marvin-Burman@2x.png";

import google from "./imgs/companieslogos/google-1-1.svg";
import nasa from "./imgs/companieslogos/nasa-6.svg";
import netflix from "./imgs/companieslogos/netflix-3.svg";
import valve from "./imgs/companieslogos/valve-4.svg";
import ubisoft from "./imgs/companieslogos/ubisoft-logo.svg";
import twitter from "./imgs/companieslogos/twitter-6.svg";

const companies = [google, nasa, valve, netflix, ubisoft, twitter];

const testimonialsArr = [
  {
    testimonial:
      "IntelliJ IDEA is undoubtedly the top-choice IDE for software developers.",
    name: "Mary Grygleski",
    workplace: "IBM",
    img: mary,
  },
  {
    testimonial:
      "In Rider, I just focus on working with my code, as it should be, instead of fighting my IDE. Rider gave me back the joy in writing .NET code.",
    name: "Frans Bouma",
    workplace: "LLBLGen Pro",
    img: frans,
  },
  {
    testimonial:
      "YouTrack is a very stable and consistent product. We value its rich functionality, speed and efficiency.",
    name: "Marvin Burman",
    workplace: "testhub.com",
    img: marvin,
  },
];

const customerStories = [
  {
    name: "OpenStack",
    description:
      "PyCharm has tons of advantages when compared to text editors in terms of supported functionality. With respect to Python development, PyCharm definitely stands out with features like remote debugging, code quality checks and integrations with third-party software like docker and kubernetes",
    option: "Read case study",
  },
  {
    name: "OpenStack",
    description:
      "PyCharm has tons of advantages when compared to text editors in terms of supported functionality. With respect to Python development, PyCharm definitely stands out with features like remote debugging, code quality checks and integrations with third-party software like docker and kubernetes",
    option: "Read case study",
  },
  {
    name: "OpenStack",
    description:
      "PyCharm has tons of advantages when compared to text editors in terms of supported functionality. With respect to Python development, PyCharm definitely stands out with features like remote debugging, code quality checks and integrations with third-party software like docker and kubernetes",
    option: "Read case study",
  },
];

export const Testimonials = () => {
  const [width, setWidth] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [testimonialNumber, setTestimonialNumber] = useState(0);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  const handleTestimonialChange = (e) => {
    const option = e.target.innerText;

    if (option === "->" && testimonialNumber !== testimonialsArr.length - 1) {
      setTestimonialNumber(testimonialNumber + 1);
    }
    if (option === "<-" && testimonialNumber !== 0) {
      setTestimonialNumber(testimonialNumber - 1);
    }
  };

  return (
    <>
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

        <div className="testimonials">
          <img
            className="img"
            src={testimonialsArr[testimonialNumber].img}
            alt="img"
          ></img>
          <span className="information">
            <p className="testimonial">
              {testimonialsArr[testimonialNumber].testimonial}
            </p>
            <h2>{testimonialsArr[testimonialNumber].name}</h2>
            <p>{testimonialsArr[testimonialNumber].workplace}</p>
          </span>
          <div className="testimonials_options_container">
            <button className="moreBtn">More testimonials</button>
            <div className="arrows_container">
              <button onClick={handleTestimonialChange}>{"<-"}</button>
              <p>
                {testimonialNumber + 1} / {testimonialsArr.length}
              </p>
              <button onClick={handleTestimonialChange}>{"->"}</button>
            </div>
          </div>
        </div>

        <FullContainer color="white">
          <h2>
            Our tools are used all over the world in some of the best-known
            companies
          </h2>
          <ul className="logos_list">
            {companies.map((c) => (
              <li>
                <img src={c} alt="logo" />
              </li>
            ))}
          </ul>
        </FullContainer>
      </section>

      <FullContainer color="white" className="customer_stories">
        <span>
          <h1>Customer Stories</h1>
          <p>See how the world's leading companies use JetBrains Products</p>
        </span>
        <Tools arr={customerStories} />
        <button>More case studies</button>
      </FullContainer>

      <FullContainer color="darkGray">
        <h1>
          <b>
            Width: {width.width} ||| Height: {width.height}
          </b>
        </h1>
      </FullContainer>
    </>
  );
};
