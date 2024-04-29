import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../App";
import { logo } from "../assets/images";
import { PrimaryLinks } from "../constants";
import { Button } from "../components/Button";
import { NavLink, useLocation } from "react-router-dom";
import { burger_menu } from "../assets/icons";

export const NavBar = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useContext(Context);
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeSticky = scrollPosition >= window.innerHeight;
      setIsHeaderSticky(shouldBeSticky);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const [navOpen, setNavOpen] = useState(false);

  const menuRef = useRef(null);

  const handleOpenMenu = (event) => {
    event.stopPropagation();
    setNavOpen(!navOpen);
  };

  const handleCloseMenu = () => {
    setNavOpen(false);
  };

  return (
  <header className={`${isHeaderSticky ? 'sticky top-0 shadow-xl !border-0' : ''} w-full z-40 transition-all bg-light-cream border-b-2 border-dark-cream border-opacity-20`}>
      <nav className="w-full h-[60px] padding-x max-container m-auto flex justify-between">
        <img id="logo" src={logo} height={49} alt="OneSmile logo mr-auto" />
        <div className="flex items-center gap-12">
          <ul
            ref={menuRef}
            className={`duration-300 flex items-center gap-12 font-light z-20 absolute lg:relative lg:bottom-0 lg:w-fit flex-col lg:flex-row w-full left-0 lg:bg-transparent bg-primary ${
              navOpen ? "top-[60px] py-12 shadow-xl " : "bottom-full"
            }`}
          >
            <div className={`flex gap-6 ${navOpen && 'w-full flex-col text-center'}`}>
              {PrimaryLinks[selectedLanguage].map((navLink) => (
                <li key={navLink.name} className={`${font} nav-links text-gray-600 ${navOpen ? 'w-full text-white-smoke' : ''}`}>
                  <NavLink to={navLink.path} onClick={handleCloseMenu}>{navLink.name}</NavLink>
                </li>
              ))}
            </div>
            <Button
              className={'nav-links'}
              primary
              label={{ FR: "rendez-vous.", AR: "احجز موعدا" }}
              path={"#rendez-vous"}
              nav = {navOpen}
            />
          </ul>

          <select
            name="language"
            id="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="bg-light-cream font-light nav-links"
          >
            <option value="AR">AR</option>
            <option value="FR">FR</option>
          </select>
          <img
            src={burger_menu}
            height={25}
            width={25}
            className="cursor-pointer lg:hidden"
            onClick={handleOpenMenu}
            alt="nav menu icon"
          />
        </div>
      </nav>
    </header>
  );
};
