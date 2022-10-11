import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import {Home} from "../../pages/home/Home";
import {Income} from "../../pages/income/Income";
import {Movement} from "../../pages/movement/Movement";
import {Person} from "../../pages/person/Person";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRoutes
} from "react-router-dom";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-12 py-2.5 dark:bg-gray-900 w-full">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/"
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true"
                         className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Gestão pessoal</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex
                                   items-center
                                   p-2
                                   ml-3
                                   text-sm
                                   text-gray-500
                                   rounded-lg
                                   md:hidden
                                   hover:bg-gray-100
                                   focus:outline-none
                                   focus:ring-2
                                   focus:ring-gray-200
                                   dark:text-gray-400
                                   dark:hover:bg-gray-700
                                   dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <Link to="/home"
                              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                 className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span className="ml-3">Home</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}