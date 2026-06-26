import React from "react"
import { SelectMenu } from "@/components/SelectMenu";
import type { ButtonProps } from "@/interfaces/ButtonProps";


const buttons: ButtonProps[] = [{
  value: "Test",
  href: "/testPage",
  styles: "bg-red-400 rounded pr-6 pl-6 pt-1 pb-1 mt-4 w-50",
  under: true
},
{
  value: "Test2",
  href: "/testPage2",
  styles: "bg-green-400 rounded pr-6 pl-6 pt-1 pb-1 mt-4 w-50",
  under: true
}];

export const MainPage = () => {
  return (
    <>
      <div className="items-center w-full">
        <SelectMenu buttons={buttons} />
      </div>
    </>
  )
}
