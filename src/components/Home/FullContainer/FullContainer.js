import React from "react";
import "./FullContainer.css";
const colors = {
  darkWhite: "rgb(244, 244, 244)",
  darkGray: "rgb(39, 40, 44)",
  white: "rgb(255,255,255)",
};
export const FullContainer = ({ children, color }) => {
  return (
    <section className="full_container" style={{ background: colors[color] }}>
      {children}
    </section>
  );
};
