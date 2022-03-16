import TrafficLight from "./TrafficLight.js";

const Grass = ({direction}) => {
    return (
        <div className = {`traffic-light-area ${direction}`}>
            <TrafficLight direction={direction}/>
        </div>
    );
}
 
export default Grass;