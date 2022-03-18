const TrafficLight = ({direction, state}) => {
    return (
        <div className= {`traffic-light-container ${direction}`}>
            <div className={`traffic-light ${direction}`} >
                <div className = "green"></div>
                <div className = "yellow"></div>
                <div className = "red"></div>

            </div>
        </div>
    );
}
 
export default TrafficLight;