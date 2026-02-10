import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status: {onlineStatus?"✅":"🔴"}</li>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/about">About</Link></li>
                    <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li><Link className="nav-link" to="/grocery">Grocery</Link></li>
                    <li><ShoppingCartIcon /></li>
                    <li>
                        <button className="btn" onClick={() => {
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login")
                        }}>
                            {btnName}
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Header;