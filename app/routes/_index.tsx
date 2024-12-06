// app/routes/_index.tsx
import { useEffect, useRef } from "react";
import { useHydrated } from "~/hooks/useHydrated";
import type { AnimationItem } from "lottie-web";

export default function Index() {
  const container = useRef<HTMLDivElement>(null);
  const isHydrated = useHydrated();

  useEffect(() => {
    let anim: AnimationItem | null = null; // Store animation reference

    async function loadAnimation() {
      if (container.current && isHydrated) {
        try {
          const LottieModule = await import("lottie-web");
          const lottie = LottieModule.default;

          anim = lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/animations/lottie/beaver.json",
          });
        } catch (error) {
          console.error("Error loading Lottie:", error);
        }
      }
    }

    loadAnimation();

    // Cleanup function
    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [isHydrated]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div ref={container} className="w-64 h-64 mx-auto mb-8" />
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Jotain Upeaa on Tulossa
        </h1>
        <p className="text-xl text-blue-900 mb-8">
          Asuntoapuri helpottaa asuntolainojen kilpailutusta ja kodin etsimistä.
          Pian saat parhaat lainatarjoukset ja unelmakotisi yhdellä
          vaivattomalla ratkaisulla!
        </p>
        <div className="flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"
              style={{
                animationDelay: `${i * 200}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
