import { useState } from "react"
import type { InputProps } from "@/interfaces/InputProps";


export const Input = ({ value, styles, type, onChange, placeholder }: InputProps) => {
  return (
    <>
      <div className={`flex items-center gap-3`}>

        <input value={value} type={type} className={styles} placeholder={placeholder} onChange={onChange} />
      </div>
    </>
  )
}

