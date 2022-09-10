export const PokemonStats = ({ stats }) => {
    return (
        <>
            <h3>Stats</h3>
            <div className="row g-3">
                {stats.map(({ base_stat, effort, stat }) => (
                    <div className="col-md-4" key={stat.name}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{stat.name}</h5>
                                <p className="card-text">{base_stat}</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        style={{
                                            width: `${
                                                (base_stat / 250) * 100
                                            }%`,
                                        }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
