export const LoadingCard = () => {
    return (
        <div className="d-flex animate__animated animate__fadeIn mt-3">
            <div className="pokeball-loading-container" role="status">
                    <img src="/assets/icons/pokeball.svg" alt="pokeball" className="img-fluid pokeball-loading" />
            </div>
        </div>
    );
};
