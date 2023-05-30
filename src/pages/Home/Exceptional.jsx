import treatment from "../../assets/images/treatment.png"
import PrimaryBtn from "../../Shared/PrimaryBtn/PrimaryBtn";
const Exceptional = () => {
    return (
        <div>
            <div className="hero bg-base-100 mb-32">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl " />
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">Exceptional Dental Care On Your Turn</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;