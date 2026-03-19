import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translation";

const About = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-1 px-6"
    >
      <div className="max-w-3xl w-full text-center">

        <h2 className="text-3xl font-bold text-white mb-12">
          {t.aboutSection.title}
        </h2>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-12 shadow-xl">
          <p className="text-white text-lg leading-relaxed space-y-4">

            <span className="block">

                {t.aboutSection.text1}

            </span>

            <span className="block">

                {t.aboutSection.text2}

            </span>

            <span className="block">

                {t.aboutSection.text3}
                
            </span>

          </p>
        </div>

      </div>
    </section>
  );
};

export default About;