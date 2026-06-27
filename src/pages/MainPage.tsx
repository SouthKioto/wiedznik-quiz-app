import React, { useState } from "react"
import { SelectMenu } from "@/components/SelectMenu";
import type { ButtonProps } from "@/interfaces/ButtonProps";


const buttons: ButtonProps[] = [{
  value: "Start",
  href: "/learn",
  styles: "bg-linear-to-r from-blue-500 to-yellow-500 rounded pr-6 pl-6 pt-1 pb-1 mt-4 w-50 cursor-pointer",
},
{
  value: "Import pliku",
  href: "/fileImport",
  styles: "bg-linear-to-r from-yellow-500 to-blue-500 rounded pr-6 pl-6 pt-1 pb-1 mt-4 w-50 cursor-pointer",
}];

export const MainPage = () => {
  const [isUnder, setIsUnder] = useState(true);
  return (
    <>
      <div className="flex justify-center w-full">
        <SelectMenu buttons={buttons} isUnder={isUnder} />
      </div>
    </>
  )
}
