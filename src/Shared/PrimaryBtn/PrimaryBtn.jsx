
const PrimaryBtn = ({ children }) => {
    return (
        <div>
            <button className="btn px-6 btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary ">{children}</button>

        </div>
    );
};

export default PrimaryBtn;