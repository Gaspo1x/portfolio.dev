import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translation";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    emailjs.init("8yJvFI_nraGsq1Rbt");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status !== "idle") return;

    setStatus("loading");

    emailjs
      .send(
        "service_lwy2ner",
        "template_3u8zqe8",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setStatus("idle"), 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">

          <h2 className="text-4xl font-bold leading-tight">

              {t.contactSection.title}

          </h2>

          <p className="text-gray-400 text-lg">

              {t.contactSection.subtitle}

          </p>

          <div className="flex gap-6 pt-4">

            <a
              href="https://github.com/Gaspo1x"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white/10 border border-white/20 
               hover:bg-white/5 transition focus:outline-none 
                focus:ring-2 focus:ring-blue-500"
            >
              <FaGithub className="text-2xl transition-transform duration-300 group-hover:scale-110" />
            </a>

            <a
              href="https://www.linkedin.com/in/gasparassante/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white/10 border border-white/20 
               hover:bg-white/5 transition focus:outline-none 
                focus:ring-2 focus:ring-blue-500"
            >
              <FaLinkedin className="text-2xl transition-transform duration-300 group-hover:scale-110" />
            </a>
            
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl"
        >
          <input
            type="text"
            name="name"
            placeholder={t.contactSection.form.name}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder={t.contactSection.form.email}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />

          <textarea
            name="message"
            placeholder={t.contactSection.form.message}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
          />

          <button
            type="submit"
            disabled={status !== "idle"}
            className={`relative w-full py-4 rounded-lg font-semibold flex items-center justify-center overflow-hidden transition-all duration-300
            ${
              status === "idle"
              ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              : "bg-blue-600 opacity-70 cursor-not-allowed"
            }`}
          >

            <span
              className={`absolute w-10 h-10 bg-green-500 rounded-full transition-all duration-700 ease-out
              ${status === "success" ? "scale-[25] opacity-100" : "scale-0 opacity-0"}`}
            />

            <span
              className={`absolute w-10 h-10 bg-red-500 rounded-full transition-all duration-700 ease-out
              ${status === "error" ? "scale-[25] opacity-100" : "scale-0 opacity-0"}`}
            />

            {status === "loading" && (
              <span className="absolute w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}

            {status === "error" && (
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm z-20"></span>
            )}

            <span
              className={`z-10 transition-all duration-300 ${
              status !== "idle" ? "opacity-0" : "opacity-100"
            }`}
            >

                {t.contactSection.form.send}

            </span>

            <svg
              className={`absolute w-6 h-6 text-white z-10 transition-all duration-500
              ${status === "success" ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >

              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />

            </svg>

            <svg
              className={`absolute w-6 h-6 text-white z-10 transition-all duration-500
              ${status === "error" ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >

              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}