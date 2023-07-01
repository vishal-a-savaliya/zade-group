// import { useState, useEffect, useCallback } from 'react'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import img1 from '../image/zluxuria/Zluxuria1.jpeg'
import img2 from '../image/zluxuria/2_lite.jpeg'
import bg from '../image/Z_Luxuriya_bg_1.jpg'
import bg_2 from '../image/zluxuria/bg-2.png'
import amenities_section_bg from '../image/landing_bg2.png'
import CTA_bg from "../image/landing_bg3.jpg"
import img3 from '../image/zluxuria/Zluxuria2.jpeg';
import img4 from '../image/zluxuria/Zluxuria6.jpeg';
import img5 from '../image/zluxuria/Zluxuria5.jpeg';
import img6 from '../image/zluxuria/Zluxuria4.jpeg';

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ImageSlider from "../components/ImageSlider"


import { Projects, Amenities } from '../data/ProjectDetails'

function Zluxuria() {


    const ZL = Projects[1];
    const images = [img6, img3, img4, img5];


    return (
        <motion.div exit={{ opacity: 0 }}>

            <Navbar />

            {/* Hero */}

            <div className="relative h-screen">
                <div
                    className="bg-cover bg-center h-screen w-full md:absolute inset-0 bg-no-repeat md:bg-fixed"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}>
                    {/* <Navbar /> */}
                    <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                        <motion.div

                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: 1,
                                // ease: [0.5, 0.71, 1, 1.5],
                            }}
                            initial={{ opacity: 0 }}
                            // whileHover={{ scale: 1.2 }}

                            className="h-full flex flex-col justify-center items-center">

                            <div className='flex flex-col justify-center items-center -mt-20'>

                                <h1 className='mt-10 pt-10 pb-2 text-3xl md:text-6xl text-center font-bold text-white font-style uppercase'>ULTIMATE</h1>
                                <h1 className='text-3xl md:text-6xl text-center font-bold text-white font-style uppercase'> LUXURY LIVING</h1>
                                <h1 className='text-3xl md:text-6xl text-center font-bold text-white font-style uppercase'>AT SKY</h1>
                                <p className="w-[90%] md:w-[70%] mx-auto pt-8 md:text-xl text-white font-primary text-center py-4 font-medium">Experience the height of luxury with our latest project, designed to inspire and elevate your senses.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>


            {/* Intro */}

            <div className='flex relative justify-center flex-col items-center bg-gray py-20 bg-right md:bg-center'
                style={{
                    backgroundImage: `url(${bg_2})`,
                }}
            >
                <div className="absolute w-full h-[100%] z-10 bg-gray bg-opacity-60 md:hidden"></div>

                <div className='py-20 z-30'>
                    <h1 className='text-5xl md:text-6xl font-style text-center py-2 text-black'>z luxuria</h1>
                    <h1 className='text-3xl px-4 md:px-0 md:text-4xl font-style text-center text-black'>introducing new level of luxury living</h1>
                </div>

                <div className='flex flex-col md:flex-row justify-between z-30 md:pt-5'>
                    {
                        ZL.details ? ZL.details.map((data, index) => {

                            if (index === ZL.details.length - 1) {
                                return (
                                    <motion.div
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.3,
                                            // ease: [0.5, 0.71, 1, 1.5],
                                        }}
                                        initial={{ opacity: 0 }}
                                        className='flex justify-start items-baseline my-4 md:my-0 md:mx-8'>
                                        <div className='py-5'>
                                            <h1 className='text-5xl text-black font-primary font-bold'>{data[0]}</h1>
                                            <p className=' text-black py-3 text-2xl font-style'>{data[1]}</p>
                                        </div>
                                    </motion.div>
                                )
                            } else {
                                return (
                                    <motion.div
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.3,
                                            // ease: [0.5, 0.71, 1, 1.5],
                                        }}
                                        initial={{ opacity: 0 }}
                                        className='flex flex-col md:flex-row md:justify-start md:items-baseline md:mx-8 my-4 md:my-0'>
                                        <div className='py-5'>
                                            <h1 className='text-5xl text-black font-primary font-bold'>{data[0]}</h1>
                                            <p className=' text-black py-3 text-2xl font-style max-w-[180px]'>{data[1]}</p>
                                        </div>
                                        <div className='ml-8 py-1'>
                                            <hr className='border-primary border w-24'></hr>
                                        </div>
                                    </motion.div>
                                )
                            }

                        }) : null
                    }
                </div>

            </div>


            {/* details  */}

            <div className=''>

                <div className='flex flex-col md:flex-row '>


                    <div className='w-full h-[700px] md:h-auto md:w-[400px] bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${img1})`,
                        }}
                    >
                    </div>


                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.3,
                            // ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0 }}
                        className='h-[700px] md:grow flex flex-col justify-center items-center'>

                        <h3 className='text-2xl text-primary font-primary font-semibold'>About z luxuria</h3>
                        <h1 className='text-3xl py-4 font-style text-center text-black'>Introducing our latest project<br /> Luxurious Living</h1>
                        <p className='w-[85%] md:w-[450px] text-center mx-auto font-primary py-2 text-black'>z luxuria, a luxurious residential tower that will set new standards for opulent living in Ahmedabad. This magnificent 33-story tower offers 56 units with world-class amenities and stunning architectural design.</p>

                        <div className='flex items-center justify-center py-3 mt-2'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#cda24b" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                            <h1 className='text-xl font-style ml-3'>{ZL.status}</h1>

                        </div>

                        <div className='flex items-center justify-center py-1'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#cda24b" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            <span className='text-xl font-style ml-3'>{ZL.location}</span>

                        </div>

                        <a href="#contact" className="py-2 px-6 w-fit my-5 border border-primaryHover rounded-full font-primary hover:bg-primaryHover hover:text-white hover:cursor-pointer">CONTACT</a>

                    </motion.div>


                    <div className='hidden md:block w-[400px] bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${img2})`,
                        }}
                    >
                    </div>
                </div>
            </div>


            {/* Amenities */}

            <div className='bg-center bg-black md:px-16 py-20'
                style={{
                    backgroundImage: `url(${amenities_section_bg})`,
                }}
            >
                <h1 className='text-3xl md:text-5xl font-style text-white text-center'>AMENITIES</h1>
                <p className='text-xl md:text-2xl font-style text-white text-center py-2'>Our never ending list of stunning amenities</p>
                {/* <FontAwesomeIcon icon={faHeart} /> */}

                {/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-shield-halved" /> */}
                {/* <FontAwesomeIcon icon="fa-regular fa-eye" /> */}
                {/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-bus-simple" /> */}
                <div className='flex w-[95%] md:w-[1200px] flex-wrap mx-auto py-10'>

                    {
                        Amenities.zluxuria ? Amenities.zluxuria.map((item, index) => {
                            return (
                                <motion.div

                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.3,
                                        // ease: [0.5, 0.71, 1, 1.5],
                                    }}
                                    initial={{ opacity: 0, y: 30 }}

                                    key={index} className="flex justify-center items-center flex-col py-2 px-2 mx-1 my-1 w-[45%] md:w-[24%] h-[200px] border border-primaryHover">
                                    <FontAwesomeIcon className="md:hidden" icon={item.SVG} size="2x" style={{ color: '#cda24b' }} />
                                    {item.SVG}
                                    <h3 className='text-white text-center pt-2'>{item.name}</h3>
                                </motion.div>
                            )
                        }) : null
                    }

                </div>



            </div>

            <div className="py-12 h-[300px] md:h-full md:py-0 md:px-10">

                <ImageSlider images={images} width={600} height={400} />

            </div>

            <div className='md:bg-cover bg-center py-20 flex flex-col justify-center items-center bg-primary'
                style={{
                    backgroundImage: `url(${CTA_bg})`,
                }}
            >
                <motion.h1

                    whileInView={{ y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0,
                    }}
                    initial={{ y: 30 }}

                    className='text-2xl md:text-4xl font-style text-white py-2'>AVAILABLE FOR</motion.h1>
                <motion.h1
                    whileInView={{ y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0,
                    }}
                    initial={{ y: 30 }}
                    className='text-2xl md:text-6xl font-style text-white'>IMMEDIATE OCCUPANCY !</motion.h1>

                <motion.a
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    initial={{ opacity: 0 }}
                    href="#contact" className='bg-white text-lg mt-8 py-2 px-6 uppercase hover:cursor-pointer hover:bg-black hover:shadow-md hover:text-white '>Inquire Now</motion.a>

            </div>

            <Contact id="contact" Email={'sales@zadegroup.in'} Subject={'New inquiry for z luxuria'} />

            <Footer phoneNumber={"7573030028"} Email={"sales@zadegroup.in"} />

        </motion.div >
    )
}

export default Zluxuria