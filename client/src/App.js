import './App.css';
import Grass from "./Components/Grass";
import Intersection from "./Components/Intersection";
import Road from "./Components/Road";

function App() {
  return (
    <div className = "container">
      <Grass direction="W" />
      <Road roadType="vertical" />
      <Grass direction="N" />
      <Road roadType="horizontal" />
      <Intersection />
      <Road roadType="horizontal" />
      <Grass direction="S"/>
      <Road roadType="vertical" />
      <Grass direction="E" />
    </div>
  );
}

export default App;
