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
    const navbarClasses = `relative top-0 w-full py-3 z-40  h-fit bg-white backdrop-blur-sm bg-opacity-80`;


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
            <div className="max-w-[90%] md:max-w-[88%] mx-auto px-2 md:px-0">
                <div className="flex justify-between">

                    <div className="flex items-center justify-center">
                        <a href="/" className="mr-7">
                            <img src={bg} className="w-28" alt="ZADE GROUP" />
                        </a>
                    </div>
                    <div className="flex flex-row items-center">


                        {/* Mobile */}

                        <button
                            className="p-2"
                            onClick={handleToggle}
                            aria-label="Toggle Menu"
                        >
                            <svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path d="M1 11H9M1 6H15M7 1H15" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </button>

                    </div>

                </div>
            </div>




            {/* Navbar content */}


            <div
                className={`${isOpen ? "transition-all ease-in-out duration-900  overflow-hidden fixed" : "-translate-x-full transition-all ease-in-out duration-900"
                    } bg-lightBlack w-full h-screen fixed top-0 left-0 z-40 transition-all ease-in-out duration-700`}
            >

                <div className="absolute top-3 right-3 md:top-5 md:right-5 pt-5 md:p-10">
                    <button
                        className="px-5"
                        onClick={handleToggle}
                        aria-label="Toggle Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hover:stroke-primary fill-offWhite stroke-offWhite">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>


                <div className="flex h-full">

                    <div className="flex flex-col w-full md:w-[70%] items-start">

                        <div className="pt-16 flex items-center pl-10 md:pl-20">

                            <motion.svg className="flex fill-lightBlack" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="150px" viewBox="0 0 747 742">

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

                            <h2 className='text-3xl md:text-5xl font-primary font-semibold text-textWhiteDark mt-4 pl-6'>Zade Group</h2>

                        </div>


                        <div className="flex flex-col w-[85%] mx-auto justify-center h-full pl-5 md:pl-20">

                            <Link to="/" className="text-3xl font-primary font-bold text-textWhiteLight  hover:cursor-pointer hover:text-textWhiteDark py-2">Home</Link>

                            <h1 className="py-2 text-3xl font-primary font-bold text-textWhiteLight hover:text-textWhiteDark">Projects</h1>

                            <Link to="/z2" className="text-3xl font-primary font-bold text-textWhiteLight  hover:cursor-pointer hover:text-textWhiteDark pl-6 py-2">Z2</Link>

                            <Link to="/zluxuria" className="text-3xl font-primary font-bold text-textWhiteLight  hover:cursor-pointer hover:text-textWhiteDark pl-6 py-2">Z Luxuria</Link>

                            {/* <Link to="/" className="text-3xl font-primary font-bold text-textWhiteLight  hover:cursor-pointer hover:text-textWhiteDark py-2">Contact</Link> */}

                            <Link to="/About" className="text-3xl font-primary font-bold text-textWhiteLight  hover:cursor-pointer hover:text-textWhiteDark py-2">About</Link>

                        </div>


                        {/* footer */}

                        <div className='flex flex-col md:flex-row justify-between pt-3 mb-6 w-[87%] mx-auto border-[#FFFFFF33] border-t font-primary'>

                            <div className='w-[80%] md:w-full mx-auto flex justify-between md:justify-start items-center my-4'>

                                <a href='https://www.facebook.com/fbzadegroup' target='_blank' rel="noreferrer" className=' md:mx-4 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform'>
                                    {/* <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-5 md:h-5 fill-white hover:fill-primary transition duration-500 ease-in-out transform'>
                                        <path d="M17.99 1.596C16.9813 1.48899 15.9675 1.43691 14.953 1.44C11.59 1.44 9.50005 3.582 9.50005 7.03V9.371H6.67505C6.54244 9.371 6.41526 9.42368 6.3215 9.51745C6.22773 9.61122 6.17505 9.73839 6.17505 9.871V13.721C6.17505 13.8536 6.22773 13.9808 6.3215 14.0746C6.41526 14.1683 6.54244 14.221 6.67505 14.221H9.50005V21.941C9.50005 22.0736 9.55273 22.2008 9.64649 22.2946C9.74026 22.3883 9.86744 22.441 10 22.441H13.978C14.1107 22.441 14.2378 22.3883 14.3316 22.2946C14.4254 22.2008 14.478 22.0736 14.478 21.941V14.221H17.294C17.4154 14.2211 17.5327 14.177 17.624 14.0969C17.7152 14.0169 17.7743 13.9064 17.79 13.786L18.287 9.936C18.2963 9.86543 18.2904 9.79371 18.2697 9.72561C18.249 9.65752 18.214 9.59462 18.167 9.54114C18.1201 9.48765 18.0623 9.44481 17.9974 9.41547C17.9326 9.38613 17.8622 9.37097 17.791 9.371H14.478V7.412C14.478 6.442 14.673 6.037 15.886 6.037H17.925C18.0577 6.037 18.1848 5.98432 18.2786 5.89056C18.3724 5.79679 18.425 5.66961 18.425 5.537V2.092C18.4251 1.97061 18.381 1.85334 18.301 1.76208C18.2209 1.67081 18.1104 1.61178 17.99 1.596ZM17.425 5.036L15.885 5.037C13.728 5.037 13.478 6.393 13.478 7.412V9.872C13.478 10.0044 13.5306 10.1315 13.6241 10.2252C13.7177 10.3189 13.8446 10.3717 13.977 10.372H17.223L16.854 13.222H13.978C13.8454 13.222 13.7183 13.2747 13.6245 13.3684C13.5307 13.4622 13.478 13.5894 13.478 13.722V21.44H10.5V13.722C10.5 13.5894 10.4474 13.4622 10.3536 13.3684C10.2598 13.2747 10.1327 13.222 10 13.222H7.17605V10.372H10C10.1327 10.372 10.2598 10.3193 10.3536 10.2256C10.4474 10.1318 10.5 10.0046 10.5 9.872V7.03C10.5 4.156 12.165 2.44 14.953 2.44C15.962 2.44 16.873 2.495 17.425 2.543V5.036Z" />
                                    </svg> */}

                                    <svg width="12" height="19" viewBox="0 0 12 19" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-5 md:h-5 fill-white hover:fill-primary transition duration-500 ease-in-out transform'>
                                        <path d="M10.4678 10.6875L11.001 7.24895H7.6669V5.01756C7.6669 4.07684 8.13265 3.15986 9.6259 3.15986H11.1416V0.232305C11.1416 0.232305 9.76615 0 8.45102 0C5.70527 0 3.91052 1.64691 3.91052 4.62828V7.24895H0.858398V10.6875H3.91052V19H7.6669V10.6875H10.4678Z" />
                                    </svg>


                                </a>


                                <a href='http://api.whatsapp.com/send?phone=+917573030027&text=Hi,%20I%20contacted%20you%20Through%20your%20website%20zadegroup.in' target='_blank' rel="noreferrer" className=' md:mx-4 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform'>
                                    {/* <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-5 md:h-5 fill-white hover:fill-primary transition duration-500 ease-in-out transform' >
                                        <path d="M12 2.4375C10.3326 2.43777 8.69415 2.87407 7.24737 3.70309C5.80059 4.53211 4.59573 5.72504 3.75236 7.1635C2.909 8.60196 2.45643 10.236 2.43958 11.9033C2.42272 13.5707 2.84216 15.2135 3.65628 16.6688L2.83128 19.5469C2.76391 19.7721 2.75874 20.0114 2.81631 20.2394C2.87389 20.4673 2.99206 20.6755 3.15831 20.8417C3.32457 21.008 3.5327 21.1261 3.76065 21.1837C3.98861 21.2413 4.2279 21.2361 4.45315 21.1688L7.33128 20.3438C8.60656 21.0578 10.0285 21.4699 11.488 21.5486C12.9474 21.6273 14.4055 21.3704 15.7501 20.7977C17.0948 20.2249 18.2903 19.3516 19.2447 18.2447C20.1992 17.1378 20.8872 15.8269 21.256 14.4126C21.6247 12.9983 21.6644 11.5183 21.3719 10.0863C21.0794 8.65435 20.4625 7.30846 19.5687 6.15207C18.6749 4.99567 17.5279 4.05955 16.2159 3.41561C14.9038 2.77168 13.4616 2.43707 12 2.4375ZM12 20.4375C10.4856 20.4371 8.99928 20.029 7.6969 19.2562C7.60738 19.2085 7.50774 19.1828 7.40628 19.1813C7.35555 19.1782 7.3047 19.1846 7.25628 19.2L4.14378 20.0906C4.1112 20.1007 4.0765 20.1016 4.04342 20.0934C4.01034 20.0852 3.98012 20.0681 3.95602 20.044C3.93191 20.0199 3.91484 19.9897 3.90663 19.9566C3.89841 19.9235 3.89937 19.8888 3.9094 19.8563L4.80003 16.7438C4.82105 16.6703 4.82691 16.5934 4.81724 16.5176C4.80757 16.4419 4.78257 16.3689 4.74378 16.3031C3.79435 14.7018 3.40116 12.8314 3.62547 10.9834C3.84978 9.1353 4.67899 7.4133 5.98393 6.08559C7.28887 4.75789 8.99627 3.89903 10.8402 3.6428C12.6841 3.38657 14.561 3.74736 16.1785 4.66896C17.796 5.59056 19.0633 7.02123 19.783 8.73812C20.5027 10.455 20.6344 12.3617 20.1575 14.1612C19.6807 15.9608 18.6221 17.5521 17.1466 18.6873C15.6711 19.8225 13.8617 20.4378 12 20.4375ZM16.8282 13.575L14.9063 12.4781C14.704 12.364 14.475 12.3056 14.2428 12.3089C14.0106 12.3122 13.7834 12.3771 13.5844 12.4969L12.3844 13.2188C11.7024 12.8558 11.1442 12.2976 10.7813 11.6156L11.5032 10.4156C11.623 10.2167 11.6878 9.98945 11.6911 9.75722C11.6944 9.52499 11.636 9.29604 11.5219 9.09375L10.425 7.17188C10.3185 6.9874 10.1655 6.83406 9.9813 6.72715C9.79707 6.62023 9.58804 6.56346 9.37503 6.5625C8.53127 6.5625 7.72194 6.89703 7.12443 7.49278C6.52693 8.08853 6.19001 8.89687 6.18753 9.74063C6.1863 10.8002 6.39393 11.8496 6.79856 12.8289C7.20318 13.8082 7.79687 14.6981 8.54566 15.4477C9.29446 16.1974 10.1837 16.7921 11.1625 17.1979C12.1413 17.6036 13.1905 17.8125 14.25 17.8125H14.2594C15.1032 17.81 15.9115 17.4731 16.5072 16.8756C17.103 16.2781 17.4375 15.4688 17.4375 14.625C17.4366 14.412 17.3798 14.203 17.2729 14.0187C17.166 13.8345 17.0126 13.6815 16.8282 13.575ZM14.2594 16.6875H14.25C12.4092 16.685 10.6447 15.952 9.34391 14.6495C8.04314 13.347 7.31253 11.5814 7.31253 9.74063C7.31501 9.19524 7.5334 8.67304 7.91992 8.28827C8.30645 7.90351 8.82964 7.68749 9.37503 7.6875C9.40393 7.68987 9.4308 7.7033 9.45003 7.725L10.5469 9.64688C10.562 9.6762 10.569 9.70897 10.5674 9.74188C10.5657 9.7748 10.5554 9.8067 10.5375 9.83438L9.66565 11.3063C9.61629 11.382 9.58696 11.469 9.5804 11.5592C9.57384 11.6494 9.59027 11.7398 9.62815 11.8219C10.1407 12.9531 11.047 13.8594 12.1782 14.3719C12.2603 14.4098 12.3506 14.4262 12.4408 14.4196C12.531 14.4131 12.618 14.3837 12.6938 14.3344L14.1657 13.4625C14.1933 13.4446 14.2252 13.4343 14.2581 13.4327C14.2911 13.431 14.3238 13.4381 14.3532 13.4531L16.275 14.55C16.2967 14.5692 16.3102 14.5961 16.3125 14.625C16.3125 15.1704 16.0965 15.6936 15.7118 16.0801C15.327 16.4666 14.8048 16.685 14.2594 16.6875Z" />
                                    </svg> */}

                                    <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-6 md:h-6 fill-white hover:fill-primary transition duration-500 ease-in-out transform group'>
                                        <path d="M67.6189 20.1393C65.8402 16.209 63.287 12.6803 60.0452 9.63934C56.8034 6.62705 53.0452 4.2459 48.8566 2.58197C44.5247 0.860656 39.9345 0 35.2009 0C30.4673 0 25.8771 0.860656 21.5451 2.58197C17.3566 4.2459 13.5984 6.59836 10.3566 9.63934C7.11478 12.6803 4.56153 16.209 2.78284 20.1393C0.946777 24.2131 0 28.5738 0 33.0492C0 40.8811 2.9262 48.3975 8.29095 54.3647L5.4221 70L20.6845 63.2008C25.2459 65.1516 30.0943 66.127 35.1722 66.127C39.9058 66.127 44.496 65.2664 48.8279 63.5451C53.0164 61.8811 56.7746 59.5287 60.0164 56.4877C63.2582 53.4467 65.8115 49.918 67.5902 45.9877C69.4263 41.9139 70.373 37.5533 70.373 33.0779C70.4017 28.5738 69.455 24.2418 67.6189 20.1393Z" className="group-hover:fill-primary fill-white transition duration-500 ease-in-out transform group" />
                                        <path d="M49.4879 39.6474C47.9961 38.9015 46.906 38.4425 46.1314 38.1556C45.6437 37.9835 44.4961 37.4671 44.0945 37.7827C42.8322 38.8155 41.4838 41.7417 40.0494 42.2868C36.492 41.5982 33.1929 39.1597 30.6109 36.6638C29.4633 35.5737 27.3404 32.4753 26.8814 31.6433C26.7953 30.7827 28.3444 29.6351 28.6887 28.9753C30.4674 26.9671 29.1191 25.7048 28.8896 24.8728C28.4879 24.0122 27.7994 22.463 27.197 21.2007C26.6806 20.3687 26.5657 19.1351 25.6477 18.6761C21.746 16.6679 19.5085 20.6843 18.5904 22.7786C13.0535 36.1187 46.3322 61.5081 53.1027 44.0081C53.4469 42.4876 53.3035 41.9138 52.7871 41.2253C51.7543 40.5081 50.5494 40.1925 49.4879 39.6474Z" className=" fill-black transition duration-500 ease-in-out transform group" />
                                    </svg>

                                </a>

                                <a href='https://www.linkedin.com/company/zade-group/' target='_blank' rel="noreferrer" className=' md:mx-4 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform'>

                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-5 md:h-5 fill-white hover:fill-primary transition duration-500 ease-in-out transform'  >
                                        <path d="M20 1.47059V18.5294C20 18.9194 19.8451 19.2935 19.5693 19.5693C19.2935 19.8451 18.9194 20 18.5294 20H1.47059C1.08056 20 0.706514 19.8451 0.430725 19.5693C0.154937 19.2935 0 18.9194 0 18.5294L0 1.47059C0 1.08056 0.154937 0.706514 0.430725 0.430725C0.706514 0.154937 1.08056 0 1.47059 0L18.5294 0C18.9194 0 19.2935 0.154937 19.5693 0.430725C19.8451 0.706514 20 1.08056 20 1.47059ZM5.88235 7.64706H2.94118V17.0588H5.88235V7.64706ZM6.14706 4.41177C6.14861 4.18929 6.10632 3.96869 6.02261 3.76255C5.93891 3.55642 5.81542 3.36879 5.65919 3.21039C5.50297 3.05198 5.31708 2.92589 5.11213 2.83933C4.90718 2.75277 4.68718 2.70742 4.46471 2.70588H4.41177C3.95934 2.70588 3.52544 2.88561 3.20552 3.20552C2.88561 3.52544 2.70588 3.95934 2.70588 4.41177C2.70588 4.86419 2.88561 5.29809 3.20552 5.61801C3.52544 5.93792 3.95934 6.11765 4.41177 6.11765C4.63426 6.12312 4.85565 6.0847 5.06328 6.00458C5.27092 5.92447 5.46074 5.80422 5.62189 5.65072C5.78304 5.49722 5.91237 5.31346 6.00248 5.10996C6.09259 4.90646 6.14172 4.6872 6.14706 4.46471V4.41177ZM17.0588 11.3412C17.0588 8.51177 15.2588 7.41177 13.4706 7.41177C12.8851 7.38245 12.3021 7.50715 11.7799 7.77345C11.2576 8.03974 10.8143 8.43832 10.4941 8.92941H10.4118V7.64706H7.64706V17.0588H10.5882V12.0529C10.5457 11.5403 10.7072 11.0315 11.0376 10.6372C11.3681 10.2429 11.8407 9.99488 12.3529 9.94706H12.4647C13.4 9.94706 14.0941 10.5353 14.0941 12.0176V17.0588H17.0353L17.0588 11.3412Z" />
                                    </svg>


                                </a>

                                <a href='https://twitter.com/ZadeGroup' target='_blank' rel="noreferrer" className='md:mx-4 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform'>


                                    <svg width="20" height="20" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5  fill-white hover:fill-primary transition duration-500 ease-in-out transform'>
                                        <path d="M20 1.9246C19.2645 2.25051 18.4744 2.47071 17.6438 2.57025C18.4911 2.06289 19.1412 1.25782 19.4477 0.29948C18.655 0.769841 17.7768 1.1116 16.8422 1.29481C16.0935 0.498547 15.0277 0 13.8474 0C11.582 0 9.74456 1.8374 9.74456 4.10464C9.74456 4.42526 9.78156 4.73707 9.85026 5.03832C6.43883 4.86656 3.41672 3.23263 1.39258 0.750462C1.04025 1.35823 0.837664 2.06289 0.837664 2.81335C0.837664 4.23677 1.56258 5.4937 2.66273 6.22919C1.98978 6.20717 1.35735 6.02308 0.804193 5.71567V5.76852C0.804193 7.75654 2.21792 9.41513 4.09583 9.79213C3.75055 9.88549 3.38853 9.93482 3.01506 9.93482C2.75081 9.93482 2.49273 9.91016 2.24258 9.86259C2.76491 11.4921 4.27993 12.6795 6.07593 12.7112C4.67101 13.8122 2.90144 14.4684 0.979477 14.4684C0.648287 14.4684 0.321501 14.449 0 14.4112C1.81626 15.5765 3.97252 16.2547 6.28909 16.2547C13.8378 16.2547 17.9644 10.0026 17.9644 4.58029C17.9644 4.40412 17.96 4.2262 17.9521 4.05003C18.7536 3.47045 19.4495 2.74905 19.9982 1.92724L20 1.9246Z" />
                                    </svg>

                                </a>

                                <a href='https://www.instagram.com/zade_group_official/' target='_blank' stroke-width={1.5} rel="noreferrer" className=' md:mx-4 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform' >
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 md:w-6 md:h-6 fill-white hover:fill-primary transition duration-500 ease-in-out transform' >
                                        <path d="M12 7.6875C11.1471 7.6875 10.3133 7.94042 9.6041 8.41429C8.89492 8.88815 8.34217 9.56167 8.01577 10.3497C7.68937 11.1377 7.60397 12.0048 7.77036 12.8413C7.93676 13.6779 8.34749 14.4463 8.9506 15.0494C9.55372 15.6525 10.3221 16.0632 11.1587 16.2296C11.9952 16.396 12.8623 16.3106 13.6503 15.9842C14.4383 15.6578 15.1118 15.1051 15.5857 14.3959C16.0596 13.6867 16.3125 12.8529 16.3125 12C16.3125 10.8563 15.8581 9.75935 15.0494 8.9506C14.2406 8.14185 13.1437 7.6875 12 7.6875ZM12 15.1875C11.3696 15.1875 10.7533 15.0006 10.2291 14.6503C9.70494 14.3001 9.29639 13.8022 9.05513 13.2198C8.81388 12.6374 8.75076 11.9965 8.87375 11.3781C8.99674 10.7598 9.30032 10.1919 9.7461 9.7461C10.1919 9.30032 10.7598 8.99674 11.3781 8.87375C11.9965 8.75076 12.6374 8.81388 13.2198 9.05513C13.8022 9.29639 14.3001 9.70494 14.6503 10.2291C15.0006 10.7533 15.1875 11.3696 15.1875 12C15.185 12.8446 14.8484 13.6539 14.2512 14.2512C13.6539 14.8484 12.8446 15.185 12 15.1875ZM16.125 2.8125H7.875C6.53234 2.8125 5.24467 3.34587 4.29527 4.29527C3.34587 5.24467 2.8125 6.53234 2.8125 7.875V16.125C2.8125 17.4677 3.34587 18.7553 4.29527 19.7047C5.24467 20.6541 6.53234 21.1875 7.875 21.1875H16.125C17.4677 21.1875 18.7553 20.6541 19.7047 19.7047C20.6541 18.7553 21.1875 17.4677 21.1875 16.125V7.875C21.1875 6.53234 20.6541 5.24467 19.7047 4.29527C18.7553 3.34587 17.4677 2.8125 16.125 2.8125ZM20.0625 16.125C20.0625 17.1693 19.6477 18.1708 18.9092 18.9092C18.1708 19.6477 17.1693 20.0625 16.125 20.0625H7.875C6.83071 20.0625 5.82919 19.6477 5.09077 18.9092C4.35234 18.1708 3.9375 17.1693 3.9375 16.125V7.875C3.9375 6.83071 4.35234 5.82919 5.09077 5.09077C5.82919 4.35234 6.83071 3.9375 7.875 3.9375H16.125C17.1693 3.9375 18.1708 4.35234 18.9092 5.09077C19.6477 5.82919 20.0625 6.83071 20.0625 7.875V16.125ZM17.8125 7.125C17.8125 7.31042 17.7575 7.49168 17.6545 7.64585C17.5515 7.80002 17.4051 7.92018 17.2338 7.99114C17.0625 8.06209 16.874 8.08066 16.6921 8.04449C16.5102 8.00831 16.3432 7.91902 16.2121 7.78791C16.081 7.6568 15.9917 7.48975 15.9555 7.3079C15.9193 7.12604 15.9379 6.93754 16.0089 6.76623C16.0798 6.59493 16.2 6.44851 16.3542 6.3455C16.5083 6.24248 16.6896 6.1875 16.875 6.1875C17.1236 6.1875 17.3621 6.28627 17.5379 6.46209C17.7137 6.6379 17.8125 6.87636 17.8125 7.125Z" />
                                    </svg>

                                    {/* <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-5 md:h-5 fill-white hover:fill-primary transition duration-500 ease-in-out transform'>
                                        <path d="M49.9713 60H10.0288C4.50924 60 0 55.4908 0 49.9713V10.0287C0 4.50924 4.50924 0 10.0288 0H49.9713C55.4908 0 60 4.50924 60 10.0287V49.9713C60 55.5154 55.5154 60 49.9713 60Z" fill="white" />
                                        <path d="M30.0123 45.4128C25.8974 45.4128 22.0288 43.8111 19.1212 40.9035C16.2136 37.9959 14.6119 34.1273 14.6119 30.0123C14.6119 25.8974 16.2136 22.0288 19.1212 19.1212C22.0288 16.2136 25.8974 14.6119 30.0123 14.6119C34.1273 14.6119 37.9959 16.2136 40.9035 19.1212C43.8111 22.0288 45.4128 25.8974 45.4128 30.0123C45.4128 34.1273 43.8111 37.9959 40.9035 40.9035C37.9713 43.8111 34.1273 45.4128 30.0123 45.4128ZM30.0123 17.8891C23.3347 17.8891 17.8891 23.3101 17.8891 30.0123C17.8891 36.69 23.3101 42.1355 30.0123 42.1355C36.69 42.1355 42.1356 36.7146 42.1356 30.0123C42.1109 23.3347 36.69 17.8891 30.0123 17.8891Z" fill="black" />
                                        <path d="M48.4145 14.1058C50.0476 14.1058 51.3715 12.7819 51.3715 11.1488C51.3715 9.51577 50.0476 8.19189 48.4145 8.19189C46.7815 8.19189 45.4576 9.51577 45.4576 11.1488C45.4576 12.7819 46.7815 14.1058 48.4145 14.1058Z" fill="white" />
                                    </svg> */}


                                </a>
                            </div>
                        </div>


                    </div>




                    {/* Right Side */}

                    <div className="hidden md:flex justify-start items-center md:w-[30%] bg-black">

                        <div className="flex flex-col ml-14">
                            <div className="my-6">
                                <h3 className="font-primary pb-1 text-textWhiteLight font-semibold">How We can help?</h3>
                                <a href='mailto:info@zadegroup.in' className="text-2xl pb-1 border-b border-offWhite text-textWhiteDark font-primary font-[500] hover:text-gold transition duration-500 ease-in-out transform group">info@zadegroup.in</a>
                            </div>
                            <div className="my-6">
                                <h3 className="font-primary pb-1 text-textWhiteLight font-semibold">Give us a call!</h3>
                                <a href='tel:7573030027' className="text-2xl pb-1 text-textWhiteDark font-[500] hover:text-gold transition duration-500 ease-in-out transform group">7573030027-28</a>
                            </div>
                            <div className="my-6">
                                <h3 className="font-primary pb-1 text-textWhiteLight font-semibold">Visit our office</h3>
                                <a href='https://goo.gl/maps/4y4iq9cLUZpNLQnL8' className="text-2xl pb-1 text-textWhiteDark font-primary font-[500] hover:text-gold transition duration-500 ease-in-out transform group">Get Direction</a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
