import { useState } from "react"
import { Button } from "@/components/Button";
import type { ButtonProps } from "@/interfaces/ButtonProps";
import type { Translations } from "@/interfaces/WordsProps"
import type { ErrorProps } from "@/interfaces/ErrorProps";

const button: ButtonProps = {
  value: "Import pliku",
  href: "/fileImport",
  styles: "bg-linear-to-r from-yellow-500 to-blue-500 rounded border-black border-2 ml-2 pr-6 pl-6 pt-1 pb-1 mt-4 w-50 cursor-pointer",
}

export const FileImport = () => {
  const [error, setError] = useState<ErrorProps>();
  const [wordSetName, setWordSetName] = useState<string>("");
  const [fileContent, setFileContent] = useState<Translations[]>([]);

  const handleSetWordSetName = (value: string) => {
    if (value.length === 0) {
      setError({ errorType: 'Empty value', errorContent: 'Pole nie może być puste' })
      return;
    }

    setWordSetName(value);
    setError({ errorType: '', errorContent: '' })
  }

  const handleFormatText = (content: string): Translations[] => {
    let formattedText: string[];
    formattedText = content
      .split(";")

    const pairs: Translations[] = [];

    for (let i = 0; i < formattedText.length; i += 2) {
      let eng = formattedText[i];
      let pl = formattedText[i + 1];
      if (eng && pl) {
        pairs.push({
          eng,
          pl
        })
      }
    }

    return pairs;
  }

  const getFile = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      resolve(e.target?.result as string);
    }
    reader.readAsText(file);
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const content = await getFile(file) as string;
    setFileContent(handleFormatText(content));
  };

  const addFileToLocalStorage = () => {
    if (wordSetName.length === 0 || fileContent.length === 0) {
      setError({ errorType: "Name or file content empty", errorContent: "Coś poszło nie tak" })
    }
    localStorage.setItem(wordSetName, fileContent)
  }

  return (
    <>
      <div>
        <Button value="Powrot" href="/" styles="bg-linear-to-r from-yellow-500 to-blue-500 rounded border-2 ml-2 pr-6 pl-6 pt-1 pb-1 mt-4 w-30 cursor-pointer" />
      </div>
      <div className="flex justify-center items-center w-full mt-10">
        <form className="bg-white p-4 rounded">
          {error?.errorContent.length === 0 ? ("") : (<div className="bg-red-300 border-2 border-red-400 text-red-500">
            <p>{error?.errorContent}</p>
          </div>)}
          <h1 className="p-2 text-center underline text-bold font-5xl">Formularz importu pliku </h1>
          <input className="border-black bg-blue-400 rounded cursor-pointer mb-4 border-2 p-1 ml-2" type="file" placeholder="Dodaj plik" onChange={handleChange} />
          <br />
          <Button value={button.value} href={button.href} styles={button.styles} />
        </form>
      </div>

      {
        fileContent.length > 0 ? (
          <div className="flex justify-center items-center w-full mt-10">
            <div className="bg-white rounded p-5 grid grid-cols-3">
              <h1 className="text-center col-span-3 mb-4">Podgląd:</h1>
              {fileContent.map((content, index) => (
                <>
                  <p key={`eng-${index}`} className="text-left pr-2">{content.eng}</p>
                  <p key={`sep-${index}`} className="text-center">-</p>
                  <p key={`pl-${index}`} className="text-right pl-2">{content.pl}</p>
                </>
              ))}

              <div className="text-center col-span-3 mt-4">
                <input
                  type="text"
                  className="border-black bg-blue-400 rounded cursor-pointer mb-4 border-2 p-1 ml-2"
                  placeholder="Podaj nazwe pliku"
                  onChange={e => { handleSetWordSetName(e.target.value) }} />

                <Button
                  value="Dodaj"
                  href="/"
                  isDisabled={error?.errorContent.length === 0 ? false : true}
                  styles="bg-linear-to-r from-yellow-500 to-blue-500 rounded border-2 ml-2 pr-6 pl-6 pt-1 pb-1 mt-4 w-30 cursor-pointer"
                  onClick={addFileToLocalStorage}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center w-full mt-10">
              <p className="bg-white rounded p-5">Podgląd niedostępny (nic nie jest zaimportowane)</p>
            </div>
          </>
        )
      }
    </>
  )
}

