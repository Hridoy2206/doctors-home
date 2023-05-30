import PrimaryBtn from "../../Shared/PrimaryBtn/PrimaryBtn";
import appointment from "../../assets/images/appointment.png"
import doctor from "../../assets/images/doctor-small.png"
const Appointment = () => {
    return (
        <div style={{ background: `url(${appointment})` }} >
            <div className=" mx-10 flex items-center text-[#ddd]">
                <div className="w-1/2 relative top-[-100px]">
                    <img src={doctor} alt="" />
                </div>
                <div className="w-1/2">
                    <p className="text-secondary mb-4">appointment</p>
                    <h1 className="text-4xl font-semibold mb-4">Make an Appointment Today</h1>
                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptas possimus dolorum ipsa accusantium maxime vel, officiis velit consectetur illo tempora? Et quidem voluptatem temporibus, repellendus esse saepe quam! Ut?</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Appointment;