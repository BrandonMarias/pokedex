import { useNavigate } from "react-router-dom";

export const TypeCard = ({ type }) => {
    const navigate = useNavigate();
    
    const style = {
        backgroundColor: type.color,
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 animate__animated animate__fadeIn">
            <div className="card mb-4 pointer-cursor" style={style} onClick={() => navigate(`/types/${type.name}`)}>
                <div className="card-body text-center">
                    <h2 className="card-title capitalize">{type.name}</h2>
                    <div className="img-container">
                        <img
                            src={type.img}
                            alt={type.name}
                            className="pokemon-page__img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
