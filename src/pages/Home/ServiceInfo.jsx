
const ServiceInfo = ({ image, serviceTitle }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-md mx-auto">
            <figure className="px-10 pt-10">
                <img src={image} width={60} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceTitle}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default ServiceInfo;