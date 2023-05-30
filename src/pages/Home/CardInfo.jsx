
const CardInfo = ({ image, infoTitle, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl mx-auto ${bgClass}`}>
            <figure><img src={image} className="lg:pl-4 pt-4" width={60} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{infoTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default CardInfo;