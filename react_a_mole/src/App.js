import "./App.css";
import { useState } from "react";
import MoleContainer from "./components/MoleContainer";

function App() {
  let [score, setScore] = useState(0);

  function addToScore(addedPoint) {
    setScore(score + addedPoint);
  }

  function createMoleHills(count) {
    const moles = [];
    for (let i = 0; i < count; i++) {
      moles.push(<MoleContainer key={i} addToScore={addToScore} />);
    }
    return moles;
  }

  return (
    <div className="App">
      <h1>React a Mole</h1>
      <h2>Score: {score}</h2>
      <div className="mole-mounds">{createMoleHills(9)}</div>
    </div>
  );
}

export default App;
