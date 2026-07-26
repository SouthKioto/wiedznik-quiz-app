import React, { useEffect, useRef, useState } from "react"
import type { localStorageProps } from "@/interfaces/WordsProps";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router";
import type { ButtonProps } from "@/interfaces/ButtonProps";

export const SetList = () => {
  const setNameRef = useRef(null);
  const navigate = useNavigate();
  const [wordsSet, setWordsSet] = useState<localStorageProps[]>();
  const [wordsVisible, setWordsVisible] = useState<boolean>(false);
  const [selectedSet, setSelectedSet] = useState<string>();

  useEffect(() => {
    const userSets = localStorage.getItem("userSets");
    if (!userSets) return;

    const wordsArr: localStorageProps[] = JSON.parse(userSets);

    setWordsSet(wordsArr);
  }, [])


  const handleRemoveSet = (data: string) => {

    wordsSet?.find((name) => {
    })
    console.log(data);
  }

  const handleShowWords = (name: string) => {
    setSelectedSet(name);
    setWordsVisible(!wordsVisible);
  }

  const getButtons = (setName: string): ButtonProps[] => [
    {
      value: "Usuń",
      styles: `w-48 my-2 py-2 rounded-lg backdrop-blur-md border bg-red-500/20 border-red-500/30 text-red-500 text-sm font-medium hover:bg-red-500/30 transition-colors cursor-pointer`,
      onClick(e) {
        e?.stopPropagation();
        handleRemoveSet(setName);
      },
    },
    {
      value: "Podglad słówek",
      styles: `w-48 my-2 mb-4 py-2 rounded-lg backdrop-blur-md border bg-blue-500/20 border-blue-500/30 text-blue-500 text-sm font-medium hover:bg-blue-500/30 transition-colors cursor-pointer`,
      onClick(e) {
        e?.stopPropagation();
        handleShowWords(setName);
      },
    }
  ];

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
        <div className="bg-white/70 p-4 sm:p-6 rounded border-white border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-4 sm:gap-6 w-full max-w-5xl">
          {wordsSet?.length === 0 ? (
            <div className="col-span-full text-center">
              Nie posiadasze jeszcze zadnych zestawow
            </div>
          ) : (
            <>
              <h1 className="col-span-full text-center text-lg sm:text-xl">Twoje zestawy</h1>
              {wordsSet?.map((word) => (
                <div key={word.name} className="self-start">
                  <div
                    className="bg-white p-6 sm:p-10 rounded cursor-pointer"
                    onClick={() => navigate(`/learn/${word.name}`)}
                  >
                    <p className="text-lg sm:text-xl mb-4 text-center">
                      Zestaw: {word.name}
                    </p>

                    {getButtons(word.name).map((button) => (
                      <div key={button.value} className="justify-center text-center">
                        <Button
                          value={button.value}
                          styles={button.styles}
                          onClick={button.onClick}
                        />
                      </div>
                    ))}
                  </div>

                  {wordsVisible && word.name === selectedSet && (
                    <div className="bg-white mt-2 p-4 rounded">
                      <div className="grid grid-cols-3 gap-1">
                        {word.content.map((content, contentIndex) => (
                          <React.Fragment key={contentIndex}>
                            <p>{content.eng}</p>
                            <p className="text-center text-black/30">—</p>
                            <p className="text-right">{content.pl}</p>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}


