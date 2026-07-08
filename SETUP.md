# ⚙️ Setup — Wiedznik

Instrukcja postawienia projektu lokalnie od zera.

## Wymagania

- [Bun](https://bun.sh) w wersji ≥ 1.0
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```
- Git

## 1. Klonowanie repozytorium

```bash
git clone https://codeberg.org/SouthKioto/wiedznik-quiz-app.git
cd wiedznik-quiz-app
```

## 2. Instalacja zależności

```bash
bun install
```

## 3. Uruchomienie w trybie deweloperskim

```bash
bun run dev
```

<!-- TODO: podmień na faktyczną komendę, jeśli inna niż `bun run dev` (np. `bun --hot index.tsx`) -->

## 4. Build produkcyjny

```bash
bun run build
```

<!-- TODO: podmień, jeśli używasz innej komendy do builda -->

## Rozwiązywanie problemów

| Problem | Rozwiązanie |
|---|---|
| Port zajęty | Sprawdź flagę portu w skrypcie `dev` w `package.json` |
| Dane znikają po odświeżeniu | Sprawdź, czy przeglądarka nie blokuje `localStorage` (tryb prywatny / rozszerzenia) |

## Zmienne środowiskowe

Jeśli projekt ich używa, utwórz `.env` na podstawie `.env.example` (jeśli istnieje w repo).
