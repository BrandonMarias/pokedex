import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { ButtonNavToggler } from "./ButtonNavToggler";
import { SearchBar } from "./SearchBar";

const activeLink = ({ isActive }) => {
    return `nav-item nav-link ${isActive ? "active" : ""}`;
};

export const NavBar = () => {
    const buttonToggle = useRef();

    const desactiveToggle = () => {
        if (screen.width < 768) buttonToggle.current.click();
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand h1 text-warning" to="/">
                    PokeDex
                </Link>
                <ButtonNavToggler refButtonToggler={buttonToggle} />
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbar"
                >
                    <div className="navbar-nav" onClick={desactiveToggle}>
                        <NavLink className={activeLink} to="pokemons">
                            Pokemons
                        </NavLink>
                        <NavLink className={activeLink} to="types">
                            Types
                        </NavLink>
                    </div>

                    <div className="navbar-nav">
                        <SearchBar desactiveToggle={desactiveToggle} />
                    </div>
                </div>
            </div>
        </nav>
    );
};
