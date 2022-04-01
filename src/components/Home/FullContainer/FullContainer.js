import React, { useEffect, useRef } from "react";
import "./FullContainer.css";
const colors = {
  darkWhite: "rgb(244, 244, 244)",
  darkGray: "rgb(39, 40, 44)",
  white: "rgb(255,255,255)",
};
export const FullContainer = ({ children, color, className }) => {
  const spanRef = useRef(null);
  useEffect(() => {
    spanRef.current.style.setProperty("--color", colors[color]);
    spanRef.current.style.setProperty("--isvisible", "visible");
  }, [spanRef]);

  return (
    <section
      className={`full_container ${className}`}
      style={{
        background: colors[color],
      }}
    >
      <span
        className="full_container_span"
        style={{ visibility: "hidden" }}
        ref={spanRef}
      ></span>
      {children}
    </section>
  );
};
