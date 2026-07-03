import { useState } from "react"
import type { InputProps } from "@/interfaces/InputProps";


export const Input = ({ value, styles, type, onChange }: InputProps) => {
  return (
    <>
      <div className={`flex items-center gap-3`}>

        <input type={type} className={styles} placeholder={value} onChange={onChange} />
      </div>
    </>
  )
}

