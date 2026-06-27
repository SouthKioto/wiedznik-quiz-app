import React from "react";
import { Button } from "./Button";
import type { ButtonProps } from "@/interfaces/ButtonProps";

interface ButtonArray {
  buttons: ButtonProps[];
  isUnder: boolean;
}

export const SelectMenu = ({ buttons, isUnder }: ButtonArray) => {
  return (
    <div className={`flex items-center gap-3 ${isUnder ? "flex-col" : "flex-row"}`}>
      {buttons.map((button, index) => (
        <Button key={index} value={button.value} href={button.href} styles={button.styles} />
      ))}
    </div>
  );
};
