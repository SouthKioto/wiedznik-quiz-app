import { use, useEffect, useState } from "react"
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

      <div className="flex flex-col items-center justify-center mt-10" >
        <div className="bg-white/70 p-6 rounded border-white border grid grid-cols-3 gap-6">
          <h1 className="col-span-3 text-center">Twoje zestawy</h1>
          {wordsSet?.map((word, index) => (
            <>
              <Link to={`/learn/${word.name}`} >
                <ul className="bg-white p-10 rounded cursor-pointer">
                  <p key={index} className="text-xl mb-4 text-center">Zestaw: {word.name}</p>
                  <div className="grid grid-cols-3 gap-1">
                    {word.content.map((content, index) => (
                      <>
                        <p key={`eng-${index}`} className="text-sm text-black">{content.eng}</p>
                        <p key={`sep-${index}`} className="text-sm text-black/30 text-center">—</p>
                        <p key={`pl-${index}`} className="text-sm text-black text-right">{content.pl}</p>
                      </>
                    ))}
                  </div>
                </ul>
              </Link>
            </>

          ))}

        </div>
      </div>

    </>
  )
}


