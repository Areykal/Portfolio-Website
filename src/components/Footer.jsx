import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTelegram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcon = ({ icon, url, ariaLabel }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors duration-300 text-slate-400 hover:text-blue-400"
    aria-label={ariaLabel}
  >
    <FontAwesomeIcon
      icon={icon}
      size="lg"
    />
  </a>
);

const Footer = () => (
  <footer className="py-8 text-slate-400 bg-slate-900 sm:py-12">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <p className="mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Areykal Ho. All rights reserved.
        </p>
        <div className="flex pb-20 space-x-6 sm:pb-0">
          <SocialIcon
            icon={faGithub}
            url="https://github.com/Areykal"
            ariaLabel="Link to GitHub account"
          />
          <SocialIcon
            icon={faTelegram}
            url="https://t.me/Areykal"
            ariaLabel="Link to Telegram account"
          />
          <SocialIcon
            icon={faLinkedinIn}
            url="https://linkedin.com/in/areykal-ho"
            ariaLabel="Link to LinkedIn account"
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
