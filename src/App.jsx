import MoviesGrid from "./MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutPeli from "./AboutPeli";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MoviesGrid />}></Route>
          <Route path="/AboutPeli" element={<AboutPeli />}></Route>
        </Routes>
      </BrowserRouter>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
