import { useEffect, useState } from 'react';
import './App.css';
import Grass from "./Components/Grass";
import Intersection from "./Components/Intersection";
import Road from "./Components/Road";
import TrafficLight from './Components/TrafficLight';

function App() {
  const [data, setData] = useState();

  function handleData(state) {
    setData(state);
  }

  useEffect(() => {
    setInterval(() => {
      
      fetch("http://localhost:4000/state")
        .then(res => {
          return res.json();
        })
        .then(state => {
          handleData(state);
        });

    }, 1000);
  }, []);

  return (
    <div className = "container">
      <Grass>
        <TrafficLight direction="W" state={data.state.T1} />
      </Grass>
      <Road roadType="vertical" />
      <Grass>
        <TrafficLight direction="N" state={data.state.T2} />
      </Grass>
      <Road roadType="horizontal" />
      <Intersection />
      <Road roadType="horizontal" />
      <Grass>
        <TrafficLight direction="S" state={data.state.T3} />
      </Grass>
      <Road roadType="vertical" />
      <Grass>
        <TrafficLight direction="E" state={data.state.T4} />
      </Grass>
    </div>
  );
}

export default App;
