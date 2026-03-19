import { useInView } from "react-intersection-observer";

export default function LazySection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  return (
    <section
      ref={ref}
      className={`min-h-screen w-full transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
}