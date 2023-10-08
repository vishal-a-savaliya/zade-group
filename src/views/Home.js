import { motion } from "framer-motion"
import { useEffect } from 'react'
// import transition from 'tailwindcss/plugin/transition';

//Data

import { Projects } from "../data/ProjectDetails";


//components

import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import InitialTransition from "../components/InitialTransition";
import Contact from '../components/Contact';
import Footer from '../components/Footer';


//images
// import bg from '../image/zade_group_hero_image.jpg';
// import home_bg_1 from '../image/landing_bg1.png'
import bg from '../image/zade_group_hero.webp';
import home_bg_1 from '../image/zade_group_about_section_bg.webp'
import home_bg_2 from '../image/feature_image_bg.webp'
import z2 from '../image/z2/1.jpeg';
import bg_pattern from '../image/bg-pattern.webp';
// import pattern_image from '../image/skyscraper-.jpeg';
// import award from '../image/z2_sketch-1.jpg'
import award from '../image/award-symbol.webp';
// import crain from '../image/crain.png'
// import home_bg_4 from '../image/bg-1.png'
import ZadeGroupLogo from '../image/Z GROUP LOGO_SQURE.png'

// import project_corporate_space from '../image/z2/3.jpeg'


// svg imports
// import corporate_svg from '../image/svg/buildings_1.svg';
import office_svg from '../image/svg/offices.svg';
// import showroom_svg from '../image/svg/apartment.svg';
import residency_svg from '../image/svg/Recidency.svg';
import { Link } from "react-router-dom";
// import { Pattern } from "@mui/icons-material";




function Home() {


    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

        <motion.div exit={{ opacity: 0 }}>

            <InitialTransition />

            {/* <Navbar /> */}

            <Navbar />

            <div className="relative h-[600px] md:h-screen">
                <div
                    className="bg-cover bg-center h-[100vh] md:h-screen w-full absolute inset-0 bg-no-repeat md:bg-fixed"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}
                >
                    <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                        <motion.div
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 3,
                                delay: 7,
                                // ease: [0.5, 0.71, 1, 1.5],
                            }}
                            initial={{ opacity: 0 }}
                            // whileHover={{ scale: 1.2 }}

                            className="h-full flex flex-col justify-center items-start px-6 md:px-20 pb-5 md:pb-10">

                            <div className="md:hidden mt-10 pt-10">
                                <img src={ZadeGroupLogo} alt="Zade group logo" className="w-[150px] pb-7" />
                            </div>

                            <div className='flex flex-col justify-center items-start md:w-[65%]'>

                                <h1 className='text-5xl md:mt-10 md:pt-10 pb-2 md:text-8xl text-center font-bold text-textWhiteDark font-primary'>Zade Group</h1>
                                {/* <h1 className='text-3xl md:text-6xl text-center font-bold text-white font-style uppercase'>Build The Future</h1> */}
                                <p className="pt-4 md:pt-8 md:text-2xl text-textWhiteLight text-left md:py-4 font-light">We're excited to present a new level of luxury in Ahmedabad with state-of-the-art facilities, world-class amenities, and stunning architectural design.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>


            {/* About */}


            <div className="w-full bg-white">

                <div className="md:bg-cover relative md:bg-center flex flex-col justify-center items-center w-full py-16 md:px-14"
                    style={{
                        backgroundImage: `url(${home_bg_1})`,
                    }}>

                    <div className="absolute h-[400px] w-full z-10 bottom-0 md:hidden bg-right" style={{
                        backgroundImage: `url(${bg_pattern})`,
                    }}></div>

                    <div className="mt-16 md:mt-7">

                        <motion.h2

                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                            initial={{ opacity: 0.5 }}

                            className="text-xl md:text-lg text-center primaryBlack font-[500] md:py-2">
                            Who we are
                        </motion.h2>

                        <h3 className="text-2xl md:text-5xl text-center primaryBlack font-[600] py-2 w-[75%] mx-auto">
                            Safety, quality, excellence the future of construction is here.
                        </h3>

                        <h3 className="text-tomato font-primary text-center text-2xl font-bold md:font-semibold py-2">Zade Group</h3>

                    </div>

                    {/* desktop */}
                    <div className="hidden w-[85%] h-[600px] lg:h-[700px] md:flex my-14 rounded-sm shadow-md z-20">

                        <div className="w-[50%] h-full relative bg-cover bg-center rounded-l-md" style={{
                            backgroundImage: `url(${z2})`,
                        }}>

                        </div>

                        <div className="h-full w-[50%] relative bg-textWhiteDark rounded-r-md">
                            <div className="h-full w-full z-10" style={{
                                backgroundImage: `url(${bg_pattern})`,
                            }}></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[65%] h-[70%] bg-[#bda588] z-20 flex flex-col justify-center items-center rounded-sm">

                                <img src={award} alt="award for Z2" className="w-32 h-32" />
                                <h2 className="font-primary text-textWhiteDark text-4xl font-bold text-center px-10 py-5">most work friendly office Space of the year</h2>
                                <h2 className="text-xl text-textWhiteDark">Award winner for Z2</h2>

                            </div>
                        </div>

                    </div>

                    {/* Mobile */}
                    <div className="w-[89%] h-full flex flex-col md:hidden my-14 rounded-sm shadow-md z-20">

                        <div className="w-full h-full relative bg-cover bg-center rounded-t-md"
                        // style={{
                        //     backgroundImage: `url(${z2})`,
                        // }}
                        >
                            <img src={z2} alt="Z2 Award winner for most work friendly office Space of the year" />
                        </div>

                        <div className="h-full w-full relative bg-textWhiteDark rounded-b-md">

                            <div className="bg-[#bda588] py-10 z-20 flex flex-col justify-center items-center rounded-sm">
                                <img src={award} alt="award for Z2" className="w-32 h-32" />
                                <h2 className="font-primary text-textWhiteDark text-4xl font-bold text-center px-4 py-5">most work friendly office Space of the year</h2>
                                <h2 className="text-xl text-textWhiteDark">Award winner for Z2</h2>
                            </div>
                        </div>

                    </div>

                </div>

            </div>





            {/* projects  */}

            <div className="bg-white relative md:py-40 pb-28 md:pb-60">


                {/* Desktop */}

                <div className="hidden md:flex justify-center items-center">

                    <div className="flex flex-col items-center md:relative md:-bottom-12 md:left-20 md:w-[80%] mx-auto md:z-30">
                        <motion.h1
                            className="text-3xl md:text-6xl font-semibold primaryBlack">Presenting</motion.h1>
                        <motion.h1
                            className="text-2xl mb-4 md:text-8xl md:pt-2 font-style font-bold text-tomato font-primary">Zade Group's</motion.h1>
                    </div>

                </div>


                {/* Mobile */}

                <div className="md:hidden absolute flex justify-center items-center -top-10 left-1/2 transform -translate-x-1/2 z-40">

                    <div className="flex flex-col items-center mx-auto">
                        <motion.h1
                            className="text-5xl font-semibold primaryBlack">Presenting</motion.h1>
                        <motion.h1
                            className="mt-2 text-xl md:pt-2 font-style text-center font-bold text-tomato font-primary">CORPORATE EDIFICE</motion.h1>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row">


                    {/* image  */}

                    <div className="md:w-[55%] relative h-[650px] md:h-[1200px] hover:cursor-pointer z-20">
                        <Link to={Projects[0].link}>

                            <div className="w-full h-full">
                                <motion.div
                                    // key={Projects[ProjectId].id}
                                    className={`w-full h-full rounded-sm opacity-0 bg-no-repeat bg-cover hover:cursor-pointer`}
                                    style={{
                                        backgroundImage: `url(${Projects[0].image})`,
                                    }}
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ delay: 0.5, duration: 2 }}
                                ></motion.div>
                            </div>
                        </Link>

                        <div className="hidden absolute bottom-0 right-0 md:flex flex-col justify-end items-end">
                            <div className="px-5 md:px-12 py-10 flex flex-col justify-center items-center">
                                <div>
                                    <h1 className="text-3xl md:text-7xl text-tomato font-style text-center">{Projects[0].title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Details */}

                    <div key={Projects[0].id} className="px-5 mt-10 md:w-[45%] flex flex-col justify-start md:mt-28 md:px-20 ">

                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}
                            className="text-5xl md:text-6xl font-[500] py-2 md:pb-3">{Projects[0].title}
                        </motion.h1>

                        <motion.p

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="py-3 font-secondary text-secondaryBlack md:pl-1">{Projects[0].description}
                        </motion.p>



                        <motion.div

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className='flex items-center justify-start pt-4 py-2'>

                            <a href={Projects[0].locationLink} target="_blank" rel="noreferrer">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8 stroke-tomato">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                            </a>


                            <a href={Projects[0].locationLink} target="_blank" rel="noreferrer">
                                <p className='ml-3 primaryBlack text-xl '>{Projects[0].location}</p>
                            </a>

                        </motion.div>

                        <motion.div

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className='flex items-center justify-start py-2'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8 stroke-tomato">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>



                            <p className='ml-3 primaryBlack text-xl'>{Projects[0].status}</p>


                        </motion.div>

                        <motion.div

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="hidden md:grid grid-cols-1 md:my-5 md:py-6 border-gold border-t">

                            {
                                Projects[0].details ? Projects[0].details.map((item, index) => {
                                    return (

                                        <div key={index} className="flex py-4 items-center">
                                            <h3 className="text-4xl text-tomato font-semibold">{item[0]}</h3>
                                            <h4 className="py-4 text-4xl font-semibold primaryBlack ml-3">{item[1]}</h4>
                                        </div>
                                    )
                                }) : null
                            }

                        </motion.div>

                        <Link to={Projects[0].link} className="mt-10 md:mt-0 mb-10">

                            <span className="button-tomato">Read More</span>

                        </Link>

                    </div>
                </div>







                {/* Z Luxuria */}

                <div className="flex justify-center items-center mt-28 md:mt-20 relative">

                    <div className="hidden md:flex flex-col items-center md:relative md:-bottom-12 md:left-18 md:w-[80%] mx-auto md:z-30">
                        <motion.h1
                            className="text-3xl md:text-6xl font-semibold primaryBlack">Presenting</motion.h1>
                        <motion.h1
                            className="text-2xl mb-4 md:text-8xl md:pt-2 font-style font-bold text-gold font-primary">Z Luxuria</motion.h1>
                    </div>


                    {/* Mobile */}

                    <div className="md:hidden absolute flex justify-center items-center -top-10 left-1/2 transform -translate-x-1/2 z-40">

                        <div className="flex flex-col items-center mx-auto">
                            <motion.h1
                                className="text-5xl font-semibold primaryBlack">Presenting</motion.h1>
                            <motion.h1
                                className="mt-2 text-3xl md:pt-2 font-style text-center font-bold text-gold font-primary">Z Luxuria</motion.h1>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row-reverse">


                    {/* image  */}

                    <div className="md:w-[55%] relative h-[650px] md:h-[1200px] hover:cursor-pointer z-20">
                        <Link to={Projects[1].link}>

                            <div className="w-full h-full">
                                <motion.div
                                    // key={Projects[1rojectId].id}
                                    className={`w-full h-full rounded-sm opacity-0 bg-no-repeat bg-cover hover:cursor-pointer`}
                                    style={{
                                        backgroundImage: `url(${Projects[1].image})`,
                                    }}
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ delay: 0.5, duration: 2 }}
                                ></motion.div>
                            </div>
                        </Link>

                        {/* <div className="absolute bottom-0 left-0 flex flex-col justify-end items-end">
                            <div className="px-5 md:px-12 py-10 flex flex-col justify-center items-center">
                                <div>
                                    <h1 className="text-3xl md:text-7xl text-gold font-primary font-semibold text-center">{Projects[1].title}</h1>
                                </div>
                            </div>
                        </div> */}
                    </div>


                    {/* Details */}

                    <div key={Projects[1].id} className="px-5 mt-10 md:w-[45%] flex flex-col justify-start md:mt-28 md:px-20 ">

                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}
                            className="text-4xl md:text-6xl font-bold font-primary py-2 md:pb-3">{Projects[1].title}
                        </motion.h1>

                        <motion.p

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="py-3 font-secondary text-secondaryBlack md:pl-1">{Projects[1].description}
                        </motion.p>



                        <motion.div

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className='flex items-center justify-start pt-4 py-2'>

                            <a href={Projects[1].locationLink} target="_blank" rel="noreferrer">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8 stroke-gold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                            </a>


                            <a href={Projects[1].locationLink} target="_blank" rel="noreferrer">
                                <p className='ml-3 primaryBlack text-xl '>{Projects[1].location}</p>
                            </a>

                        </motion.div>

                        <motion.div

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className='flex items-center justify-start py-2'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8 stroke-gold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>



                            <p className='ml-3 primaryBlack text-xl'>{Projects[1].status}</p>


                        </motion.div>

                        <motion.div

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="hidden md:grid grid-cols-1 md:my-5 md:py-6 border-gold border-t">

                            {
                                Projects[1].details ? Projects[1].details.map((item, index) => {
                                    return (

                                        <div key={index} className="flex py-4 items-center">
                                            <h3 className="text-4xl text-gold font-semibold">{item[0]}</h3>
                                            <h4 className="py-4 text-4xl font-semibold primaryBlack ml-3">{item[1]}</h4>
                                        </div>
                                    )
                                }) : null
                            }

                        </motion.div>

                        <Link to={Projects[1].link} className="mt-10 md:mt-0 mb-10">


                            <span className="button-gold">Read More</span>

                        </Link>

                    </div>
                </div>


            </div>




            {/* specialties */}


            <div className="relative h-[85vh] bg-black">
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${home_bg_2})` }}
                />
                <div className="relative z-10 flex flex-col justify-center items-center h-[85vh]">

                    <div className="md:w-[1000px] overflow-x-scroll no-scrollbar max-w-[85%] flex md:justify-evenly">

                        {/* <FeatureCard SVG={corporate_svg} Text={"Corporate Space"} /> */}
                        {/* <FeatureCard SVG={office_svg} Text={"Office Space"} /> */}
                        {/* <FeatureCard SVG={showroom_svg} Text={"Showrooms"} /> */}
                        <FeatureCard SVG={office_svg} Text={"Corporate Space"} />
                        <FeatureCard SVG={residency_svg} Text={"Supersize Residency"} />

                    </div>
                </div>
            </div>

            <Contact Email={'info@zadegroup.in'} Subject={'New message from zadegroup.in'} />
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />

        </motion.div>
    );
}

export default Home;
