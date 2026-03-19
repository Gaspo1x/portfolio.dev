import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translation";

export default function TimeLine() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const studies = t.academicSection.studies;

  return (
    <section
      id="academic"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >

      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">

          {t.academicSection.title}

      </h2>

      <div className="relative max-w-4xl w-full">

        <div className="absolute left-1/2 -translate-x-1/2 w-1 rounded-2xl bg-white/30 min-h-full hidden md:block"></div>

        {studies.map((study, index) => (
          <div
            key={study.id}
            className={`mb-10 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >

            <div className="md:w-[45%] w-full bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg">
              <span className="text-sm text-gray-300">{study.year}</span>

              <h3 className="text-xl md:text-2xl font-bold text-white mt-1">

                  {study.title}

              </h3>

              <p className="text-md text-gray-300">

                  {study.school}
                  {study.place && ` — ${study.place}`}

              </p>

              {study.certificate && (

                <p className="text-sm mt-1 text-green-400">

                    {study.certificate}

                </p>

              )}

              <p className="mt-2 text-white text-sm">

                  {study.description}

              </p>
              
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}