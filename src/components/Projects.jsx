import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translation";
import img1 from "../assets/nmb.webp";

export default function Projects() {
  const [active, setActive] = useState(null);

  const { lang } = useLanguage();
  const t = translations[lang];

  const items = t.projectsSection.items.map((item, i) => ({
    ...item,
    image: [img1][i],
  }));

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="w-full max-w-6xl">
        
        <h2 className="text-3xl font-bold text-white text-center mb-12">

            {t.projectsSection.title}

        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-auto md:h-80">
          {items.map((item, idx) => {
            const isActive = active === idx;

            return (
              <div
                key={idx}
                onClick={() => setActive(isActive ? null : idx)}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer
                  transition-all duration-500 ease-in-out
                  flex-1
                  ${isActive ? "md:flex-3" : "md:flex-1"}
                `}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={`
                    w-full h-64 md:h-full object-cover
                    transition-transform duration-700
                    ${isActive ? "scale-110" : "scale-100"}
                  `}
                />

                <div
                  className={`
                    absolute inset-0 transition-all duration-500
                    ${
                      isActive
                        ? "bg-black/20"
                        : "bg-black/40 md:bg-black/50"
                    }
                  `}
                />

                <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">

                  <h3 className="text-lg font-semibold">

                      {item.title}

                  </h3>

                  <div
                    className={`
                      overflow-hidden transition-all duration-500
                      ${isActive ? "max-h-40 mt-3" : "max-h-0"}
                    `}
                  >
                    <p className="text-sm opacity-90">

                        {item.description}

                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">

                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/20 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                    <div className="flex gap-4 mt-4 text-sm">

                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        {t.projectsSection.demo}
                      </a>

                      <a
                        href={item.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        {t.projectsSection.code}
                      </a>

                    </div>

                  </div>

                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}