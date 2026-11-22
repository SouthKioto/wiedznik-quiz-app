import "./index.css";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainPage } from "./pages/MainPage";
import { FileImport } from "./pages/FileImport";
import { Quiz } from "./pages/Quiz";
import { UserSets } from "./pages/UserSets";
import { TensesRevision } from "./pages/TensesRevision";
import { WordSetCreator } from "./pages/WordSetCreator";

export function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/fileImport" element={<FileImport />} />
          <Route path="/learn/:setName" element={<Quiz />} />
          <Route path="/sets" element={<UserSets />} />

          <Route path="/creator" element={<WordSetCreator />} />

          <Route path="/tenses-revision" element={<TensesRevision />} />
        </Routes>
      </HashRouter>
      {/*<Footer />*/}
    </>
  );
}

export default App;
