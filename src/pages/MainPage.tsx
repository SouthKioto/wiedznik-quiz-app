import React, { useEffect, useState } from "react";
import { SelectMenu } from "@/components/SelectMenu";
import type { ButtonProps } from "@/interfaces/ButtonProps";
import { Input } from "@/components/Input";
import type { InputProps } from "@/interfaces/InputProps";
import zaba from "../images/zaba.gif";
import { toast, ToastContainer } from "react-toastify";
import type { localStorageProps } from "@/interfaces/WordsProps";
import { useNavigate } from "react-router";

export const MainPage = () => {
  const navigate = useNavigate();
  const [isUnder, setIsUnder] = useState(true);
  const [startDisbl, setStartDisbl] = useState<boolean>(true);
  const [startBtnCoursor, setStartBtnCoursor] =
    useState<string>("cursor-not-allowed");
  const [setName, setSetName] = useState<string>("");

  useEffect(() => {
    setSetName("");
    setStartDisbl(true);
  }, []);

  const handleChangeEnable = (value: string) => {
    const trimmedValue = value.trim();

    setSetName(value);

    if (trimmedValue.length <= 0) {
      setStartDisbl(true);
      setStartBtnCoursor("cursor-not-allowed");
      return;
    }

    setStartBtnCoursor("cursor-pointer");
    setStartDisbl(false);
  };

  const handleCheckSetExist = () => {
    const name = "userSets";
    const raw = localStorage.getItem(name);
    const localData: localStorageProps[] = raw ? JSON.parse(raw) : [];
    const found = localData.find((element) => element.name === setName);

    if (!found) {
      toast.error("Nie posiadasz zestawu o takiej nazwie", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    navigate(`/learn/${setName}`);
  };

  const buttons: ButtonProps[] = [
    {
      value: "Start",
      isDisabled: startDisbl,
      styles: `w-48 py-2 rounded-lg backdrop-blur-md border bg-white/20 border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors ${startBtnCoursor}`,
      onClick: handleCheckSetExist,
    },
    {
      value: "Import pliku",
      href: "/fileImport",
      styles:
        "w-48 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer",
    },
    {
      value: "Twoje zestawy",
      href: "/sets",
      styles:
        "w-48 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer",
    },
    {
      value: "Czasy powtorka",
      href: "/tenses-revision",
      styles:
        "w-48 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer",
    },
  ];

  const input: InputProps = {
    value: setName,
    placeholder: "Podaj nazwe zestawu",
    styles:
      "w-80 p-3 mb-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer",
    type: "text",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      handleChangeEnable(e.target.value),
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
      <ToastContainer />
      <div>
        <img src={zaba} className="w-32 sm:w-40 md:w-48 h-auto" />
      </div>
      <div className="flex flex-col items-center w-full max-w-sm">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-2 tracking-tight text-center">
          Wiedznik
        </h1>
        <p className="text-sm text-white/60 mb-8 sm:mb-10 text-center">
          Wybierz opcję, aby kontynuować
        </p>
        <Input
          value={input.value}
          placeholder={input.placeholder}
          styles={input.styles}
          type={input.type}
          onChange={input.onChange}
        />
        <SelectMenu buttons={buttons} isUnder={isUnder} />
      </div>
    </div>
  );
};
