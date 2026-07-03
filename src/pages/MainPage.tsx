import React, { useEffect, useState } from "react"
import { SelectMenu } from "@/components/SelectMenu";
import type { ButtonProps } from "@/interfaces/ButtonProps";
import { Input } from "@/components/Input";
import type { InputProps } from "@/interfaces/InputProps";


export const MainPage = () => {
  const [isUnder, setIsUnder] = useState(true);
  const [startDisbl, setStartDisbl] = useState<boolean>(true);
  const [inputBorderdAndBackGr, setInputBorderdAndBackGr] = useState<string>("bg-white/20 border-white/30 text-white")
  const [setName, setSetName] = useState<string>("")

  useEffect(() => {
    setSetName("")
    setStartDisbl(true);
  }, [])

  const buttons: ButtonProps[] = [
    {
      value: "Start",
      href: "/learn",
      isDisabled: startDisbl,
      styles: `w-48 py-2 rounded-lg backdrop-blur-md border ${inputBorderdAndBackGr} text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer`,
      onClick: () => handleChangeStyles
    },
    {
      value: "Import pliku",
      href: "/fileImport",
      styles: "w-48 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer",
    },
  ];

  const input: InputProps = {
    value: "Podaj nazwe zestawu",
    styles: "w-80 p-3 mb-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer",
    type: "text",
    onChange: (e: any) => handleChangeEnable(e.target.value),
  }

  const handleChangeStyles = () => {
    if (!startDisbl) {
      setInputBorderdAndBackGr("bg-red/20 border-red/30 text-red")
    }

    setInputBorderdAndBackGr("bg-white/20 border-white/30 text-white")
  }

  const handleChangeEnable = (e: any) => {
    console.log(e);
    if (e.length <= 0) {
      setSetName("")
      setStartDisbl(true);
      return;
    }

    setStartDisbl(false);
    setSetName(e);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-52">
      <h1 className="text-4xl font-semibold text-white mb-2 tracking-tight">Wiedznik</h1>
      <p className="text-sm text-white/60 mb-10">Wybierz opcję, aby kontynuować</p>
      <Input
        value={input.value}
        styles={input.styles}
        type={input.type}
        onChange={input.onChange}
      />
      <SelectMenu buttons={buttons} isUnder={isUnder} />
    </div>
  );
}
