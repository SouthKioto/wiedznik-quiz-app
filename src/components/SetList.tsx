import React, { useEffect, useState } from "react"
import type { localStorageProps } from "@/interfaces/WordsProps";
import { Button } from "./Button";
import { Link } from "react-router";


export const SetList = () => {
  const [wordsSet, setWordsSet] = useState<localStorageProps[]>();

  useEffect(() => {
    const userSets = localStorage.getItem("userSets");
    if (!userSets) return;

    const wordsArr: localStorageProps[] = JSON.parse(userSets);

    setWordsSet(wordsArr);
  }, [])

  return (
    <>
      <div className="px-6 pt-6">
        <Button
          value="← Powrót"
          href="/"
          styles="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-10 px-4">
        <div className="bg-white/70 p-4 sm:p-6 rounded border-white border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
          {wordsSet?.length === 0 ? (
            <div className="col-span-full text-center">
              Nie posiadasze jeszcze zadnych zestawow
            </div>
          ) : (
            <>
              <h1 className="col-span-full text-center text-lg sm:text-xl">Twoje zestawy</h1>
              {wordsSet?.map((word, index) => (
                <Link to={`/learn/${word.name}`} key={index}>
                  <ul className="bg-white p-6 sm:p-10 rounded cursor-pointer">
                    <p className="text-lg sm:text-xl mb-4 text-center">Zestaw: {word.name}</p>
                    <div className="grid grid-cols-3 gap-1">
                      {word.content.map((content, contentIndex) => (
                        <React.Fragment key={contentIndex}>
                          <p className="text-sm text-black">{content.eng}</p>
                          <p className="text-sm text-black/30 text-center">—</p>
                          <p className="text-sm text-black text-right">{content.pl}</p>
                        </React.Fragment>
                      ))}
                    </div>
                  </ul>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}


