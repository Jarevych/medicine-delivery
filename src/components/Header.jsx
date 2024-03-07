import { NavLink } from "react-router-dom"
import { HeaderStyled } from "./HeaderStyled"
export const Header = () => {
    return (
        <HeaderStyled>
            <NavLink to="/" activeclassname="active-link">
                <p>Stores</p>
            </NavLink>
            <NavLink to="/shopping-cart" activeclassname="active-link">
                <p>Shopping Cart</p>
            </NavLink>
        </HeaderStyled>
    )
    
    }