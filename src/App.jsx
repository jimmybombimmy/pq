import "./styles/App.css";
import NavbarFile from "./navbar/NavbarFile";
import Music from "./music/Music";
import { Routes, Route } from "react-router-dom";
import Production from "./production/Production";
import Audio from "./audio/Audio";
import About from "./about/About";

function App() {
  return (
    <main>
      <NavbarFile />
      <Routes>
        <Route path="/" element={<Music />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/production" element={<Production />}></Route>
        <Route path="/audio" element={<Audio />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </main>
  );
}

export default App;
