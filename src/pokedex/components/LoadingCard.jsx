export const LoadingCard = () => {
    return (
        <div className="card animate__animated animate__fadeIn mt-3 pokemon-card">
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};
