import { useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useForm, DataListPokemons } from "../../";

export const SearchBar = ({ desactiveToggle }) => {
    const inputSearch = useRef();
    const navigate = useNavigate();
    const { searchText, handleChange } = useForm({ searchText: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length < 2) return;
        desactiveToggle();
        navigate(`./search?q=${searchText.trim()}`);
        };
    const onIputClick = () => inputSearch.current.select();

    return (
        <form className="d-gird d-md-flex" onSubmit={handleSubmit}>
            <input
                ref={inputSearch}
                className="form-control me-2 mb-2 mb-md-0 mt-2 mt-md-0"
                type="search"
                placeholder="Search"
                autoComplete="off"
                aria-label="Search"
                name="searchText"
                value={searchText}
                onChange={handleChange}
                onClick={onIputClick}
                list={searchText.trim().length > 0 ? "searchPokemons" : ""}
            />

            <button className="btn btn-warning w-100" type="submit">
                Search
            </button>

            <DataListPokemons />
        </form>
    );
};

SearchBar.propTypes = {
    desactiveToggle: PropTypes.func.isRequired,
};
