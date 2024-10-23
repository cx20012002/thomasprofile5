"use client";

import React from "react";
import HoverComponent from "./HoverComponent";

export default function ItemComponent() {
  const [isStopped, setIsStopped] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHovered(true);
        setIsStopped(false);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setIsStopped(true);
      }}
      className="relative flex h-[241px] w-full items-center overflow-hidden"
    >
      {hovered ? (
        // Hovered Items
        <HoverComponent isStopped={isStopped} />
      ) : (
        // Original Items
        <div className="flex w-screen items-center text-nowrap px-5">
          <div className="w-2/12 text-sm">/2049</div>
          <div className="w-5/12 text-[50px] font-[500] uppercase">Los Angeles</div>
          <div className="w-5/12 text-right text-sm">3D Design & Motion</div>
        </div>
      )}
    </div>
  );
}
