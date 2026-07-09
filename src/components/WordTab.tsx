import type { Translations } from "@/interfaces/WordsProps"
import { useState, useEffect } from "react"
import { Input } from "./Input";
import type { InputProps } from "@/interfaces/InputProps";
import { Button } from "./Button";
import type { ButtonProps } from "@/interfaces/ButtonProps";

interface WordTabProps {
  word: Translations,
  button: ButtonProps,
}

interface colorsAndAnimations {
  color: string,
  animation: string
}

interface answersStyles {
  default: colorsAndAnimations,
  badAnswer: colorsAndAnimations,
  goodAnswer: colorsAndAnimations
}

const tabColors: answersStyles = {
  default: {
    color: "bg-white/20 border-white/30 text-white hover:bg-white/30",
    animation: "none"
  },
  badAnswer: {
    color: "bg-red-300/20 border-red-500/30 text-red-500 hover:bg-red-400/30",
    animation: "animate-shake"
  },
  goodAnswer: {
    color: "bg-green-300/20 border-green-500/30 text-green-500 hover:bg-green-400/30",
    animation: "animate-correct"
  },
}

export const WordTab = ({ word, button }: WordTabProps) => {
  const [isReverse, setIsReverse] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [answerStyle, setAnswerStyle] = useState<colorsAndAnimations>(tabColors.default)
  const [wordPl, setWordPl] = useState<string>(word.pl);
  const [wordEng, setWordEng] = useState<string>(word.eng);
  let [attemptCount, setAttemptCount] = useState<number>(0);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    setIsReverse(handleReverse());
    setAnswerStyle(tabColors.default)
    setInputValue("");
    setWordEng(word.eng);
    setWordPl(word.pl);
    setIsLocked(false);
    setShowAnswer(false);
  }, [word])

  const input: InputProps = {
    value: inputValue,
    placeholder: `Wpisz tłumaczenie w języku ${isReverse ? "Polskim" : "Angielskim"}`,
    styles: "w-full p-3 mb-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer",
    type: "text",
    onChange: (e: any) => handleInputChange(e.target.value)
  }

  const handleInputChange = (e: any) => {
    if (e.length <= 0) {
      setInputValue("")
      return;
    }

    setInputValue(e);
  }

  const handleReverse = (): boolean => {
    let random = Math.floor(Math.random() * 10);

    if (random % 2 == 0) return true;
    else return false;
  }

  const handleCheckWord = () => {
    if (isLocked) return;
    let goodAnswer = !isReverse ? wordPl : wordEng;

    if (inputValue.toLowerCase().trim() !== goodAnswer.toLowerCase().trim()) {
      setAnswerStyle(tabColors.badAnswer);
      setAttemptCount(prev => prev + 1)
      return;
    }

    setAnswerStyle(tabColors.goodAnswer);
    setIsLocked(true);
    setTimeout(() => {
      button?.onClick?.();
    }, 2000)
  }

  const handleShowGoodAnswer = () => {
    setShowAnswer(true);

    setTimeout(() => {
      button?.onClick?.();
    }, 3000)
  }

  return (
    <div key={attemptCount} className="flex justify-center items-center focus:border-none" tabIndex={-1} onKeyDown={e => {
      if (e.key == "Enter") {
        handleCheckWord();
      }
    }}>
      <div className={`${answerStyle.color} ${answerStyle.animation} backdrop-blur-md border text-sm font-medium transition-colors rounded p-6 w-4xl`}>
        {isReverse ? (
          <>
            <p className="uppercase p-6 mb-4 text-center text-3xl">{word.pl}</p>
            <Input
              value={inputValue}
              placeholder={input.placeholder}
              styles={input.styles}
              type={input.type}
              onChange={input.onChange} />
          </>
        ) : (
          <>
            <p className="uppercase p-6 mb-4 text-center text-3xl">{word.eng}</p>
            <Input
              value={inputValue}
              placeholder={input.placeholder}
              styles={input.styles}
              type={input.type}
              onChange={input.onChange} />
          </>
        )}
        <div className="">
          {showAnswer ? (
            <h1>Poprawna odpowiedz: <span className="underline font-bold"> {isReverse ? wordEng : wordPl} </span></h1>
          ) : (
            <></>
          )
          }
          <div className="text-right">
            <Button value={button.value} styles={button.styles} onClick={handleShowGoodAnswer} />
          </div>
        </div>
      </div>

    </div>
  )
}
