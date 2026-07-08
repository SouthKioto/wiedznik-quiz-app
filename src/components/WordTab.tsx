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

export const WordTab = ({ word, button }: WordTabProps) => {
  const [isReverse, setIsReverse] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setIsReverse(handleReverse());
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

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors rounded p-6 w-4xl">
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
          <div>
            <Button value={button.value} styles={button.styles} onClick={button.onClick} />
          </div>
        </div>
      </div>

    </div>
  )
}
