import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translation";

const Home = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="text-center max-w-3xl w-full">

        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          <TypeAnimation
            key={lang}
            sequence={t.home.sequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

      </div>
    </section>
  );
};

export default Home;