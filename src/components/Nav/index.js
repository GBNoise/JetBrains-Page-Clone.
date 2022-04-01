import React, { useRef, useState } from "react";
import "./Nav.css";

const options = [
  "Developer Tools",
  "Team Tools",
  "Learning Tools",
  "Solutions",
  "Support",
  "Store",
];

const optionsInformation = [
  {
    name: "Developer Tools",
    highlights: [
      {
        name: "Space",
        description: "An all-in-one for software projects and teams",
        color:
          "linear-gradient(145deg, rgba(39,110,240,1) 0%, rgba(104,180,198,1) 50%, rgba(187,227,141,1) 100%)",
      },
      {
        name: "fleet",
        description: "next generation IDE for software developers",
        color:
          "linear-gradient(145deg, rgba(39,110,240,1) 0%, rgba(198,104,146,1) 0%, rgba(143,42,241,1) 100%)",
      },
    ],
  },
  {
    name: "Team Tools",
    highlights: [
      {
        name: "Datalore",
        description: "Smart jupyter environment for team collaboration",
        color:
          "linear-gradient(145deg, rgba(39,110,240,1) 0%, rgba(104,180,198,1) 50%, rgba(187,227,141,1) 100%)",
      },
      {
        name: "YouTrack",
        description: "Powerful project management for all of your teams",
        color:
          "linear-gradient(145deg, rgba(39,110,240,1) 0%, rgba(104,159,198,1) 0%, rgba(241,42,175,1) 100%)",
      },
    ],
  },
  {
    name: "Learning Tools",
    highlights: [
      {
        name: "JetBrains Academy for organizations",
        description:
          "Empower your institution by cultivating the motivation to learn",
        color:
          "linear-gradient(145deg, rgba(39,110,240,1) 0%, rgba(104,180,198,1) 50%, rgba(187,227,141,1) 100%)",
      },
    ],
  },
  {
    name: "Solutions",
    highlights: [
      {
        name: "Developer tools for your business",
        description: "Professional tools for productive development",
        color:
          "linear-gradient(145deg, rgba(39,110,240,1) 0%, rgba(104,180,198,1) 50%, rgba(187,227,141,1) 100%)",
      },
      {
        name: "Remote Development",
        description:
          "Connect to remote dev environments from anywhere in seconds",
        color: "#00ff00",
      },
    ],
  },
  {
    name: "Support",
    highlights: [
      {
        name: "Download and Install",
        color:
          "linear-gradient(145deg, rgba(39,110,240,1) 0%, rgba(104,180,198,1) 50%, rgba(187,227,141,1) 100%)",
      },
      {
        name: "Contact Us",
        color: "#00ff00",
      },
    ],
  },
  {
    name: "Store",
    highlights: [
      {
        name: "All products pack",
        description:
          "Get all JetBrains tools including 10 IDEs, 2 profilers and 3 extensions",
        color:
          "linear-gradient(145deg, rgba(39,110,240,1) 0%, rgba(104,180,198,1) 50%, rgba(187,227,141,1) 100%)",
      },
      {
        name: "The total economic impact of IntelliJ IDEA Study",
        description:
          "Commisioned TEI research conducted by Forrester consulting",
        color: "#00ff00",
      },
    ],
  },
];

export const Nav = () => {
  const optionInfoRef = useRef(null);
  const [option, setOption] = useState("");

  const handleOptionInfo = (op) => {
    console.log("this is running");
    if (optionInfoRef.current.style.visibility === "visible" && op === option) {
      optionInfoRef.current.style.visibility = "hidden";
      document
        .querySelector(".option" + op.split(" ")[0])
        ?.style.setProperty("--isvisible", "hidden");
    } else {
      document
        .querySelector(".option" + option.split(" ")[0])
        ?.style.setProperty("--isvisible", "hidden");
      optionInfoRef.current.style.visibility = "visible";
      document
        .querySelector(".option" + op.split(" ")[0])
        ?.style.setProperty("--isvisible", "visible");
    }
    setOption(op);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <b>JET BRAINS</b>
      </div>
      <ul className="options">
        {options.map((option, i) => (
          <li
            className={`option${option.split(" ")[0]}`}
            onClick={() => handleOptionInfo(option)}
            key={i}
          >
            <p tabIndex={i + 1}>{option}</p>
          </li>
        ))}
      </ul>
      <section className="option_info_container" ref={optionInfoRef}>
        <div className="option_info">
          {optionsInformation
            .filter((el) => el.name === option)
            .map((el) => {
              const { name, highlights } = el;
              return (
                <div className="highlights_container">
                  {highlights.map((high) => {
                    return (
                      <div
                        className="single_highlight"
                        style={{ background: `${high.color}` }}
                      >
                        <span>
                          <h2>{high.name}</h2>
                          <p>{high?.description}</p>
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </section>
    </nav>
  );
};
