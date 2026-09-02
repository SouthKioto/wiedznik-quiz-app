/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router";
import { App } from "./App";
import { FileImport } from "./pages/FileImport";
import { Quiz } from "./pages/Quiz";
import { UserSets } from "./pages/UserSets";
import { TensesRevision } from "./pages/TensesRevision";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fileImport" element={<FileImport />} />
        <Route path="/learn/:setName" element={<Quiz />} />
        <Route path="/sets" element={<UserSets />} />

        <Route path="/tenses-revision" element={<TensesRevision />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
