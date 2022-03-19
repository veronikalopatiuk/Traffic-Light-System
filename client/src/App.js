import { useEffect, useState } from 'react';
import './App.css';
import Grass from "./Components/Grass";
import Intersection from "./Components/Intersection";
import Road from "./Components/Road";
import TrafficLight from './Components/TrafficLight';

function App() {
  const [data, setData] = useState(null);

  function handleData(state) {
    setData(state);
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      
      fetch("http://localhost:4000/state")
        .then(res => {
          if(!res.ok){
            throw Error("Could not fetch the data for that resource")
          }
          return res.json();
        })
        .then(state => {
          handleData(state);
        });

    }, 1000);

      return (() => clearInterval(timerId));

  }, []);

  return (
    <div className = "container">
      <Grass>
        { !!data && <TrafficLight direction="W" state={data.state.T1} /> }
      </Grass>
      <Road roadType="vertical" />
      <Grass>
        { !!data && <TrafficLight direction="N" state={data.state.T2} /> }
      </Grass>
      <Road roadType="horizontal" />
      <Intersection />
      <Road roadType="horizontal" />
      <Grass>
        { !!data && <TrafficLight direction="S" state={data.state.T4} /> }
      </Grass>
      <Road roadType="vertical" />
      <Grass>
        { !!data && <TrafficLight direction="E" state={data.state.T3} /> }
      </Grass>
    </div>
  );
}

export default App;
