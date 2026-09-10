import type { TenseProps } from "@/interfaces/TenseProps";
import { useState } from "react";

interface TensesListProps {
  tensesList?: TenseProps[];
  onClick: (e: any) => void;
}

export const TensesListOnlyTitles = ({
  tensesList,
  onClick,
}: TensesListProps) => {
  return (
    <>
      {tensesList.map((tense, index) => {
        return (
          <div
            className={`bg-white/25 rounded-xl border-white border flex flex-col w-full/75 mx-6 mt-5 px-5 py-2 hover:bg-white/75 hover:scale-102 focus:transition-all not-focus:transition-all hover:shadow-black hover:shadow`}
            key={index}
          >
            <div onClick={onClick}>
              <div
                className={`text-center text-2xl cursor-pointer font-mono font-bold`}
              >
                <h1>{tense.title}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
