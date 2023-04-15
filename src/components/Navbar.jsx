import React, { useState } from "react";
import logo from '../image/Z GROUP LOGO.png'
import Z2 from '../image/Z2.jpeg'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="">
            <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6 mx-10 pt-5">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
                    <img src={logo} alt="Logo" className="w-[120px]" />
                </div>
                <div className="block">
                    <button
                        className="flex items-center px-3 py-2 text-gray-800 border-gray-800 hover:text-white hover:bg-gray-800"
                        onClick={handleMenuClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        </svg>
                    </button>
                </div>

            </nav>

            <div
                className={`w-full absolute top-0 bottom-0 left-0 right-0 min-h-[900px] z-30 block bg-gray ${menuOpen ? "block" : "hidden"
                    }`}
            >

                <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6 mx-10 pt-7">
                    <div className="flex items-center flex-shrink-0 text-gray-800 ml-6">
                        <img src={logo} alt="Logo" className="w-[120px]" />
                    </div>
                    <div className="block">
                        <button
                            className="flex items-center px-3 py-2 text-gray-800 border-gray-800 hover:text-primary hover:bg-gray-800"
                            onClick={handleMenuClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-6 text-black outline-none" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            </svg>

                        </button>
                    </div>
                </nav>

                <div className="flex flex-row h-screen w-[80%] mx-auto mt-14">

                    <div className="w-[40%] flex justify-end">
                        <img src={Z2} className="h-[450px]" />
                    </div>

                    <div className="w-[60%] flex flex-col pt-14 items-center ">
                        <a
                            href="#"
                            className="text-left py-2 block mt-4 text-secondary text-2xl hover:text-primary"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-left block mt-4 text-secondary text-2xl hover:text-primary"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className="text-left block mt-4 text-secondary text-2xl hover:text-primary"
                        >
                            Contact Us
                        </a>

                    </div>

                </div>


            </div>
        </div>

    );
}

export default Navbar;
