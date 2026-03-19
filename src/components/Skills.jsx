import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/js.svg";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import unrealIcon from "../assets/unreal.svg";
import unityIcon from "../assets/unity.svg";
import blenderIcon from "../assets/blender.svg";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translation";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const skills = [
    { name: "HTML", icon: htmlIcon, url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { name: "CSS", icon: cssIcon, url: "https://developer.mozilla.org/es/docs/Web/CSS" },
    { name: "JavaScript", icon: jsIcon, url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { name: "React", icon: reactIcon, url: "https://react.dev/" },
    { name: "Tailwind CSS", icon: tailwindIcon, url: "https://tailwindcss.com/docs/installation/using-vite" },
    { name: "Unreal Engine", icon: unrealIcon, url: "https://www.unrealengine.com/es-ES" },
    { name: "Unity", icon: unityIcon, url: "https://unity.com/es" },
    { name: "Blender", icon: blenderIcon, url: "https://www.blender.org/" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="text-center max-w-6xl w-full">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">

            {t.skillsSection.title}

        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-12 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >

              <img
                src={skill.icon}
                alt={skill.name}
                loading="lazy"
                className="w-10 h-10 mb-3 transition-transform duration-500 group-hover:scale-200 group-hover:rotate-360 group-hover:translate-y-3"
              />

              <p className="text-sm font-medium text-center transition duration-400 group-hover:opacity-0">

                  {skill.name}

              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}