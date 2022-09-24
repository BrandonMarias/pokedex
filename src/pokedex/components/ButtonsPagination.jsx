import PropTypes from "prop-types";

export const ButtonsPagination = ({
    nextActive,
    previousActive,
    onPrevious,
    onNext,
}) => {
    return (
        <div className="d-flex justify-content-between">
            <button
                className="btn btn-sm btn-outline-danger"
                onClick={onPrevious}
                disabled={previousActive}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-left-circle-fill me-2"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
                Previous
            </button>
            <button
                className="btn btn-sm btn-outline-danger"
                onClick={onNext}
                disabled={nextActive}
            >
                Next
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle-fill ms-2"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
            </button>
        </div>
    );
};

ButtonsPagination.propTypes = {
    nextActive: PropTypes.bool.isRequired,
    previousActive: PropTypes.bool.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};
