/*
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
           
          
          
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
    
   
  
  );
};

export default Navbar;
*/

/*

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSocials, setShowSocials] = useState(false);  // New state for controlling social dropdown visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

      
          <li
            className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            onMouseEnter={() => setShowSocials(true)}
            onMouseLeave={() => setShowSocials(false)}
          >
            Socials
            {showSocials && (
              <ul className="absolute mt-2 bg-black p-2 rounded-lg">
                <li className="text-white">
                  <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="https://github.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="https://twitter.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="https://leetcode.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leetcode
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="https://www.instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="https://discord.com/users/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

      
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white"
                onClick={() => setShowSocials(!showSocials)} // Toggle visibility on click
              >
                Socials
                {showSocials && (
                  <ul className="absolute mt-2 bg-black p-2 rounded-lg">
                    <li className="text-white">
                      <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        href="https://github.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        href="https://twitter.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        href="https://leetcode.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Leetcode
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        href="https://www.instagram.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        href="https://discord.com/users/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Discord
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSocials, setShowSocials] = useState(false); // Social dropdown visibility state

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        ></Link>

        {/* Desktop menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Socials dropdown */}
          <li
            className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            onMouseEnter={() => setShowSocials(true)}
            onMouseLeave={() => setShowSocials(false)}
          >
            Socials
            {showSocials && (
              <ul className="absolute mt-2 bg-black p-2 rounded-lg">
                <li className="text-white">
                  <a
                    href="https://www.linkedin.com/in/kunwar-awadhiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="https://github.com/Kunwar-awadhiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="https://x.com/Kunwar_awadhiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="https://leetcode.com/u/Kunwar_Awadhiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leetcode
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="https://www.instagram.com/kunwar_awadhiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Resume Link */}
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a
              href="/assets/Resume.pdf" // Replace with the actual path to your resume
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Socials dropdown for mobile */}
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white"
                onClick={() => setShowSocials(!showSocials)} // Toggle visibility on click
              >
                Socials
                {showSocials && (
                  <ul className="absolute mt-2 bg-black p-2 rounded-lg">
                    <li className="text-white">
                      <a
                        href="https://www.linkedin.com/in/kunwar-awadhiya"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        href="https://github.com/Kunwar-awadhiya"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        href="https://x.com/Kunwar_awadhiya"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        href="https://leetcode.com/u/Kunwar_Awadhiya/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Leetcode
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        href="https://www.instagram.com/kunwar_awadhiya/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                <a
                  href="/assets/Resume.pdf" // Updated link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
