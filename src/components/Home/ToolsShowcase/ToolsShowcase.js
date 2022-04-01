import React from "react";
import "./ToolsShowcase.css";

export const ToolsShowcase = ({ obj }) => {
  const { description1, description2, technologies, linkBtn } = obj;
  return (
    <section className="toolsShowcase_container">
      <span className="sides"></span>
      {description1}
      {description2}
      <ul className="toolsShowcase_ul">
        {technologies.map((el, i) => {
          return (
            <li key={i}>
              <a href="#">{el}</a>
            </li>
          );
        })}
        <li className="toolsShowcase_linkBtn">{linkBtn}</li>
      </ul>
    </section>
  );
};
