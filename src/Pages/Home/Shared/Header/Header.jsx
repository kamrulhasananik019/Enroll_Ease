import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div>
                        <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Enroll Ease</p>
                    </div>
                    <div className="flex md:order-2">
                        {user ? (
                            <>
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt="User Avatar" />
                                            <svg
                                                className={`w-2.5 h-2.5 ml-2.5 ${isDropdownOpen ? 'transform rotate-180' : ''
                                                    }`}
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                    {isDropdownOpen && (
                                        <div
                                            className="absolute text-center right-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                            onClick={closeDropdown}
                                        >
                                            <ul
                                                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                                aria-labelledby="dropdownLargeButton"
                                            >
                                                <li>
                                                    <NavLink
                                                        to="Profile"
                                                        className="block px-4 font-semibold py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        {user?.displayName}
                                                    </NavLink>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <button onClick={handleLogOut} className="btn btn-ghost">
                                                    Log Out
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <Link to="/login">LogIn</Link>
                        )}
                        <button
                            onClick={toggleMobileMenu}
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${isMobileMenuOpen ? 'flex' : 'hidden'
                            } md:flex md:w-auto md:order-1 mt-4 md:mt-0`}
                        id="navbar-cta"
                    >
                        <ul
                            className="flex flex-col font-medium p-4 md:p-0 border-t border-gray-100 md:border-0 bg-white md:bg-transparent md:flex-row md:space-x-8"
                            onClick={closeMobileMenu}
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    className="block py-2 pl-3 pr-4 rounded md:p-0 md:dark:text-blue-500"

                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/collages"
                                    className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Colleges
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admission"
                                    className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                                >
                                    Admission
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/mycollege"
                                    className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                                >
                                    My College
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/signup"
                                    className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

                                >
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
