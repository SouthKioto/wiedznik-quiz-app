import { Button } from "@/components/Button"
import { WordTab } from "@/components/WordTab"
import type { Translations } from "@/interfaces/WordsProps"
import type { ErrorProps } from "@/interfaces/ErrorProps";
import type { ButtonProps } from "@/interfaces/ButtonProps"
import { useState, useEffect } from "react"

interface importedSet {
  setName: string
}

export const Quiz = ({ setName }: importedSet) => {
  const [error, setError] = useState<ErrorProps>({ errorType: '', errorContent: '' });
  const [words, setWords] = useState<Translations[]>([]);
  const [randomWord, setRandomWord] = useState<Translations>();

  const buttonsLeftRight: ButtonProps = {
    value: "Przejdz dalej",
    styles: "w-48 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer",
    onClick: () => { handleGoNext },
  }

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const getDataFromLocalStorage = () => {
    const raw = localStorage.getItem(setName);
    if (!raw) {
      setError({ errorType: 'Empty imported data', errorContent: 'Dane nie zostały zaimportowanie lub zostały usuniete' })
      return;
    }
    const wordsArr: Translations[] = JSON.parse(raw);
    setWords(wordsArr);
    console.log(words);
  }

  const generateRandomWord = () => {

  }

  const handleGoNext = () => {

  }

  return (
    <>
      <div>
        <h1>Quiz Page</h1>
        <WordTab words={words} />
        <Button value={buttonsLeftRight.value} styles={buttonsLeftRight.styles} onClick={buttonsLeftRight.onClick} />
      </div>
    </>
  )
}
