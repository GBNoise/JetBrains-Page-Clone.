import React from "react";
import "./Ads.css";

const smallAds = [
  {
    title: "JetBrains Annual Highlights 2022",
    subtitle: "The year's top stories in one convenient place",
    description:
      "Discover the latest information on our products, team and community",
    btn: "Check it out",
    size: "smallAd",
  },
  {
    title: "JetBrains Annual Highlights 2022",
    subtitle: "The year's top stories in one convenient place",
    description:
      "Discover the latest information on our products, team and community",
    btn: "Check it out",
    size: "smallAd",
  },
];

export const Ads = () => {
  return (
    <section className="ads_container">
      <Ad
        title={"JetBrains Annual Highlights 2022"}
        subtitle={"The year's top stories in one convenient place"}
        description={
          "Discover the latest information on our products, team and community"
        }
        btn={"Check it out"}
        size={"bigAd"}
      />
      <div className="small_container">
        {smallAds.map((ad) => {
          return (
            <Ad
              title={ad.title}
              subtitle={ad.subtitle}
              description={ad.description}
              btn={ad.btn}
              size={ad.size}
            />
          );
        })}
      </div>
    </section>
  );
};

const Ad = ({ title, subtitle, description, btn, size }) => {
  return (
    <div className={size}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      <button>{btn}</button>
    </div>
  );
};
