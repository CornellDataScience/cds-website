import {
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface FooterProps {
  // Define your component props here
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="w-full bg-[#1e2124] text-white py-4">
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/cornelldatascience/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link
              href="https://github.com/CornellDataScience"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            {/* <Link
              href="https://www.facebook.com/CornellDataScience"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link> */}
            <Link
              href="mailto:cornelldatascience@gmail.com"
              className="text-red-500"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Link>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Cornell Data Science{" "}
            <span className="text-xs">(Project Team)</span>. <br />
            All rights reserved.
          </div>
          <div className="uppercase text-sm">
            This organization is a registered student organization of cornell
            university.
          </div>
        </div>
        <div className="flex flex-col text-md space-y-1">
          <p className="text-xs text-gray-400">NAVIGATION</p>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="/alumni" className="hover:text-gray-300">
            Alumni
          </Link>
          <Link href="/subteams" className="hover:text-gray-300">
            Subteams
          </Link>
          <Link href="/eboard" className="hover:text-gray-300">
            E-Board
          </Link>
          <Link href="/education" className="hover:text-gray-300">
            Education
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-xs text-gray-400">SUBTEAMS</p>
          <Link
            href="/subteam/data-engineering"
            className="hover:text-gray-300"
          >
            Data Engineering
          </Link>
          <Link href="/subteam/data-science" className="hover:text-gray-300">
            Data Science
          </Link>
          <Link
            href="/subteam/quantitative-finance"
            className="hover:text-gray-300"
          >
            Quantitative Finance
          </Link>
          <Link
            href="/subteam/machine-learning-engineering"
            className="hover:text-gray-300"
          >
            Machine Learning Engineering
          </Link>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-xs text-gray-400">QUICK LINKS</p>
          <Link
            target="_blank"
            href="/recruitment"
            className="hover:text-gray-300"
          >
            Recruitment
          </Link>
          <Link
            target="_blank"
            href="/coffee-chats"
            className="hover:text-gray-300"
          >
            Coffee Chats
          </Link>
          <Link
            target="_blank"
            href="/sponsorship"
            className="hover:text-gray-300"
          >
            Sponsorship
          </Link>
          <Link
            target="_blank"
            href="https://www.engineering.cornell.edu/students/undergraduate-students/special-programs/project-teams"
            className="hover:text-gray-300"
          >
            Cornell Engineering - Project Teams
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
