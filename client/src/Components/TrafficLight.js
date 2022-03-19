const TrafficLight = ({direction, state}) => {
    return (
        <div className= {`traffic-light-container ${direction}`}>
            <div className={`traffic-light ${direction}`} >
                <div className = {state.G ? "green" : "grey"}></div>
                <div className = {state.Y ? "yellow" : "grey"}></div>
                <div className = {state.R ? "red" : "grey"}></div>

            </div>
        </div>
    );
}
 
export default TrafficLight;