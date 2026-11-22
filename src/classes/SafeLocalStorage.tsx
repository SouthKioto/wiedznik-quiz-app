import type { localStorageProps } from "@/interfaces/WordsProps";

import type { Translations } from "@/interfaces/WordsProps";

export class SafeLocalStorage {
  storageName: string;
  constructor(storageName: string) {
    this.storageName = storageName;
  }

  safeSave(setName: string, data: Translations[]) {
    if (data.length === 0) {
      console.error("Dane sa puste");
      return false;
    }

    const raw = localStorage.getItem(this.storageName);
    const currStorageData = raw ? JSON.parse(raw) : [];
    const dataStorage: localStorageProps = {
      name: setName,
      content: data,
    };

    localStorage.setItem(
      this.storageName,
      JSON.stringify([...currStorageData, dataStorage]),
    );

    return true;
  }

  safeRemove(name: string, set: localStorageProps[]) {
    const newWordsSet = set.filter((item) => item.name !== name);

    return newWordsSet;
  }

  //do dorobienia
  safeUpdate() {}

  safeGetData(): localStorageProps[] {
    const data = localStorage.getItem(this.storageName);
    if (!data) {
      console.error("Blad parsowania JSON");
      return [];
    }

    return JSON.parse(data);
  }
}
