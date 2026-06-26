import React from "react";
import { Button } from "./Button";
import type { ButtonProps } from "@/interfaces/ButtonProps";

interface ButtonArray {
  buttons: ButtonProps[]
}

export const SelectMenu = ({ buttons }: ButtonArray) => {
  return (
    <>
      {buttons.map((button, index) => (
        <Button value={button.value} href={button.href} styles={button.styles} under={button.under} />
      ))}
    </>
  );
}
