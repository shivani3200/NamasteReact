import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector(store =>store.cart.items) //subscribing to store using selector

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={LOGO_URL}
            alt="logo"
            className="w-20 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>

        {/* Nav Items */}
        <nav>
          <ul className="flex items-center gap-8 text-gray-700 font-medium">
            {/* Online Status */}
            <li className="text-sm">
              <span className="mr-1">Status:</span>
              <span
                className={onlineStatus ? "text-green-500" : "text-red-500"}
              >
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </li>

            <li  className="cursor-pointer hover:scale-125 transition transform duration-200">
              <Link
                to="/"
                className="hover:text-pink-500 transition duration-200"
              >
                Home
              </Link>
            </li>

            <li  className="cursor-pointer hover:scale-125 transition transform duration-200">
              <Link
                to="/about"
                className="hover:text-pink-500 transition duration-200"
              >
                About
              </Link>
            </li>

            <li  className="cursor-pointer hover:scale-125 transition transform duration-200">
              <Link
                to="/contact"
                className="hover:text-pink-500 transition duration-200"
              >
                Contact
              </Link>
            </li>

            <li className="cursor-pointer hover:scale-125 transition transform duration-200">
              <Link
                to="/grocery"
                className="hover:text-pink-500 transition duration-200"
              >
                Grocery
              </Link>
            </li>

            {/* Cart */}
            <li className="relative cursor-pointer hover:scale-125 transition transform duration-200">
              <Link to ="/cart">
              <ShoppingCartIcon className="hover:text-pink-500 transition duration-200" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
              </Link>
            </li>

            {/* Login Button */}
            <li>
              <button
                className={`px-5 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 transition transform transition-all duration-300 ${
                  btnName === "Login"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
                onClick={() =>
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login")
                }
              >
                {btnName}
              </button>
            </li>
            {btnName === "Logout" && <li className="text-sm">{loggedInUser}</li>}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
