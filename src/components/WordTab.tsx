import React, { useState, useEffect } from "react"
import type { Translations } from "@/interfaces/WordsProps"
import type { ErrorProps } from "@/interfaces/ErrorProps";

interface setDatas {
  wordAng: string,
  wordPl: string
}

export const WordTab = ({ wordAng, wordPl }: setDatas) => {
  const [error, setError] = useState<ErrorProps>({ errorType: '', errorContent: '' });

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white/70 rounded p-6 ">

        </div>

      </div >
    </>
  )
}
