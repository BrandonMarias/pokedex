
import PropTypes from "prop-types"
export const ButtonNavToggler = ({refButtonToggler}) => {
    return (
        <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={refButtonToggler}
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    );
};

ButtonNavToggler.propTypes = {
    refButtonToggler: PropTypes.object.isRequired
}

