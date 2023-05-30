import PrimaryBtn from "../../Shared/PrimaryBtn/PrimaryBtn";
import bannarImage from "../../assets/images/chair.png"
import bgImage from "../../assets/images/bg.png"
const Bannar = () => {
    return (
        <div className="hero py-32" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse lg:mx-20 gap-20">
                <div>
                    <img src={bannarImage} className="max-w-lg rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 ">
                    <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Bannar;