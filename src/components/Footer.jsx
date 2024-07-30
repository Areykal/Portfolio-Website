import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTelegram,
  faInstagram,
  faFacebookF,
  faDiscord,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcon = ({ icon, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors duration-300 text-slate-400 hover:text-blue-400"
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
          />
          <SocialIcon
            icon={faTelegram}
            url="https://t.me/Areykal"
          />
          <SocialIcon
            icon={faLinkedinIn}
            url="https://linkedin.com/in/areykal-ho"
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
