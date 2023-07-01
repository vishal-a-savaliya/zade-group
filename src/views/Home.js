import { motion } from "framer-motion"
import { useState, useCallback, useEffect } from 'react'
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
import bg from '../image/hero_image.jpeg';
import home_bg_1 from '../image/landing_bg1.png'
import home_bg_2 from '../image/Home_bg_6.jpg'
// import home_bg_4 from '../image/bg-1.png'

// import project_corporate_space from '../image/z2/3.jpeg'


// svg imports
// import corporate_svg from '../image/svg/buildings_1.svg';
import office_svg from '../image/svg/offices.svg';
import showroom_svg from '../image/svg/apartment.svg';
import residency_svg from '../image/svg/Recidency.svg';
import { Link } from "react-router-dom";




function Home() {


    const [ProjectId, setProjectId] = useState(0);
    // const [Action, setAction] = useState("Right");
    // const [imageLoaded, setImageLoaded] = useState(false)
    // const [backgroundImage, setBackgroundImage] = useState(`url(${Projects[0].image})`);

    const ProjectToggle = useCallback((Action) => {

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
    }, [ProjectId])

    useEffect(() => {
        const interval = setInterval(() => {
            ProjectToggle(1);
        }, 7000);
        return () => clearInterval(interval);
    }, [ProjectToggle]);

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
                    <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
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
                                <p className="w-[90%] md:w-[70%] mx-auto pt-8 md:text-xl text-white font-primary text-center py-4 font-medium">We're excited to present a new level of luxury in Ahmedabad with state-of-the-art facilities, world-class amenities, and stunning architectural design.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>


            <div className="w-full bg-white pb-10">

                <motion.h1

                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    initial={{ opacity: 0.5 }}

                    className="text-3xl md:text-5xl font-style uppercase mt-32 text-center text-primary">ABOUT ZADE GROUP</motion.h1>

                <div className="md:bg-cover md:bg-center flex flex-col justify-center items-center w-full py-10"
                    style={{
                        backgroundImage: `url(${home_bg_1})`,
                    }}>

                    <div className="w-[85%] md:w-[65%] mx-auto mb-14">

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



            {/* projects  */}

            <div className="bg-gray py-20 md:py-40 md:pb-60">

                <div className="flex justify-center items-center">

                    <div className="md:relative flex flex-col items-center md:-bottom-12 md:left-20 md:w-[80%] mx-auto md:z-20">
                        <motion.h1
                            className="text-3xl md:text-6xl font-style font-extrabold text-primaryHover uppercase">zade group</motion.h1>
                        <motion.h1
                            className="text-2xl mb-4 md:text-7xl md:pt-2 font-style font-semibold text-[#181D24] uppercase">Presenting</motion.h1>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row">
                    <Link to={Projects[ProjectId].link} className="md:w-[55%] relative h-[650px] md:h-[1000px] hover:cursor-pointer">
                        <div className="w-full h-full">
                            <motion.div
                                key={Projects[ProjectId].id}
                                className={`absolute w-full h-full rounded-sm opacity-0 bg-no-repeat bg-cover hover:cursor-pointer`}
                                style={{
                                    backgroundImage: `url(${Projects[ProjectId].image})`,
                                }}
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ delay: 0.5, duration: 2 }}
                            ></motion.div>

                            <div
                                className="relative z-10 flex flex-col justify-end items-end h-full"
                            >
                                <div className="px-5 md:px-12 py-10 flex flex-col justify-center items-center">
                                    <div>
                                        <h1 className="text-4xl text-[#000] font-style">~ {Projects[ProjectId].id} ~</h1>
                                        <h1 className="text-2xl text-[#000] font-style">{Projects[ProjectId].title}</h1>
                                    </div>

                                    <div className="flex justify-start md:hidden w-full mt-4">

                                        <div className="p-3 rounded-full border border-primaryHover hover:border-secondary transition duration-500 ease-in-out transform" onClick={() => { ProjectToggle(-1) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                            </svg>
                                        </div>
                                        <div className="ml-2 p-3 rounded-full border border-primaryHover hover:border-secondary transition duration-500 ease-in-out transform" onClick={() => { ProjectToggle(1) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div key={Projects[ProjectId].id} className="px-5 mt-10 md:w-[45%] flex flex-col justify-start md:mt-28 md:px-20 ">
                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}
                            className="text-4xl md:text-5xl font-style text-primaryHover py-2">{Projects[ProjectId].title}</motion.h1>

                        <motion.p

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="py-2 font-primary">{Projects[ProjectId].description}</motion.p>

                        <motion.p

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="text-secondary pb-1 pt-3 font-primary">{Projects[ProjectId].location}</motion.p>
                        <motion.p

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="py-1 text-primary font-primary">{Projects[ProjectId].status}</motion.p>

                        <motion.div

                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                            }}
                            initial={{ opacity: 0, x: 20 }}

                            className="hidden md:grid grid-cols-2">

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

                        <Link to={Projects[ProjectId].link} className="mt-5 md:mt-2 mb-10">


                            <span className="py-2 px-6 w-fit  border border-primaryHover rounded-full font-primary hover:bg-primaryHover hover:text-white hover:cursor-pointer">Read More</span>

                        </Link>

                        <div className="hidden md:flex mt-4">

                            <div className="p-7 rounded-full border border-primaryHover hover:border-secondary transition duration-500 ease-in-out transform" onClick={() => { ProjectToggle(-1) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                            </div>
                            <div className="p-7 ml-2 rounded-full border border-primaryHover hover:border-secondary transition duration-500 ease-in-out transform" onClick={() => { ProjectToggle(1) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            {/* CTA */}

            {/* <div className="bg-cover bg-center bg-secondary bg-opacity-90 flex flex-col justify-center items-center h-[400px]"
                style={{
                    backgroundImage: `url(${home_bg_4})`,
                }}
            >
                <h1 className="text-5xl font-style uppercase py-2 text-black">SUTTON PLACE ARE WAITING FOR YOU HERE</h1>
                <h1 className="text-6xl font-style py-2 text-black">SCHEDULE A TOUR</h1>
                <button className="py-2 px-4 my-2 bg-black text-white">BOOK A VISIT</button>
            </div> */}

            {/* features */}


            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${home_bg_2})` }}
                />
                <div className="relative z-10 flex flex-col justify-center items-center h-screen">

                    <div className="md:w-[1000px] overflow-x-scroll no-scrollbar max-w-[85%] flex justify-between">

                        {/* <FeatureCard SVG={corporate_svg} Text={"Corporate Space"} /> */}
                        {/* <FeatureCard SVG={office_svg} Text={"Office Space"} /> */}
                        <FeatureCard SVG={office_svg} Text={"Corporate Space"} />
                        <FeatureCard SVG={showroom_svg} Text={"Showrooms"} />
                        <FeatureCard SVG={residency_svg} Text={"Residency"} />

                    </div>
                </div>
            </div>

            <Contact Email={'info@zadegroup.in'} Subject={'New message from zadegroup.in'} />
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />

        </motion.div>
    );
}

export default Home;
