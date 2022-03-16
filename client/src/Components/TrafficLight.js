const TrafficLight = ({direction}) => {
    return (
        <div className={`traffic-light ${direction}`} >
            <div className = "green"></div>
            <div className = "yellow"></div>
            <div className = "red"></div>

        </div>
    );
}
 
export default TrafficLight;