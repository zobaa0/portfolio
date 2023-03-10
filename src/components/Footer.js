import React from "react";
import { FaDev, FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const socials = [
  {
    name: "Github",
    link: "https://github.com/zobaa0",
    icon: <FaGithub />,
  },
  // {
  //   name: "Linkedin",
  //   link: "https://www.linkedin.com/in/",
  //   icon: <FaLinkedin />,
  // },
  // {
  //   name: "DEV",
  //   link: "https://dev.to/",
  //   icon: <FaDev />,
  // },
  {
    name: "Email",
    link: "mailto:chizobaog@outlook.com",
    icon: <FaRegEnvelope />,
  },
];

export default function Footer() {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
        Made with{" "}
        <span role="img" aria-label="heart">
          💙
        </span>{" "}
        by{" "}
        <span
        >
          Godspower Okonkwo
        </span>
      </p>
      <div className="flex align-center justify-center mt-4">
        {socials.map((social) => (
          <a
            key={social.link}
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-600"
            href={social.link}
          >
            {social.icon}
            <span class="sr-only">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
