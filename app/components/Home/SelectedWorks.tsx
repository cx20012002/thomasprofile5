import React from "react";
import ItemComponent from "./ItemComponent";

export default function SelectedWorks() {
  return (
    <section>
      <div className="flex w-full flex-col divide-y-[2px] divide-black">
        <div className="relative flex w-full flex-col divide-y-2 divide-black">
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
        </div>
      </div>
    </section>
  );
}
