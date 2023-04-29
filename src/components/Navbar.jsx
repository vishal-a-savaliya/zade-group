import React, { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";

import bg from '../image/Z GROUP LOGO.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const [scroll, setScroll] = useState(false);
    const scrollTop = window.pageYOffset;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);

    const handleScroll = () => {
        // const scrollTop = window.pageYOffset;

        if (scrollTop > 1 && !scroll) {
            setScroll(true);
        } else if (scrollTop <= 1 && scroll) {
            setScroll(false);
        }

    }

    // const navbarClasses = `w-full py-2 z-30 ${scroll ? 'bg-white' : 'bg-transparent'}`;
    const navbarClasses = `relative w-full py-2 z-30 bg-transparent`;

    return (
        <nav className={navbarClasses}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">

                    <div className="flex items-center justify-center">
                        <a href="/" className="mr-7">
                            <img src={bg} className="w-32" alt="ZADE GROUP" />
                        </a>
                    </div>
                    <div className="flex flex-row items-center">
                        <button
                            className="p-2"
                            onClick={handleToggle}
                            aria-label="Toggle Menu"
                        >
                            {/* <FaBars className="text-white text-2xl" /> */}
                            {/* <svg
                                className="w-6 h-6 fill-primary hover:fill-primaryHover"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                            >
                                <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h12M4 10h12M4 14h12" />
                                <path stroke="#000" strokeWidth="2" d="M0 0h24v24H0z" fill="none" />
                            </svg> */}
                            <img src="https://img.icons8.com/ios-filled/50/null/skyscrapers.png" />
                        </button>
                        <button
                            className="p-2 pt-3 hover:text-primaryHover font-semibold font-branding"
                            onClick={handleToggle}
                            aria-label="Toggle Menu"
                        >
                            MENU
                        </button>
                    </div>

                    {/* <div className="hidden md:flex items-center justify-end">
                        <button className=" text-black border-primary border-2 px-6 py-3 font-branding font-bold uppercase hover:border-primaryHover">
                            Schedule a Visit
                        </button>
                    </div> */}
                </div>
            </div>

            <div
                className={`${isOpen ? "transition-all ease-in-out duration-700" : "hidden"
                    } bg-[#f8f8f8] w-full h-screen fixed top-0 left-0 z-40 transition-all ease-in-out duration-700`}
            >

                <div className="absolute top-5 right-5 px-10">
                    <button
                        className="p-2"
                        onClick={handleToggle}
                        aria-label="Toggle Menu"
                    >
                        {/* <FaBars className="text-white text-2xl" /> */}
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.004 7.2H5.997c-.662 0-1.198.536-1.198 1.2 0 .664.536 1.2 1.198 1.2h12.007c.662 0 1.198-.536 1.198-1.2 0-.664-.536-1.2-1.198-1.2zm0 5.998H5.997c-.662 0-1.198.536-1.198 1.2 0 .663.536 1.199 1.198 1.199h12.007c.662 0 1.198-.536 1.198-1.2 0-.663-.536-1.199-1.198-1.199zm0 5.998H5.997c-.662 0-1.198.536-1.198 1.199 0 .664.536 1.2 1.198 1.2h12.007c.662 0 1.198-.536 1.198-1.2 0-.663-.536-1.199-1.198-1.199z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.997 8.4h16.007c.662 0 1.198.536 1.198 1.2 0 .664-.536 1.2-1.198 1.2H3.997c-.662 0-1.198-.536-1.198-1.2 0-.664.536-1.2 1.198-1.2zm0 5.998h16.007c.662 0 1.198.536 1.198 1.2 0 .663-.536 1.199-1.198 1.199H3.997c-.662 0-1.198-.536-1.198-1.2 0-.663.536-1.199 1.198-1.199zm0 5.998h16.007c.662 0 1.198.536 1.198 1.199 0 .664-.536 1.2-1.198 1.2H3.997c-.662 0-1.198-.536-1.198-1.2 0-.663.536-1.199 1.198-1.199z"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col justify-center items-center h-full">
                    <a
                        href="/"
                        className="text-secondary text-xl font-bold py-6 hover:text-gray-300"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="text-secondary text-xl font-bold py-6 hover:text-gray-300"
                    >
                        About Us
                    </a>
                    <a
                        href="/contact"
                        className="text-secondary text-xl font-bold py-6 hover:text-gray-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
