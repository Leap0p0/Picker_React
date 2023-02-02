import { DisplatyDifficulty } from "./DisplayDifficulty/DisplayDifficulty";
import { useState } from "react";
import { MenuList } from "./MenuList/MenuList";
import s from "./style.module.css";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  function updateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }
  return <div>
    <h1 className={s.title}>Select your React Difficulty!</h1>
    <div className={s.container}>
      <MenuList onItemClick={updateDifficulty} difficulty = {currentDifficulty} />
      <DisplatyDifficulty difficulty = {currentDifficulty} />
    </div>
  </div>;
}

export default App
