import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function seamlessScroll(containerSelector: string, itemSelector: string, duration: number = 30, stop?: boolean) {
  useGSAP((_, contextSafe) => {
    const container = document.querySelector(containerSelector) as HTMLElement;
    const item = document.querySelector(itemSelector) as HTMLElement;

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
      if (animation) animation.kill(); // Kill the previous animation

      // Reset the container's position back to 0
      gsap.set(container, { x: 0 });

      // Start the animation from the beginning
      animation = gsap.to(container, {
        x: -totalWidth,
        duration,
        ease: "none",
        repeat: -1,
      });
    };

    const handleResize = contextSafe(() => {
      calculateWidth();
      startAnimation();
    });

    // Initial setup
    calculateWidth();
    cloneItems();
    startAnimation();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animation) animation.kill(); // Ensure GSAP instance is killed
    };
  }); // Run the effect whenever any of these dependencies change
}
