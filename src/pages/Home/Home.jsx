import Appointment from "./Appointment";
import Bannar from "./Bannar";
import Exceptional from "./Exceptional";
import Info from "./Info";
import Services from "./Services";
const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Info />
            <Services />
            <Exceptional />
            <Appointment />
        </div>
    );
};

export default Home;