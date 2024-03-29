import React from "react";
import "./Footer.css";
import { FullContainer } from "../FullContainer/FullContainer";
import facebook from "./imgs/facebook.png";
import instagram from "./imgs/instagram.png";
import linkedin from "./imgs/twitter.png";
import youtube from "./imgs/youtube.png";

const icons = [facebook, instagram, linkedin, youtube];

const links = [
  {
    name: "Products",
    links: [
      <a href="#">IDEs</a>,
      <a href="#">.NET & Visual Studio</a>,
      <a href="#">Team Tools</a>,
      <a href="#">Plugins</a>,
      <a href="#">Education</a>,
      <a href="#">Languages</a>,
      <a href="#">All products</a>,
    ],
  },
  {
    name: "Solutions",
    links: [
      <a href="#">C++ Tools</a>,
      <a href="#">Data Tools</a>,
      <a href="#">DevOps</a>,
      <a href="#">Education</a>,
      <a href="#">Game Development</a>,
      <a href="#">Software Development</a>,
      <a href="#">Tools For Business</a>,
      <a href="#">Quality Assurance</a>,
    ],
  },

  {
    name: "Initiatives",
    links: [
      <a href="#">Kotlin</a>,
      <a href="#">JetBrains Mono</a>,
      <a href="#">JetBrains Research</a>,
      <a href="#">Open Source Projects</a>,
    ],
  },
  {
    name: "Community",
    links: [
      <a href="#">Academic Licensing</a>,
      <a href="#">Open Source Support</a>,
      <a href="#">User Groups</a>,
      <a href="#">Events Partnership</a>,
      <a href="#">Developer Recognition</a>,
    ],
  },
  {
    name: "Resources",
    links: [
      <a href="#">Sales Support</a>,
      <a href="#">Product Support</a>,
      <a href="#">Licensing FAQ</a>,
      <a href="#">Documentation</a>,
      <a href="#">Early Access</a>,
      <a href="#">Events and Webinars</a>,
      <a href="#">Newsletters</a>,
      <a href="#">Industry Reports</a>,
      <a href="#">Blog</a>,
      <a href="#">Desktop Art</a>,
    ],
  },
  {
    name: "Company",
    links: [
      <a href="#">About</a>,
      <a href="#">Contacts</a>,
      <a href="#">Careers</a>,
      <a href="#">News</a>,
      <a href="#">Customer & Awards</a>,
      <a href="#">Brand Assets</a>,
      <a href="#">Partners and Resellers</a>,
    ],
  },
];

const legal = [
  <a href="#">Privacy & Security</a>,
  <a href="#">Terms of use</a>,
  <a href="#">Trademarks</a>,
  <a href="#">Legal</a>,
  <a href="#">Genuine Tools</a>,
];

export const Footer = () => {
  return (
    <FullContainer color="darkGray" className="footer_container">
      <div className="links_container">
        {links.map((obj) => {
          const { name, links } = obj;
          return (
            <ul className="links_list">
              <h6>{name}</h6>
              {links.map((link) => link)}
            </ul>
          );
        })}
      </div>
      <ul className="icons_container">
        {icons.map((icon) => {
          return (
            <li>
              <img src={icon} />
            </li>
          );
        })}
      </ul>
      <ul className="legal">{legal.map((l) => l)}</ul>
      <span className="copyright">
        <p>Copyright © 2000-2022 JetBrains s.r.o.</p>
        <p>Developed with drive and IntelliJ IDEA</p>
      </span>
    </FullContainer>
  );
};
