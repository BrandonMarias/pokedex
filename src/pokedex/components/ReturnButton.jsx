import { useNavigate } from "react-router-dom";

export const ReturnButton = () => {
    const navigate = useNavigate();

    return (
        <button className="btn btn-outline-info" onClick={() => navigate(-1)}>
            Return
        </button>
    );
};
