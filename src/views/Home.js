import { motion } from "framer-motion"

import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import InitialTransition from "../components/InitialTransition";
import Contact from '../components/Contact';
import Footer from '../components/Footer';




import bg from '../image/zade_group_hero_image.jpg';
import home_bg_1 from '../image/landing_bg1.png'
import home_bg_2 from '../image/Home_bg_2.jpg'
import home_bg_4 from '../image/bg-1.png'

import project_corporate_space from '../image/z2/3.jpeg'

// svg imports
import corporate_svg from '../image/svg/skyscraper.svg';
import office_svg from '../image/svg/offices.svg';
import showroom_svg from '../image/svg/showrooms.svg';
import residency_svg from '../image/svg/Recidency.svg';




function Home() {
    return (

        <motion.div exit={{ opacity: 0 }}>

            <InitialTransition />

            <Navbar />

            <div className="relative h-screen">
                <div
                    className="bg-cover bg-center h-screen w-full absolute inset-0 bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}>
                    {/* <Navbar /> */}
                    <div className="h-full flex flex-col justify-center items-center">

                        <div className='flex flex-col justify-center items-center -mt-20'>

                            <h1 className='mt-10 pt-10 pb-2 text-5xl text-center font-bold text-white font-style uppercase'>Beautiful spaces</h1>
                            <h1 className='text-6xl text-center font-bold text-white font-style uppercase'>in the best places</h1>
                            <p className="w-[70%] mx-auto pt-8 text-xl text-white font-primary text-center py-4">We're excited to present a new level of luxury in Ahmedabad with state-of-the-art facilities, world-class amenities, and stunning architectural design.</p>
                        </div>

                        {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                    </div>


                </div>
            </div>



            <div className="bg-cover bg-center flex flex-col justify-center items-center h-[400px] w-full"
                style={{
                    backgroundImage: `url(${home_bg_1})`,
                }}>

                <h1 className="text-4xl font-style uppercase py-1 text-black">ZADE GROUP</h1>
                <h1 className="text-5xl font-style py-1 text-black">Presenting Soon</h1>

                <div className="w-[65%] mx-auto">
                    <p className="text-lg mt-5 py-4 text-black font-primary text-center">We're excited to Present a new level of luxury in Ahmedabad with state-of-the-art facilities, world-class amenities, and stunning architectural design</p>
                </div>

                {/* <h1 className="text-4xl font-style uppercase py-1">ZADE GROUP Presenting Soon</h1> */}
                {/* <h1 className="text-5xl font-style py-1">Corporate Space and Luxurious Living</h1> */}
                {/* <p className="text-lg mt-5 py-4 text-black font-primary text-center">Zade group introducing the Corporate Space and Luxurious Living<br />Living in the Sky !</p> */}

            </div>


            {/* projects  */}

            <div className="bg-gray py-44 pb-60">

                <div className="flex justify-center items-center">

                    <div className="relative flex flex-col items-center -bottom-8 left-20 w-[80%] mx-auto z-20">
                        <h1 className="text-6xl font-style font-extrabold text-primaryHover uppercase">zade group</h1>
                        <h1 className="text-7xl pt-2 font-style font-semibold text-[#181D24] uppercase">projects</h1>
                    </div>

                </div>

                <div className="flex">
                    <div className="w-[55%] relative">
                        <div
                            className="absolute rounded-sm inset-0 bg-no-repeat bg-cover bg-fixed bg-center"
                            style={{ backgroundImage: `url(${project_corporate_space})` }}
                        />
                        <div
                            className="relative z-10 flex flex-col justify-end items-end h-screen"
                        >
                            <div className="px-12 py-10 flex justify-center items-center">
                                <div>
                                    <h1 className="text-4xl text-pink font-style">~ 01 ~</h1>
                                    <h1 className="text-2xl text-pink font-style">Corporate Space</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[45%] flex flex-col justify-center px-20 ">
                        <h1 className="text-5xl font-style text-primaryHover py-2">Corporate Space</h1>
                        <p className="py-2 font-primary">Our commitment to our clients is evident in every detail of this project, from the impressive entrance to the luxurious interiors. We're passionate about providing the best possible living experience for our clients, and we're confident that our latest project will exceed their expectations.</p>
                        <p className="text-secondary pb-1 pt-3 font-primary">Thaltej, Ahmedabad</p>
                        <p className="py-1 text-primaryHover font-primary">Newly Launched</p>
                        <span className="py-2 px-6 w-fit my-8 border border-primaryHover rounded-full font-primary">Read More</span>

                        <div className="flex mt-4">

                            <div className="p-7 rounded-full border border-primaryHover">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                            </div>
                            <div className="p-7 ml-2 rounded-full border border-primaryHover">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            {/* CTA */}

            <div className="bg-cover bg-center bg-secondary bg-opacity-60 flex flex-col justify-center items-center h-[400px]"
                style={{
                    backgroundImage: `url(${home_bg_4})`,
                }}
            >
                <h1 className="text-5xl font-style uppercase py-2 text-black">WE ARE WAITING FOR YOU HERE</h1>
                <h1 className="text-6xl font-style py-2 text-black">SCHEDULE A TOUR</h1>
                <button className="py-2 px-4 my-2 bg-black text-white">BOOK A VISIT</button>
            </div>

            {/* features */}


            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${home_bg_2})` }}
                />
                <div className="relative z-10 flex flex-col justify-center items-center h-screen">

                    <div className="w-[1200px] max-w-[85%] flex justify-between">

                        <FeatureCard SVG={corporate_svg} Text={"Corporate Space"} />
                        <FeatureCard SVG={office_svg} Text={"Office Space"} />
                        <FeatureCard SVG={showroom_svg} Text={"Showrooms"} />
                        <FeatureCard SVG={residency_svg} Text={"Residency"} />

                    </div>
                </div>
            </div>

            <Contact />
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />

        </motion.div>
    );
}

export default Home;
