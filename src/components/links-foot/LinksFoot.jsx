import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./LinksFooter.scss";

export default (props) => {
  const linkedinUrl = "https://www.linkedin.com/in/jvamachado/";
  const githubUrl = "https://github.com/jvmachado";
  const instagramUrl = "https://www.instagram.com/joaovmachado_/";
  const mailUrl = "mailto:joaovitoramachado@gmail.com";
  return (
    <div class="linksFooter">
      <a href={linkedinUrl} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href={githubUrl} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={instagramUrl} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href={mailUrl} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};
