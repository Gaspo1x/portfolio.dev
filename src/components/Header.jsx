import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../translations/translation.js";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative flex justify-between items-center px-6 pt-6">

        <h1 className="text-white font-bold text-lg">
          gaspo.dev
        </h1>

        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center px-6 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <ul className="flex gap-8 text-white font-bold text-sm">
            <li>
              <a href="#home" className="hover:opacity-60 transition-all duration-100 whitespace-nowrap">{t.homee}</a>
            </li>
            <li>
              <a href="#about" className="hover:opacity-60 transition-all duration-100 whitespace-nowrap">{t.about}</a>
            </li>
            <li>
              <a href="#projects" className="hover:opacity-60 transition-all duration-100 whitespace-nowrap">{t.projects}</a>
            </li>
            <li>
              <a href="#skills" className="hover:opacity-60 transition-all duration-100 whitespace-nowrap">{t.skills}</a>
            </li>
            <li>
              <a href="#academic" className="hover:opacity-60 transition-all duration-100 whitespace-nowrap">{t.academic}</a>
            </li>
            <li>
              <a href="#contact" className="hover:opacity-60 transition-all duration-100 whitespace-nowrap">{t.contact}</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">

          <button
            onClick={toggleLang}
            className="relative px-3 py-1 rounded-full text-sm font-bold text-white 
            bg-white/10 border border-white/20 backdrop-blur-md
            hover:bg-white/30 transition duration-300 shadow-lg"
          >
            <span
              className={`transition-all duration-300 ${
                lang === "en" ? "opacity-100" : "opacity-60"
              }`}
            >
              EN
            </span>
            {" / "}
            <span
              className={`transition-all duration-300 ${
                lang === "es" ? "opacity-100" : "opacity-60"
              }`}
            >
              ES
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      <div
        className={`lg:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg transition-all duration-300 z-40
        ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-white font-bold">
          <li>
            <a onClick={() => setMenuOpen(false)} href="#home" className="hover:opacity-60 transition-all duration-100 whitespace-nowrap">{t.homee}</a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#about">{t.about}</a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#projects">{t.projects}</a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#skills">{t.skills}</a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#academic">{t.academic}</a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href="#contact">{t.contact}</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;