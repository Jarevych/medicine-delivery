import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <NavLink to="/" activeClassName="active-link">
                <p>Stores</p>
            </NavLink>
            <NavLink to="/shopping-cart" activeClassName="active-link">
                <p>Shopping Cart</p>
            </NavLink>
        </div>
    )
    
    }