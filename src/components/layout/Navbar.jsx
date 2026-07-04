import { useState } from "react";
import {
    FaHotel,
    FaHeart,
    FaUserCircle,
    FaUser,
    FaPhoneAlt,
    FaSignOutAlt,
} from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
    const location = useLocation();

    const isHome = location.pathname === "/";
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full ${isHome ? "bg-transparent" : "bg-white shadow-md"
                }`}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}

                <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className={`flex items-center gap-2 text-3xl font-bold ${isHome ? "text-white" : "text-gray-900"
                        }`}
                >
                    <FaHotel className="text-blue-600" />

                    <span>
                        Stay<span className="text-blue-600">Finder</span>
                    </span>
                </Link>



                <div className="hidden items-center gap-10 md:flex">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isHome ? "text-white" : "text-gray-800"}
              ${isActive ? "font-bold text-blue-600" : ""}
              transition hover:text-blue-600`
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/wishlist"
                        className={({ isActive }) =>
                            `${isHome ? "text-white" : "text-gray-800"}
              ${isActive ? "font-bold text-blue-600" : ""}
              transition hover:text-blue-600`
                        }
                    >
                        Wishlist
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${isHome ? "text-white" : "text-gray-800"}
              ${isActive ? "font-bold text-blue-600" : ""}
              transition hover:text-blue-600`
                        }
                    >
                        Contact
                    </NavLink>

                </div>

                {/* Right Icons */}

                <div className="relative hidden items-center gap-5 md:flex">

                    <Link to="/wishlist">
                        <FaHeart
                            size={20}
                            className={`transition hover:text-red-500 ${isHome ? "text-white" : "text-gray-800"
                                }`}
                        />
                    </Link>

                    <FaUserCircle
                        size={30}
                        onClick={() => setShowMenu(!showMenu)}
                        className={`cursor-pointer transition hover:text-blue-600 ${isHome ? "text-white" : "text-gray-800"
                            }`}
                    />

                    {showMenu && (
                        <div className="absolute right-0 top-12 w-52 rounded-xl bg-white p-2 shadow-xl">



                            <Link
                                to="/wishlist"
                                onClick={() => setShowMenu(false)}
                                className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
                            >
                                <FaHeart className="text-red-500" />
                                Wishlist
                            </Link>

                            <Link
                                to="/contact"
                                onClick={() => setShowMenu(false)}
                                className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
                            >
                                <FaPhoneAlt />
                                Contact
                            </Link>

                            <hr className="my-2" />

                            <button
                                onClick={() => {
                                    toast.info("Logout feature coming soon!");
                                    setShowMenu(false);
                                }}
                                className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left hover:bg-gray-100"
                            >
                                <FaSignOutAlt />
                                Logout
                            </button>

                        </div>
                    )}

                </div>

            </nav>
        </header>
    );
};

export default Navbar;