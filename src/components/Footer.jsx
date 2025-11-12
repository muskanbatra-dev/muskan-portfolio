import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1043.63 592.71"
    className="w-5 h-5 fill-current"
  >
    <path d="M588.67 296.35c0 163.7-131.25 296.35-293.84 296.35S1 460.05 1 296.35 132.25 0 294.83 0s293.84 132.65 293.84 296.35m294.31 0c0 154.02-65.6 279-146.5 279s-146.5-124.98-146.5-279 65.6-279 146.5-279 146.5 124.98 146.5 279m160.65 0c0 142.52-29.27 258.15-65.4 258.15s-65.4-115.63-65.4-258.15S942.1 38.2 978.23 38.2s65.4 115.63 65.4 258.15" />
  </svg>
);

const Footer = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/muskanbatra-dev",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/muskanbatra-dev",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      link: "https://twitter.com/",
    },
    {
      name: "Medium",
      icon: <MediumIcon />,
      link: "https://medium.com/@muskanbatra-dev", 
    },
  ];

  return (
    <footer className="relative w-full border-t border-border/50 bg-background/50 backdrop-blur-sm py-10 mt-20">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between px-6 gap-6">
       
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-primary">Muskan Batra</h3>
          <p className="text-sm text-foreground/60">FullStack Developer</p>
        </div>

        
        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-foreground/70 hover:text-primary transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>

        
        <div className="text-sm text-foreground/50 text-center md:text-right">
          © {new Date().getFullYear()} Muskan Batra. All rights reserved.
        </div>
      </div>

      
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </footer>
  );
};

export default Footer;
