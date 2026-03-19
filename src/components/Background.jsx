import { useInView } from "react-intersection-observer";

export default function Background() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="fixed inset-0 -z-10">
      {inView && (
        <iframe
          src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq"
          className="w-full h-full border-none pointer-events-none"
        />
      )}
    </div>
  );
}