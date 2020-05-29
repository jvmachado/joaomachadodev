import TextLogo from "../../components/text-logo/TextLogo";
import LinksFoot from "../../components/links-foot/LinksFoot";
import React from "react";
import "./LandingPage.scss";

export default (_) => {
  const subtitles = [
    "Software Engineer",
    "Fullstack Development",
    "Beautiful Solutions",
  ];

  return (
    <div class="LandingPage">
      <div class="logo">
        <TextLogo title="João Machado" subtitle={subtitles} class="logo" />
      </div>
      <div class="footer">
        <LinksFoot />
      </div>
    </div>
  );
};
