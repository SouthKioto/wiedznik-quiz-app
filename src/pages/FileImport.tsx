import { useState } from "react"
import { Button } from "@/components/Button";
import type { Translations } from "@/interfaces/WordsProps"
import type { ErrorProps } from "@/interfaces/ErrorProps";

export const FileImport = () => {
  const [error, setError] = useState<ErrorProps>({ errorType: '', errorContent: '' });
  const [wordSetName, setWordSetName] = useState<string>("");
  const [fileContent, setFileContent] = useState<Translations[]>([]);
  const [fileName, setFileName] = useState<string>("Wybierz plik...");

  const handleSetWordSetName = (value: string) => {
    if (value.length === 0) {
      setError({ errorType: 'Empty value', errorContent: 'Pole nie może być puste' });
      return;
    }
    setWordSetName(value);
    setError({ errorType: '', errorContent: '' });
  }

  const handleFormatText = (content: string): Translations[] => {
    const formattedText = content.split(";");
    const pairs: Translations[] = [];

    for (let i = 0; i < formattedText.length; i += 2) {
      const eng = formattedText[i];
      const pl = formattedText[i + 1];
      if (eng && pl) pairs.push({ eng, pl });
    }

    return pairs;
  }

  const getFile = (file: File) => new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target?.result as string);
    reader.readAsText(file);
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const content = await getFile(file);
    setFileContent(handleFormatText(content));
  };

  const addFileToLocalStorage = () => {
    if (wordSetName.length === 0 || fileContent.length === 0) {
      setError({ errorType: "Name or file content empty", errorContent: "Coś poszło nie tak" });
      return;
    }
    localStorage.setItem(wordSetName, JSON.stringify(fileContent));
  }

  const hasError = error.errorContent.length > 0;

  return (
    <>
      <div className="px-6 pt-6">
        <Button
          value="← Powrót"
          href="/"
          styles="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
        />
      </div>

      <div className="flex flex-col items-center mt-16 px-4">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-xl">
          <h1 className="text-2xl font-semibold text-white mb-1">Import pliku</h1>
          <p className="text-sm text-white/60 mb-6">Wybierz plik ze słówkami, aby zobaczyć podgląd</p>

          <label className="flex items-center gap-3 border border-white/30 rounded-lg px-4 py-3 cursor-pointer hover:border-white/60 transition-colors bg-white/10">
            <span className="text-white/60 text-sm">📄</span>
            <span className="text-sm text-white/60">{fileName}</span>
            <input type="file" className="hidden" onChange={handleChange} />
          </label>
        </div>
      </div>

      {fileContent.length > 0 ? (
        <div className="flex flex-col items-center mt-6 px-4 pb-16">
          <div className="w-full max-w-md bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6">

            {hasError && (
              <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/20 border border-red-400/40 text-red-100 text-sm">
                {error.errorContent}
              </div>
            )}

            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
              Podgląd
            </h2>

            <div className="grid grid-cols-3 gap-y-2">
              {fileContent.map((content, index) => (
                <>
                  <p key={`eng-${index}`} className="text-sm text-white">{content.eng}</p>
                  <p key={`sep-${index}`} className="text-sm text-white/30 text-center">—</p>
                  <p key={`pl-${index}`} className="text-sm text-white text-right">{content.pl}</p>
                </>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/20 flex gap-2">
              <input
                type="text"
                className="flex-1 text-sm bg-white/10 border border-white/30 rounded-lg px-3 py-2 outline-none text-white placeholder-white/40 focus:border-white/60 transition-colors"
                placeholder="Nazwa zestawu..."
                onChange={e => handleSetWordSetName(e.target.value)}
              />
              <Button
                value="Dodaj"
                href="/"
                isDisabled={hasError}
                styles="text-sm px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white hover:bg-white/30 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                onClick={addFileToLocalStorage}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-10">
          <p className="text-sm text-white/50">Brak danych do podglądu</p>
        </div>
      )}
    </>
  );
}
