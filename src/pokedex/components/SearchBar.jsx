import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import PropTypes from "prop-types";
import { useRef } from "react";

export const SearchBar = ({ desactiveToggle }) => {
    const inputSearch = useRef();
    const navigate = useNavigate();
    const { searchText, handleChange, resetForm } = useForm({ searchText: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length < 2) return;
        desactiveToggle();
        navigate(`./search?q=${searchText.trim()}`);
    };
    const onIputClick = () => inputSearch.current.select();

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <input
                ref={inputSearch}
                className="form-control me-2"
                type="search"
                autoComplete="off"
                placeholder="Search"
                aria-label="Search"
                name="searchText"
                value={searchText}
                onChange={handleChange}
                onClick={onIputClick}
            />
            <button className="btn btn-warning me-2" type="submit">
                Search
            </button>
        </form>
    );
};

SearchBar.propTypes = {
    desactiveToggle: PropTypes.func.isRequired,
};
