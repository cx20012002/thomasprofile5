"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Banner() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      if (!ref.current) return;
      const img = ref.current?.querySelector("img");

      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop, isMobile } = context.conditions;
          isDesktop &&
            ScrollTrigger.create({
              trigger: ref.current,
              start: "top top",
              end: "+=2px top",
              scrub: 1.1,
              onEnter: () => setIsScrolled(true),
              onEnterBack: () => setIsScrolled(false),
            });
        },
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative w-full md:h-[70vh]">
      <div className="sticky top-0 py-5 md:py-10">
        <div
          className={`relative flex ${isScrolled ? "md:flex-row md:items-center" : "md:flex-col"} justify-between gap-[31px]`}
        >
          <Image
            src={"/logo.avif"}
            alt="logo"
            width={500}
            height={200}
            className={`${isScrolled ? "md:w-[76px]" : "md:w-full"} w-[76px] transition-all duration-500 ease-in-out`}
          />
          <ul className="flex justify-end gap-5 text-sm font-bold md:text-[16px]">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
