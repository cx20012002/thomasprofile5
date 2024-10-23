import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HoverComponent({ isStopped }: { isStopped: boolean }) {
  useGSAP(
    (_, contextSafe) => {
      const container = document.querySelector(".scroll-container") as HTMLElement;
      const item = document.querySelector(".scroll-item") as HTMLElement;

      let totalWidth = 0;
      let animation: GSAPTween;

      const cloneItems = () => {
        const cloneFirst = item.cloneNode(true);
        container.appendChild(cloneFirst);
      };

      const calculateWidth = () => {
        totalWidth = item.offsetWidth;
      };

      const startAnimation = () => {
        if (animation) animation.kill();
        gsap.set(container, { x: 0 });

        animation = gsap.to(container, {
          x: -totalWidth,
          duration: 10,
          ease: "none",
          repeat: -1,
        });
      };

      const handleResize = contextSafe(() => {
        calculateWidth();
        startAnimation();
      });

      calculateWidth();
      cloneItems();
      startAnimation();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (animation) animation.kill();
      };
    },
    [isStopped],
  );

  return (
    <div className="scroll-container group absolute flex h-full text-white">
      <div className="scroll-item flex h-full w-screen items-center text-nowrap px-5">
        <div className="w-2/12 text-sm">/2049</div>
        <div className="w-5/12 text-[50px] font-[500] uppercase">Los Angeles</div>
        <div className="w-5/12 text-right text-sm">3D Design & Motion</div>
      </div>
      <div className="absolute bottom-0 -z-10 h-0 w-full bg-black transition-all duration-300 group-hover:h-full" />
    </div>
  );
}
