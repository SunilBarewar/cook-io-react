import './mobile-nav.css'
import { NavLink } from 'react-router-dom'
const MobileNav = () => {
    return (
        <>
            <nav className="mobile-nav" aria-label="primary">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/recipes" className="nav-link">
                            <span className="item-icon">
                                <span className="material-symbols-outlined" aria-hidden="true">lunch_dining</span>
                            </span>

                            <span className="label-medium">Recipes</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <span className="item-icon">
                                <span className="material-symbols-outlined" aria-hidden="true">home</span>
                            </span>

                            <span className="label-medium">Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/saved-recipes" className="nav-link">
                            <span className="item-icon">
                                <span className="material-symbols-outlined" aria-hidden="true">book</span>
                            </span>

                            <span className="label-medium">Saved</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MobileNav