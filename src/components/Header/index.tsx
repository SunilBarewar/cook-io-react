import './header.css'
import { Link, NavLink } from 'react-router-dom'

import dark from "../../assets/images/logo-dark.svg"
import light from "../../assets/images/logo-light.svg"
const Header = () => {
    return (
        <>

            <header className="header" data-header>
                <Link to="/" className="logo">
                    <img src={light} alt="Cook.io" width="156" height="32" className="logo-light" />
                    <img src={dark} alt="Cook.io" width="156" height="32" className="logo-dark" />
                </Link>

                <nav className="navbar">
                    <ul className="navbar-list">
                        <li>
                            <NavLink to="/" className="navbar-link title-small has-state">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/recipes" className="navbar-link title-small has-state">Recipes</NavLink>
                        </li>
                    </ul>
                </nav>

                <button className="icon-btn theme-switch has-state" aria-label="Toggle light and dark theme" aria-pressed="false"
                    data-theme-btn>
                    <span className="material-symbols-outlined light-icon" aria-hidden="true">light_mode</span>
                    <span className="material-symbols-outlined dark-icon" aria-hidden="true">dark_mode</span>
                </button>

                <Link to="/saved-recipes" className="btn btn-primary has-icon">
                    <span className="material-symbols-outlined" aria-hidden="true">book</span>

                    <span className="span">Saved Recipes</span>
                </Link>
            </header>
        </>
    )
}

export default Header