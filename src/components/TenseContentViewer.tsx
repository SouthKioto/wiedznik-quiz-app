import type { TenseProps } from "@/interfaces/TenseProps";

interface TensesListProps {
  content: TenseProps;
}

export const TenseContentViewer = ({ content }: TensesListProps) => {
  const handleIrregularIsSet = (form?: string): boolean => {
    if (form === undefined) return false;
    if (!form || form.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div>
        <div className="text-center text-2xl underline font-mono">
          <h1>{content.title}</h1>
        </div>
      </div>

      <div>
        <div className="mt-5">
          <div className="border bg-black/20 rounded p-2">
            <p>{content.description}</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="font-bold text-xl text-center mb-2">Użycie: </div>
          <div className="mt-2 border border-white bg-white/50 p-2 rounded">
            <ul className="list-disc list-inside">
              <div className="pl-6 pr-6 pb-4">
                {content.usage.map((data, index) => (
                  <li key={index} className="mt-3 font-bold">
                    {data}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>

        <div className="mt-5">
          <div className="font-bold text-xl text-center mb-2">Budowa: </div>
          <div className="bg-amber-200/70 border border-amber-400 rounded text-center p-6">
            {handleIrregularIsSet(content.form.irregular) ? (
              <div className="grid grid-cols-2 ">
                <div className="border-r">
                  Regularne:
                  <span className="block font-mono text-center font-bold">
                    <ul className="">
                      <li>{content.form.affirmative}</li>
                      <li>{content.form.interrogative}</li>
                      <li>{content.form.negative}</li>
                    </ul>
                  </span>
                </div>

                <div>
                  Nie regularne:
                  <span className="block font-mono text-center font-bold">
                    {content.form.irregular}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  Regularne:
                  <span className="block font-mono text-center font-bold">
                    <ul>
                      <li>{content.form.affirmative}</li>
                      <li>{content.form.interrogative}</li>
                      <li>{content.form.negative}</li>
                    </ul>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <div className="font-bold text-xl text-center mb-2">Przyklady:</div>

          <div className="mt-4">
            <div className="bg-green-200/70 border border-green-300 rounded  p-6">
              <div>Zdanie pozytywne:</div>
              <div className="text-center capitalize font-mono font-bold">
                {content.example.exampleAffirmative}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="bg-red-200/70 border border-red-400 rounded  p-6">
              <div>Zdanie negatywne:</div>
              <div className="text-center capitalize font-mono font-bold">
                {content.example.exampleNegative}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="bg-blue-200/70 border border-blue-400 rounded  p-6">
              <div>Zdanie pytajace:</div>
              <div className="text-center capitalize font-mono font-bold">
                {content.example.exampleInterrigatve}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
