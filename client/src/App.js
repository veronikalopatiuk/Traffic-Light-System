import './App.css';
import Grass from "./Components/Grass";
import Intersection from "./Components/Intersection";
import Road from "./Components/Road";

function App() {
  return (
    <div className = "container">
      <Grass />
      <Road roadType="vertical" />
      <Grass />
      <Road roadType="horizontal" />
      <Intersection />
      <Road roadType="horizontal" />
      <Grass />
      <Road roadType="vertical" />
      <Grass />
    </div>
  );
}

export default App;
