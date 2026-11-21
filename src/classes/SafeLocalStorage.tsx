class SafeLocalStorage {
  storageName: string;
  constructor(storageName: string) {
    this.storageName = storageName;
  }

  safeSave() {}
  safeRemove(item: string) {}
  safeUpdate() {}
}
