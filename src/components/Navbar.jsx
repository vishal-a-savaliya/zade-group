import React, { useState } from "react";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

import bg from '../image/Z GROUP LOGO.svg';





const Navbar = () => {



    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // const [scroll, setScroll] = useState(false);
    // const scrollTop = window.pageYOffset;

    // const handleScroll = useCallback(() => {
    //     // const scrollTop = window.pageYOffset;

    //     if (scrollTop > 1 && !scroll) {
    //         setScroll(true);
    //     } else if (scrollTop <= 1 && scroll) {
    //         setScroll(false);
    //     }

    // })

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [scrollTop, handleScroll]);

    // const navbarClasses = `w-full py-2 z-30 ${scroll ? 'bg-white' : 'bg-transparent'}`;
    const navbarClasses = `relative w-full py-2 z-30 bg-transparent`;


    const pathVariants = {
        initial: {
            opacity: 0,
            pathLength: 0,

        },
        animate: {
            opacity: 1,
            pathLength: 1,
            transition: {
                repeat: Infinity,
                fill: "#CCA34B",
                duration: 3,
                delay: 10,
                ease: "easeInOut"
            },
        },
    };

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
                            <img className="hidden md:block" alt="Menu" src="https://img.icons8.com/ios-filled/50/null/skyscrapers.png" />

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="md:hidden w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </button>
                        <button
                            className="hidden md:block p-2 pt-3 hover:text-primaryHover font-semibold font-branding"
                            onClick={handleToggle}
                            aria-label="Toggle Menu"
                        >
                            MENU
                        </button>
                    </div>

                </div>
            </div>

            <div
                className={`${isOpen ? "transition-all ease-in-out duration-700 overflow-hidden" : "hidden"
                    } bg-[#f8f8f8] w-full h-screen fixed top-0 left-0 z-40 transition-all ease-in-out duration-700`}
            >

                <div className="absolute top-5 right-5 pt-5 md:p-10">
                    <button
                        className="px-5"
                        onClick={handleToggle}
                        aria-label="Toggle Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hover:stroke-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>

                <div className="flex justify-center items-center h-full">


                    <div className="hidden md:flex w-[50%] justify-center">
                        <motion.svg className="flex" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="200px" fill="#f8f8f8" viewBox="0 0 747 742">

                            <motion.path stroke="#CCA34B" strokeWidth="4" variants={pathVariants}


                                d="M1.000000,372.333313
                            C1.000000,373.555542 1.000000,373.111115 1.000000,372.333313
                            C4.068027,375.578461 2.420917,374.902435 0.999996,374.000000
                            C113.407883,372.000000 225.815765,372.000000 338.240509,372.000000
                            C282.615448,427.667755 227.216537,483.109161 171.817642,538.550537
                            C172.030334,538.962952 172.243042,539.375366 172.455734,539.787781
                            C306.393921,539.787781 440.332092,539.787781 574.270264,539.787781
                            C574.536987,540.232544 574.803711,540.677307 575.070435,541.122009
                            C573.609314,542.351624 572.047241,543.480225 570.701599,544.825378
                            C506.121094,609.377686 441.558258,673.947754 377.003174,738.525513
                            C375.715851,739.813416 374.543945,741.216675 373.659058,742.783020
                            C372.933319,743.000000 371.866669,743.000000 370.751892,742.793335
                            C369.489960,741.231262 368.337585,739.814453 367.053314,738.529419
                            C317.483246,688.932251 267.903046,639.345215 218.320175,589.760803
                            C147.302704,518.741333 76.285782,447.721222 5.230417,376.739655 
z"/>
                            <motion.path stroke="#CCA34B" strokeWidth="4" variants={pathVariants}

                                d="
M373.599976,1.000006 
	C371.066681,1.000000 372.133331,1.000000 373.599976,1.000006 
	C374.923340,2.422470 375.628540,4.062927 376.801147,5.236348 
	C470.552124,99.056435 564.336975,192.842621 658.125854,286.624847 
	C686.280579,314.777618 714.453918,342.911835 743.164673,371.600067 
	C630.551758,371.600067 518.629700,371.600067 406.722504,371.600067 
	C462.188751,316.156891 517.621033,260.747681 574.100220,204.291962 
	C438.482941,204.291962 304.488983,204.291962 168.912140,204.291962 
	C171.001724,201.898178 172.114426,200.461670 173.388809,199.186813 
	C235.822449,136.730637 298.273438,74.291855 360.706451,11.835106 
	C364.109039,8.431236 367.374603,4.890403 370.351990,1.206669 
z"/>

                        </motion.svg>
                    </div>

                    <div className="flex flex-col md:w-[50%]">
                        <Link to="/" className="text-3xl font-style hover:text-primary hover:cursor-pointer uppercase py-2">Home</Link>

                        <h1 className="py-2 text-3xl font-style uppercase">Projects</h1>

                        <Link to="/z2" className="text-3xl font-style hover:text-primary hover:cursor-pointer uppercase pl-10 py-2">Z2</Link>

                        <Link to="/zluxuria" className="text-3xl font-style hover:text-primary hover:cursor-pointer uppercase pl-10 py-2">Z Luxuria</Link>

                        {/* <Link to="/" className="text-3xl font-style hover:text-primary hover:cursor-pointer uppercase py-2">Contact</Link> */}

                        <Link to="/About" className="text-3xl font-style hover:text-primary hover:cursor-pointer uppercase py-2">About</Link>

                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
