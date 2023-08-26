import { motion } from "framer-motion"
import { useState, useEffect, useLayoutEffect } from 'react'
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
import bg from '../image/hero_image_zage_group.jpeg';
import home_bg_1 from '../image/zade_group_bg.png'
import home_bg_2 from '../image/Home_bg_6.jpg'
// import pattern_image from '../image/skyscraper-.jpeg';
import award from '../image/z2_sketch-1.jpg'
// import award from '../image/z2/1.jpeg'
import crain from '../image/crain.png'
// import home_bg_4 from '../image/bg-1.png'

// import project_corporate_space from '../image/z2/3.jpeg'


// svg imports
// import corporate_svg from '../image/svg/buildings_1.svg';
import office_svg from '../image/svg/offices.svg';
// import showroom_svg from '../image/svg/apartment.svg';
import residency_svg from '../image/svg/Recidency.svg';
import { Link } from "react-router-dom";




function Home() {


    const [ProjectId, setProjectId] = useState(0);
    // const [Action, setAction] = useState("Right");
    // const [imageLoaded, setImageLoaded] = useState(false)
    // const [backgroundImage, setBackgroundImage] = useState(`url(${Projects[0].image})`);

    const ProjectToggle = (Action) => {

        // setImageLoaded(false);

        if (Action === -1) {
            setProjectId(ProjectId === 0 ? Projects.length - 1 : ProjectId - 1);
            // setBackgroundImage(`url(${Projects[ProjectId].image})`)
            // setImageLoaded(true)
            // console.log(backgroundImage);
        }
        else {
            setProjectId(ProjectId === Projects.length - 1 ? 0 : ProjectId + 1)
            // setBackgroundImage(`url(${Projects[ProjectId].image})`)
            // console.log(backgroundImage);
            // setImageLoaded(true)
        }
    }


    useLayoutEffect(() => {
        // console.log("set");
        const interval = setInterval(() => {
            setProjectId(prevProjectId => prevProjectId === Projects.length - 1 ? 0 : prevProjectId + 1);
        }, 7000);
        return () => { clearInterval(interval); };
    });

    useEffect(() => {
        setProjectId(1);
        window.scrollTo(0, 0);
        // console.log(location.pathname);
    }, []);

    return (

        <motion.div exit={{ opacity: 0 }}>

            <InitialTransition />

            <Navbar />

            <div className="relative h-[600px] md:h-screen">
                <div
                    className="bg-cover bg-center h-[600px] md:h-screen w-full absolute inset-0 bg-no-repeat md:bg-fixed"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}>
                    {/* <Navbar /> */}
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

                            className="h-full flex flex-col justify-center items-center">

                            <div className='flex flex-col justify-center items-center -mt-20'>

                                <h1 className='text-3xl mt-10 pt-10 pb-2 md:text-5xl text-center font-bold text-white font-style uppercase'>Zade Group</h1>
                                {/* <h1 className='text-3xl md:text-6xl text-center font-bold text-white font-style uppercase'>Build The Future</h1> */}
                                <p className="w-[90%] md:w-[70%] mx-auto pt-8 md:text-2xl text-white font-primary text-center py-4 font-medium">We're excited to present a new level of luxury in Ahmedabad with state-of-the-art facilities, world-className amenities, and stunning architectural design.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>


            {/* About */}


            <div className="w-full bg-white">

                <div className="md:bg-cover md:bg-center flex flex-col justify-center items-center w-full py-10"
                    style={{
                        backgroundImage: `url(${home_bg_1})`,
                    }}>

                    <motion.h1

                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                        }}
                        initial={{ opacity: 0.5 }}

                        className="text-3xl md:text-5xl font-style uppercase mt-32 pb-14 text-center text-primary">ABOUT ZADE GROUP</motion.h1>

                    <div className="w-[85%] md:w-[60%] mx-auto mb-14">

                        <motion.p

                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                            initial={{ opacity: 0.5 }}

                            className="text-lg pt-4 pb-2 text-black font-primary text-center">
                            At Zade Group, we've been providing top-quality construction services in Ahmedabad for over a decade. Our reputation has been built on our commitment to delivering exceptional projects that surpass our partners' expectations.
                        </motion.p>

                        <motion.p whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                            initial={{ opacity: 0.5 }} className="hidden md:block text-lg py-2 text-black font-primary text-center">
                            Our commitment to our partners is evident in every detail of this project, from the impressive entrance to the luxurious interiors. We're passionate about providing the best possible living experience for our clients, and we're confident that our latest project will exceed their expectations.
                        </motion.p>
                        <motion.p whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                            initial={{ opacity: 0.5 }} className="hidden md:block text-lg py-2 text-black font-primary text-center">
                            We're proud to set the bar high for construction companies in Ahmedabad, inspiring others to aim for greatness and always strive for excellence.
                        </motion.p>
                    </div>

                </div>

            </div>



            {/* award  */}


            <div className="flex justify-center">


                <div className="bg-cover md:w-[55%] pb-16 md:pb-0 flex flex-col justify-center items-center">

                    <div className="w-[95%] relative flex justify-center pt-10">

                        <img src={crain} alt="Zade group award collection" className="md:ml-28 w-[300px] md:h-[680px] md:w-[500px]" />

                        <video
                            src="https://res.cloudinary.com/dqc8hsfyv/video/upload/v1689241509/Most_Work-Friendly_Office_Space_of_the_Year_hyqqcf.mp4"

                            autoPlay muted loop controls
                            className="rounded-sm shadow-sm absolute w-[60%] top-[45%] left-[7%] md:left-[17%]"

                        />
                    </div>


                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                        }}
                        initial={{ opacity: 0.5, y: 20 }}
                        className="flex flex-col justify-center w-[85%] md:w-[70%] pt-8 md:pt-2 md:pb-14">
                        <h1 className="text-2xl md:text-5xl font-style text-center text-primary">most work friendly office Space of the year</h1>
                        <h1 className="text-2xl md:text-4xl font-style text-center pt-3 md:pt-5">Award winner for Z2</h1>
                    </motion.div>


                </div>
                <div className="hidden md:flex items-start w-[45%] bg-cover bg-center"
                >

                    <img src={award} alt="z2 most work friendly office Space of the year award" className="h-full" />
                    {/* <div className="">
                    </div> */}

                </div>


            </div>



            {/* projects  */}

            <div className="bg-gray py-20 md:py-40 md:pb-60">

                <div className="flex justify-center items-center">

                    <div className="flex flex-col items-center md:relative md:-bottom-12 md:left-20 md:w-[80%] mx-auto md:z-30">
                        <motion.h1
                            className="text-3xl md:text-6xl font-style font-extrabold text-primaryHover uppercase">zade group</motion.h1>
                        <motion.h1
                            className="text-2xl mb-4 md:text-7xl md:pt-2 font-style font-semibold text-[#181D24] uppercase">Presenting</motion.h1>
                    </div>
                    {/* <motion.h1 className="text-2xl mb-4 md:text-[10rem] md:pt-2 font-script text-[#181D24]">presenting</motion.h1> */}

                </div>

                <div className="flex flex-col md:flex-row">


                    {/* image  */}

                    <div className="md:w-[55%] relative h-[650px] md:h-[1100px] hover:cursor-pointer z-20">
                        <Link to={Projects[ProjectId].link}>

                            <div className="w-full h-full">
                                <motion.div
                                    // key={Projects[ProjectId].id}
                                    className={`w-full h-full rounded-sm opacity-0 bg-no-repeat bg-cover hover:cursor-pointer`}
                                    style={{
                                        backgroundImage: `url(${Projects[ProjectId].image})`,
                                    }}
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ delay: 0.5, duration: 2 }}
                                ></motion.div>
                            </div>
                        </Link>

                        <div className="absolute bottom-0 right-0 flex flex-col justify-end items-end">
                            <div className="px-5 md:px-12 py-10 flex flex-col justify-center items-center">
                                <div>
                                    <h1 className="text-2xl md:text-4xl text-[#000] font-style text-center">~ {Projects[ProjectId].id} ~</h1>
                                    <h1 className="text-3xl md:text-5xl text-[#000] font-style text-center">{Projects[ProjectId].title}</h1>
                                </div>

                                <div className="flex justify-center md:hidden w-full mt-4 z-50">

                                    <div className="p-3 rounded-full border border-primaryHover hover:border-secondary transition duration-500 ease-in-out transform" onClick={() => { ProjectToggle(-1); }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                        </svg>
                                    </div>
                                    <div className="ml-2 p-3 rounded-full border border-primaryHover hover:border-secondary transition duration-500 ease-in-out transform" onClick={() => { ProjectToggle(1) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Details */}

                    <div key={Projects[ProjectId].id} className="px-5 mt-10 md:w-[45%] flex flex-col justify-start md:mt-28 md:px-20 ">

                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}
                            className="text-4xl md:text-5xl font-style text-primaryHover py-2 md:pb-3">{Projects[ProjectId].title}
                        </motion.h1>

                        <motion.p

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="py-2 font-primary md:pl-1">{Projects[ProjectId].description}
                        </motion.p>



                        <motion.div

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className='flex items-center justify-start pt-4 py-2'>

                            <a href={Projects[ProjectId].locationLink} target="_blank" rel="noreferrer">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cda24b" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                            </a>


                            <a href={Projects[ProjectId].locationLink} target="_blank" rel="noreferrer">
                                <p className='ml-3 text-secondary'>{Projects[ProjectId].location}</p>
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

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cda24b" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>



                            <p className='ml-3 text-secondary'>{Projects[ProjectId].status}</p>


                        </motion.div>

                        <motion.div

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="hidden md:grid grid-cols-2 md:py-8">

                            {
                                Projects[ProjectId].details ? Projects[ProjectId].details.map((item, index) => {
                                    return (

                                        <div key={index} className="flex flex-col py-10">
                                            <h3 className="text-4xl text-primaryHover">{item[0]}</h3>
                                            <h4 className="py-4 text-xl font-style">{item[1]}</h4>
                                        </div>
                                    )
                                }) : null
                            }

                        </motion.div>

                        <Link to={Projects[ProjectId].link} className="mt-5 md:mt-0 mb-10">


                            <span className="py-2 md:py-3 px-6 w-fit  border border-primaryHover rounded-full font-primary hover:bg-primaryHover hover:text-white hover:cursor-pointer">Read More</span>

                        </Link>

                        <div className="hidden md:flex mt-10">

                            <div className="p-7 rounded-full border border-primaryHover hover:border-secondary transition duration-500 ease-in-out transform" onClick={() => { ProjectToggle(-1) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                            </div>
                            <div className="p-7 ml-2 rounded-full border border-primaryHover hover:border-secondary transition duration-500 ease-in-out transform" onClick={() => { ProjectToggle(1) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>

            </div>




            {/* specialties */}


            <div className="relative h-[85vh]">
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
