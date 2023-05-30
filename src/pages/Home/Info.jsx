import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/clock.svg"
import CardInfo from "./CardInfo";
const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 text-[#ddd] lg:mx-10 gap-5">
            <CardInfo bgClass='bg-gradient-to-r from-secondary to-primary' infoTitle='Opening hours' image={clock}></CardInfo>
            <CardInfo bgClass='bg-accent' infoTitle='Opening hours' image={marker}></CardInfo>
            <CardInfo bgClass='bg-gradient-to-r from-secondary to-primary' infoTitle='Opening hours' image={clock}></CardInfo>
        </div>
    );
};

export default Info;