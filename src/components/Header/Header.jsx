import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Logo from "../../assets/Common/Logo.png";
import Logo2 from "../../assets/Common/Logo_2.png";

const Header = () => {
  const { t } = useTranslation("common");
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";

  // Get dynamic nav & button from translations
  const navItems = t("header.links", { returnObjects: true });
  const contactButton = t("header.button", { returnObjects: true });

  // UI Styling Rules
  const styles = {
    headerBg: isHome ? "bg-white" : "bg-[#253672]",
    textColorDesktop: isHome ? "text-[#26316A]" : "text-white",
    hamburgerColor: isHome ? "bg-[#253672]" : "bg-white",
    mobileBg: isHome ? "bg-white" : "bg-[#253672]",
    mobileText: isHome ? "text-[#26316A]" : "text-white",
    button: isHome
      ? "bg-[#253672] text-white hover:bg-[#1a2555]"
      : "bg-white text-[#253672] hover:bg-white/90",
    logo: isHome ? Logo : Logo2
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4">
      <div
        className={`${styles.headerBg} flex items-center justify-between max-w-4xl mx-auto px-6 py-2 rounded-full mt-6 transition-all`}
      >
        {/* Logo */}
        <img src={styles.logo} alt="logo" className="w-24" />

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center font-[PoppinsRegular] ${styles.textColorDesktop}`}>
          {navItems.map(({ label, path }, i) => (
            <HashLink
              key={i}
              smooth
              to={path}
              className="mx-4 hover:opacity-90 transition duration-150"
            >
              {label}
            </HashLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <HashLink smooth to={contactButton.path} className="hidden md:block">
          <button className={`${styles.button} py-2 px-6 rounded-full transition duration-150`}>
            {contactButton.label}
          </button>
        </HashLink>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex justify-center items-center"
        >
          <span
            className={`${styles.hamburgerColor} h-[3px] w-7 rounded-full absolute transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`${styles.hamburgerColor} h-[3px] w-7 rounded-full absolute transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${styles.mobileBg} md:hidden mt-2 mx-auto max-w-5xl rounded-2xl py-4 shadow-lg text-center animate-fadeIn`}
        >
          {/* Mobile Links */}
          {navItems.map(({ label, path }, i) => (
            <HashLink
              key={i}
              smooth
              to={path}
              onClick={() => setOpen(false)}
              className={`block py-2 ${styles.mobileText} hover:opacity-80 transition duration-150`}
            >
              {label}
            </HashLink>
          ))}

          {/* Mobile Button */}
          <HashLink smooth to={contactButton.path}>
            <button
              onClick={() => setOpen(false)}
              className={`${styles.button} py-2 px-6 rounded-full mt-3 transition duration-150`}
            >
              {contactButton.label}
            </button>
          </HashLink>
        </div>
      )}
    </header>
  );
};

export default Header;
