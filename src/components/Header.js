import { LOGO_URL } from "../utils/constant";


export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;