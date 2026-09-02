import type { TenseProps } from "@/interfaces/TenseProps";
import { useState } from "react";

interface TensesListProps {
  tensesList: TenseProps[];
}

export const TensesList = ({ tensesList }: TensesListProps) => {
  const [isOpenTitle, setIsOpenTitle] = useState<string | null>();

  const handleIrregularIsSet = (form: string): boolean => {
    if (!form || form.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSetOpenTitle = (title: string) => {
    setIsOpenTitle((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {tensesList.map((tense, index) => {
        const isOpen = tense.title === isOpenTitle;
        return (
          <div
            className={`bg-white/25 rounded-xl border-white border flex flex-col w-full/75 mx-6 mt-5 px-5 py-2 ${!isOpen ? "hover:bg-white/75 hover:scale-102 focus:transition-all not-focus:transition-all hover:shadow-black hover:shadow" : ""}`}
            key={index}
          >
            <div onClick={() => handleSetOpenTitle(tense.title)}>
              <div
                className={`${isOpen ? "pb-6" : ""} text-center text-2xl cursor-pointer`}
              >
                <h1>{tense.title}</h1>
              </div>
            </div>

            {isOpen && (
              <div>
                <div>
                  <h1>Description</h1>
                  <div>{tense.description}</div>
                </div>

                <div className="mt-5">
                  <div className="font-bold text-xl text-center mb-2">
                    Budowa:{" "}
                  </div>
                  <div className="bg-amber-200/70 border border-amber-400 rounded text-center p-6">
                    {handleIrregularIsSet(tense.form.irregular) ? (
                      <div className="grid grid-cols-2 ">
                        <div className="border-r">
                          Regularne:
                          <span className="block font-mono text-center font-bold">
                            {tense.form.regular}
                          </span>
                        </div>

                        <div>
                          Nie regularne:
                          <span className="block font-mono text-center font-bold">
                            {tense.form.irregular}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div>
                          Regularne:
                          <span className="block font-mono text-center font-bold">
                            {tense.form.regular}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-10">
                  <div className="font-bold text-xl text-center mb-2">
                    Przyklady:
                  </div>

                  <div className="mt-4">
                    <div className="bg-green-200/70 border border-green-300 rounded  p-6">
                      <div>Zdanie pozytywne:</div>
                      <div className="text-center capitalize font-mono font-bold">
                        {tense.example.exampleAffirmative}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="bg-red-200/70 border border-red-400 rounded  p-6">
                      <div>Zdanie negatywne:</div>
                      <div className="text-center capitalize font-mono font-bold">
                        {tense.example.exampleNegative}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="bg-blue-200/70 border border-blue-400 rounded  p-6">
                      <div>Zdanie pytajace:</div>
                      <div className="text-center capitalize font-mono font-bold">
                        {tense.example.exampleInterrigatve}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
