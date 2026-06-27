import React, { useState } from "react"
import { SelectMenu } from "@/components/SelectMenu";
import type { ButtonProps } from "@/interfaces/ButtonProps";

const buttons: ButtonProps[] = [
  {
    value: "Start",
    href: "/learn",
    styles: "w-48 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer",
  },
  {
    value: "Import pliku",
    href: "/fileImport",
    styles: "w-48 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer",
  },
];

export const MainPage = () => {
  const [isUnder, setIsUnder] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center mt-52">
      <h1 className="text-4xl font-semibold text-white mb-2 tracking-tight">Wiedznik</h1>
      <p className="text-sm text-white/60 mb-10">Wybierz opcję, aby kontynuować</p>
      <SelectMenu buttons={buttons} isUnder={isUnder} />
    </div>
  );
}
