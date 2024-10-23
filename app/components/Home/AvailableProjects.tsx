import Image from "next/image";
import React from "react";

export default function AvailableProjects() {
  return (
    <section className="flex w-full flex-col gap-5 border-t-2 border-black md:gap-10">
      <div className="flex w-full justify-between pt-10 font-bold">
        <ul className="hidden items-center gap-10 md:flex">
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
        <div className="flex items-center gap-5">
          Available for Projects <span className="flash inline-block h-2 w-2 rounded-full bg-black" />
        </div>
      </div>
      <video autoPlay loop muted preload="none">
        <source src="/video1.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
