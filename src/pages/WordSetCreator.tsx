import { Input } from "@/components/Input";
import React, { useEffect, useState } from "react";
import type { Translations } from "@/interfaces/WordsProps";
import { Button } from "@/components/Button";

interface TranslationsWithIndexes {
  index: number | undefined;
  translation: Translations;
}

export const WordSetCreator = () => {
  const [nazwaZestawu, setNazwaZestawu] = useState<string>("");

  const [slowka, setSlowka] = useState<TranslationsWithIndexes[]>([]);

  const [komponentyLinii, setKomponentyLinii] = useState<React.ReactNode[]>([]);

  const initLines = () => {
    for (let index = 0; index < 3; index++) {
      slowka.push({
        index: index,
        translation: {
          pl:'',
          eng:''
        }
      })
  };

  const handleCreateLines = () => {
    initLines();
    let komponent = [];
    for (let index = 0; index < slowka.length; index++) {
      komponent.push([
        <Input
          id={`Linia-${index}-pl`}
          type="text"
          value={slowka[index]?.pl}
          placeholder={`Linia-${index}-pl`}
          onChange={(e) => {
            setSlowkoPl(e.target.value);
          }}
          styles=""
        />,

        <Input
          id={`Linia-${index}-eng`}
          type="text"
          value={slowkoEng}
          placeholder={`Linia-${index}-eng`}
          onChange={(e) => {
            setSlowkoEng(e.target.value);
          }}
          styles=""
        />,

        <Button
          value="Usun"
          styles="Usun"
          onClick={() => {
            console.log("Usuwanie...");
          }}
        />,
      ]);

      setKomponentyLinii([...komponentyLinii, komponent]);
    }
  };

  const handleAddLine = () => {
    let element = [
      <Input
        id={`Linia-pl`}
        type="text"
        value={nazwaZestawu}
        placeholder={`Linia-pl`}
        onChange={(e) => {}}
        styles=""
      />,

      <Input
        id={`Linia-eng`}
        type="text"
        value={nazwaZestawu}
        placeholder={`Linia-eng`}
        onChange={(e) => {}}
        styles=""
      />,

      <Button
        value="Usun"
        styles="Usun"
        onClick={() => {
          console.log("Usuwanie...");
        }}
      />,
    ];

    setKomponentyLinii([...komponentyLinii, element]);
  };

  const handleRemoveLine = (element: any) => {};

  useEffect(() => {
    handleCreateLines();
  }, []);

  return (
    <>
      <div className="justify-center text-center items-center bg-ink">
        <div className="header">
          <h1>Nowy zestaw</h1>
          <p>Dodaj slowka recznie albo wklej liste</p>
        </div>

        <div className="rounded bg-white/50 text-black">
          <h1>Nazwa zestawu</h1>
        </div>

        <div>
          {komponentyLinii.map((elem) => (
            <div className="inline">{elem}</div>
          ))}

          <Button value="Dodaj linie" styles="" onClick={handleAddLine} />
        </div>
      </div>
    </>
  );
};
