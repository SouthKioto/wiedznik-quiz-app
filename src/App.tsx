import "./index.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainPage } from "./pages/MainPage";

export function App() {
  return (
    <>
      <Header />
      <MainPage />
      {/*<Footer />*/}
    </>
  );

}

export default App;
