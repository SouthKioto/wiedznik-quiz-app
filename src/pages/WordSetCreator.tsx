import { Input } from "@/components/Input";
import React, { useEffect, useState } from "react";
import type { Translations } from "@/interfaces/WordsProps";
import { Button } from "@/components/Button";
import { Link, useNavigate } from "react-router";
import { SafeLocalStorage } from "@/classes/SafeLocalStorage";
import { toast, ToastContainer } from "react-toastify";

export const WordSetCreator = () => {
  const navigate = useNavigate();
  const [nazwaZestawu, setNazwaZestawu] = useState<string>("");
  const [slowka, setSlowka] = useState<Translations[]>([
    { pl: "", eng: "" },
    { pl: "", eng: "" },
    { pl: "", eng: "" },
  ]);

  const updateLineData = (
    wartosc: string,
    elemIndex: number,
    typ: keyof Translations,
  ) => {
    setSlowka((prev) =>
      prev.map((data, index) =>
        index === elemIndex ? { ...data, [typ]: wartosc } : data,
      ),
    );
  };

  const handleAddLine = () => {
    setSlowka((prev) => [...prev, { pl: "", eng: "" }]);
  };

  const handleRemoveLine = (elemIndex: number) => {
    const tmp = [...slowka];
    tmp.splice(elemIndex, 1);
    setSlowka(tmp);
  };

  const handleInsertWordSet = () => {
    if (nazwaZestawu.length <= 0) {
      toast.error(<span>Prosze uzupelnic nazwe</span>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    let canIsert = false;
    slowka.forEach((value) => {
      canIsert = value.pl.length === 0 || value.eng.length === 0 ? false : true;
    });

    if (!canIsert) {
      toast.error(<span>Prosze uzupelnic przynajmniej trzy slowka</span>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const sf = new SafeLocalStorage("userSets");
    let saved = sf.safeSave(nazwaZestawu, slowka);

    if (saved) {
      toast.success(
        <span>
          Twój zestaw: {nazwaZestawu} został stworzony poprawnie. Twoje
          stworzone zestawy możesz zobaczyć{" "}
          <Link to={"/sets"}>
            <span className="underline">tutaj</span>
          </Link>
          .
        </span>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        },
      );
    }
  };

  const inputStyles =
    "h-11 w-full min-w-0 box-border px-3 rounded-xl border border-white/30 bg-white/12 text-white text-[15px] outline-none placeholder:text-white/60 focus:border-accent focus:ring-3 focus:ring-accent/25";

  return (
    <>
      <ToastContainer />
      <main className="w-full max-w-[1040px] box-border mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-10 sm:pb-16 flex flex-col gap-4 sm:gap-5 font-sans text-white">
        <div className="flex flex-col gap-1.5">
          <h1 className="m-0 font-display text-2xl sm:text-[32px] font-bold leading-tight">
            Nowy zestaw
          </h1>
          <p className="m-0 text-sm text-white/82">Dodaj słówka ręcznie</p>
        </div>

        <section className="p-4 sm:p-6 rounded-card bg-surface/32 border border-white/20 flex flex-col gap-2 [&>div]:min-w-0">
          <label className="text-[13px] font-medium text-white/85">
            Nazwa zestawu
          </label>
          <Input
            type="text"
            value={nazwaZestawu}
            styles={`${inputStyles} px-3.5`}
            onChange={(e) => {
              setNazwaZestawu(e.target.value);
            }}
          />
          <span className="text-xs text-white/75">
            Pod tą nazwą znajdziesz zestaw na stronie startowej
          </span>
        </section>

        <section className="p-4 sm:p-6 rounded-card bg-surface/32 border border-white/20 flex flex-col gap-3">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <h2 className="m-0 text-[13px] font-semibold tracking-[0.08em] uppercase text-white/78">
              Słówka
            </h2>
            <span className="px-2.5 py-1 rounded-full bg-white/14 text-xs font-semibold">
              {slowka.length} słówek
            </span>
          </div>

          {/* nagłówki kolumn – tylko od sm w górę */}
          <div className="hidden sm:grid grid-cols-[32px_minmax(0,1fr)_minmax(0,1fr)_44px] gap-2 items-center text-xs font-semibold text-white/75">
            <span>#</span>
            <span>Polski</span>
            <span>Angielski</span>
            <span></span>
          </div>

          {slowka.map((elem, index) => (
            <div
              key={index}
              className="grid grid-cols-[minmax(0,1fr)_44px] sm:grid-cols-[32px_minmax(0,1fr)_minmax(0,1fr)_44px] gap-x-2 gap-y-2 items-center p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/6 sm:bg-transparent border border-white/12 sm:border-0 [&>div]:min-w-0"
            >
              <span className="col-start-1 row-start-1 sm:col-auto sm:row-auto text-[13px] font-semibold sm:font-normal text-white/75">
                <span className="sm:hidden">Słówko </span>
                {index + 1}
              </span>
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-1 min-w-0">
                <span className="sm:hidden text-xs font-medium text-white/70">
                  Polski
                </span>
                <Input
                  type="text"
                  styles={inputStyles}
                  value={elem.pl}
                  placeholder="jabłko"
                  onChange={(e) => {
                    updateLineData(e.target.value, index, "pl");
                  }}
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-1 min-w-0">
                <span className="sm:hidden text-xs font-medium text-white/70">
                  Angielski
                </span>
                <Input
                  type="text"
                  styles={inputStyles}
                  value={elem.eng}
                  placeholder="apple"
                  onChange={(e) => {
                    updateLineData(e.target.value, index, "eng");
                  }}
                />
              </div>
              <div className="col-start-2 row-start-1 sm:col-auto sm:row-auto justify-self-end">
                <Button
                  value=""
                  ariaLabel="Usuń wiersz"
                  styles="w-11 h-11 rounded-xl border border-danger/45 bg-danger-bg/35 text-danger-fg cursor-pointer inline-flex items-center justify-center hover:bg-danger-bg/55 transition-colors"
                  onClick={() => {
                    handleRemoveLine(index);
                  }}
                  icon={
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"></path>
                    </svg>
                  }
                />
              </div>
            </div>
          ))}

          <Button
            value="+ Dodaj słówko"
            styles="h-11 w-full rounded-xl border border-dashed border-white/45 bg-transparent text-white text-sm font-medium cursor-pointer hover:bg-white/10 transition-colors"
            onClick={handleAddLine}
          />
        </section>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 sm:gap-4">
          <Button
            value="Anuluj"
            styles="w-full sm:w-auto h-12 rounded-xl border border-white/45 bg-transparent text-white text-base sm:text-lg font-medium cursor-pointer hover:bg-white/10 transition-colors px-5"
            onClick={() => {
              navigate("/");
            }}
          />
          <Button
            value="Dodaj zestaw"
            styles="w-full sm:w-auto h-12 rounded-xl border border-white/45 bg-white text-ink text-base sm:text-lg font-semibold cursor-pointer hover:bg-white/90 transition-colors px-5"
            onClick={() => {
              handleInsertWordSet();
            }}
          />
        </div>
      </main>
    </>
  );
};
