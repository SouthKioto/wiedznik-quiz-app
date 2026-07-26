import { Button } from "@/components/Button"
import { WordTab } from "@/components/WordTab"
import type { Translations } from "@/interfaces/WordsProps"
import type { ErrorProps } from "@/interfaces/ErrorProps";
import type { ButtonProps } from "@/interfaces/ButtonProps"
import { useState, useEffect } from "react"
import { useParams } from "react-router";



export const Quiz = () => {
  const { setName } = useParams<{ setName: string }>()
  const [error, setError] = useState<ErrorProps>({ errorType: '', errorContent: '' });
  const [words, setWords] = useState<Translations[]>([]);
  const [randomWord, setRandomWord] = useState<Translations | null>(null);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  useEffect(() => {
    if (words.length > 0) {
      generateRandomWord(words);
    }
  }, [words]);

  const getDataFromLocalStorage = () => {
    if (!setName) {
      return;
    }

    const data: [] = JSON.parse(localStorage.getItem("userSets"));

    if (!data) {
      setError({ errorType: 'Empty imported data', errorContent: 'Dane nie zostały zaimportowanie lub zostały usuniete' });
      return;
    }

    const selectedSet = data.filter((setData) => {
      return setData.name == setName;
    })

    const wordsArr: Translations[] = selectedSet[0].content;
    setWords(wordsArr);
  }

  const generateRandomWord = (wordsList: Translations[]) => {
    if (wordsList.length === 0) return;

    let pool = wordsList;
    if (wordsList.length > 1 && randomWord) {
      pool = wordsList.filter(w => w !== randomWord);
    }

    const idx = Math.floor(Math.random() * pool.length);
    const word = pool[idx];
    if (word) {
      setRandomWord(word);
    }
  };

  const handleGoNext = () => {
    generateRandomWord(words);
  }

  const buttonsLeftRight: ButtonProps = {
    value: "Nie wiesz? Przejdz dalej",
    styles: "w-48 py-2 mt-5 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer",
    onClick: handleGoNext,
  }

  if (error.errorType) {
    return (
      <div className="flex justify-center items-center">
        <div className="bg-red-500/70 rounded p-6">
          <p>{error.errorContent}</p>
        </div>
      </div>
    )
  }

  if (!randomWord) {
    return <p>Ładowanie...</p>;
  }

  return (
    <>
      <div className="px-6 pt-6">
        <Button
          value="← Powrót"
          href="/"
          styles="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
        />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="mt-6 w-full max-w-2xl px-4">
          <WordTab word={randomWord} button={buttonsLeftRight} />
        </div>
      </div>
    </>

  )
}
