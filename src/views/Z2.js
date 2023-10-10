// import { useState, useEffect, useCallback } from 'react'
import { useState } from 'react'


import { motion } from "framer-motion"
import { Projects, Amenities } from '../data/ProjectDetails'
// import { ProjectUpdates } from "../data/ProjectUpdate"

import ImageSlider from "../components/ImageSlider"

// import CTA_bg from '../image/bg-1.png'
import amenities_section_bg from '../image/landing_bg2.png'


import bg from '../image/z2/3.jpeg';
// import pattern_image from '../image/z2/pattern.svg';

import img1 from '../image/z2/1.jpeg'
// import img2 from '../image/z2/2.jpeg'
import img3 from '../image/z2/3.jpeg'
// import img4 from '../image/z2/4.jpeg'
import img5 from '../image/z2/5.jpeg'
import img6 from '../image/z2/new/6.jpeg'
import img7 from '../image/z2/7.jpeg'
import img8 from '../image/z2/8.jpeg'
// import img9 from '../image/z2/corponare_place_background_image.jpeg'

// import bg_2 from '../image/zluxuria/bg-2.png'
import z2_hall_image from '../image/z2/z2_hall.jpeg'
import brochure_cover from '../image/z2/Brochure_cover_3d.png'
// import bg2 from '../image/bg/bg8.webp'
import bg7 from '../image/bg/bg7.webp'
import bg9 from '../image/bg/bg9.webp'
import z2 from '../image/z2/z2-no-bg.png'

// import corporate_bg_image from '../image/z2/corponare_place_background_image.jpeg'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Brochure from "../components/Brochure"
import CTA from '../components/CTA'
// import ImageSlider from '../components/ImageSlider'



function Z2() {

    const Z2 = Projects[0];


    // const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    const images = [img3, z2_hall_image, img7, img3, z2_hall_image, img7];
    // const images = [img1, img2, img4, img5, img8];
    // const [current, setCurrent] = useState(0);

    const [DBVisible, setDBVisible] = useState(false)



    // const prevSlide = () => {
    //     setCurrent(current === 0 ? images.length - 1 : current - 1);
    // };

    // const nextSlide = useCallback(() => {
    //     setCurrent(current === images.length - 1 ? 0 : current + 1);
    // }, [current, images.length]);

    // const handleTouchStart = (e) => {
    //     setTouchStartX(e.touches[0].clientX);
    // };

    // const handleTouchEnd = (e) => {
    //     const touchEndX = e.changedTouches[0].clientX;
    //     const touchDistance = touchEndX - touchStartX;

    //     if (touchDistance > 50) {
    //         prevSlide();
    //     } else if (touchDistance < -50) {
    //         nextSlide();
    //     }
    // };

    // const [touchStartX, setTouchStartX] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [nextSlide]);

    const animate = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 5,
                ease: "easeInOut"
            },
        },
    }


    const AmenitiesElements = [];

    Z2.moreDetails.map((data, index) => {
        return (
            AmenitiesElements.push(<div className='py-5 px-3' key={index}>
                <h2 className='text-6xl font-semibold text-gray-600'>{data[0]}</h2>
                <h2 className='text-2xl text-textBlackDark font-bold font-primary pt-4'>{data[1]}</h2>
            </div>)
        );
    })



    return (
        <motion.div exit={{ opacity: 0 }} className='relative'>


            <CTA setDBVisible={setDBVisible} Page={'z2'} />

            <Navbar />

            <div className="hidden md:block relative h-full md:h-screen">
                <div
                    className="bg-cover bg-center h-screen w-full absolute inset-0 bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}>
                    {/* <Navbar /> */}
                    <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
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

                                <h1 className='text-3xl  mt-10 pt-10 pb-2 md:text-9xl text-center font-bold text-tomato font-primary uppercase'>Z2</h1>
                                <h1 className='text-3xl  mt-8 pb-2 md:text-6xl text-center font-bold text-white font-primary'>Elevate</h1>
                                <h1 className='text-3xl md:text-6xl pb-2 text-center font-bold text-white font-primary'> business Growth with</h1>
                                <h1 className='text-3xl md:text-6xl pb-2 text-center font-bold text-white font-primary'>Corporate Space</h1>
                                <p className="hidden w-[90%] md:w-[70%] mx-auto pt-8 md:text-xl text-white font-primary text-center py-4 font-medium">Discover a new level of elegance and refinement with our latest Corporate Space, designed to exceed your expectations.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>


            {/* Mobile */}


            <div
                className="md:hidden bg-cover bg-center h-full w-full bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>

                <div className='absolute w-full h-full bg-black bg-opacity-25'></div>


                <div className="w-full h-full flex  justify-center items-center py-36">
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

                        <div className='flex flex-col justify-center items-center -mt-20 z-20'>

                            <h1 className='text-6xl  mt-10 pt-10 text-center text-tomato font-primary font-bold'>Z2</h1>
                            <h1 className='text-2xl pt-5 pb-2 text-center font-semibold text-white uppercase'>Elevate</h1>
                            <h1 className='text-2xl md:text-6xl pb-2 text-center font-semibold text-white uppercase'> business Growth with</h1>
                            <h1 className='text-2xl md:text-6xl pb-2 text-center font-semibold text-white uppercase'>Corporate Space</h1>
                            <p className="hidden w-[90%] md:w-[70%] mx-auto pt-8 md:text-xl text-white font-primary text-center py-4 font-medium">Discover a new level of elegance and refinement with our latest Corporate Space, designed to exceed your expectations.</p>
                        </div>

                        {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                    </motion.div>

                </div>

            </div>



            {/* Intro */}

            <div className='flex relative justify-start flex-col items-center bg-offWhite py-28 pb-24'>

                <img src={z2} alt="Z2" className='w-[150px] h-auto pt-16 pb-9' />
                <div className='flex flex-col items-center w-[60%] mx-auto'>
                    <p className='text-textBlackDark font-primary text-sm font-semibold uppercase pb-5 text-center'>Discover Perfect Corporate Delight</p>
                    <h2 className='text-textBlackDark font-primary font-bold 14:text-5xl 15:text-6xl text-center'>Elevate your business to new heights with Z2</h2>
                    {/* <p className='text-gray-500 pt-6 pb-6'>The Corporate Space where modernity meets excellence to create the perfect environment for businesses, offering a state-of-the-art space for businesses and corporations to thrive success.</p> */}
                </div>

                <div className='14:w-[90%] 15:w-[85%] mx-auto flex py-24'>

                    <div className='w-[60%] 15:px-16 14:pl-10 flex flex-col items-start justify-center'>
                        <img src={img5} alt="Z2" className='w-full h-auto pb-9' />
                    </div>

                    <div className='w-[40%] ml-10 grid grid-cols-1 '>

                        {AmenitiesElements}
                        {/* <a className='button-tomato' href='#contact'>Contact Us</a> */}

                    </div>
                </div>

            </div>



            <div className='bg-black py-16 pb-cover bg-center'
                style={{
                    backgroundImage: `url(${bg7})`,
                }}
            >

                <div className='w-full top-0 bottom-0 flex py-24 px-12'>

                    <div className='w-1/2 flex items-center'>
                        <img src={img8} alt="Spacious Living Room cover" className='w-[45%] h-full object-cover' />
                        <img src={img1} alt="Spacious Living Room cover" className='w-[45%] h-full object-cover ml-3' />
                    </div>

                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.3,
                            // ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0 }}

                        className='md:w-1/2 py-10 md:py-0 px-5  flex flex-col justify-center items-start '
                    >

                        <p className='text-textWhiteDark font-primary text-sm font-semibold uppercase pb-5'>Presenting</p>
                        <h1 className='text-textWhiteDark font-primary font-bold text-5xl 15:text-6xl'>Award winning corporate space</h1>
                        <p className='text-textWhiteLight font-light pt-7 pb-4 15:pt-8 15:pb-6'>The Z2 <b>Corporate Space</b> where modernity meets excellence to create the perfect environment for businesses, offering a state-of-the-art space for businesses and corporations to thrive success.</p>

                        <div className='flex items-center justify-center py-3'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8 stroke-gold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                            <h1 className='text-xl font-style ml-3 text-white'>{Z2.status}</h1>

                        </div>

                        <div className='flex items-center justify-center py-1'>

                            <a href={Z2.locationLink} target="_blank" rel="noreferrer">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-7 h-7 stroke-gold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                            </a>


                            <a href={Z2.locationLink} target="_blank" rel="noreferrer">
                                <span className='text-xl font-style ml-3 text-white'>{Z2.location}</span>
                            </a>


                        </div>

                        <a href="#contact" className="button-gold mt-8">CONTACT</a>

                    </motion.div>

                </div>

            </div>


            {/* CTA */}

            <div className='relative'>


                <div className='absolute w-full h-full bg-black bg-opacity-20 flex flex-col justify-center items-center'>
                    <motion.h1

                        whileInView={{ y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 0,
                        }}
                        initial={{ y: 40 }}

                        className='text-2xl md:text-5xl font-primary font-semibold text-white py-3'>AVAILABLE FOR</motion.h1>

                    <motion.h1
                        whileInView={{ y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 0,
                        }}
                        initial={{ y: 40 }}
                        className='text-xl md:text-7xl font-primary font-semibold text-white'>IMMEDIATE OCCUPANCY !</motion.h1>

                    <motion.a
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                        }}
                        initial={{ opacity: 0 }}
                        href="#contact" className='bg-white text-lg mt-8 py-3 px-7 uppercase hover:cursor-pointer hover:bg-black hover:shadow-md hover:text-white '>Inquire Now</motion.a>
                </div>

                <img src={img6} alt='z2 sky view' className='w-full h-full object-cover' />


            </div>



            {/* amenities */}

            <div className='md:bg-center bg-offWhite py-20 pb-32'
                style={{
                    backgroundImage: `url(${amenities_section_bg})`,
                }}
            >

                <div className='flex flex-col items-center w-[60%] mx-auto pb-12 pt-20'>
                    <p className='text-textBlackDark font-primary text-sm font-semibold uppercase pb-5 text-center'>Amenities Details</p>
                    <h2 className='text-textBlackDark font-primary font-bold 14:text-5xl 15:text-6xl text-center'>world-class amenities, and stunning architectural design</h2>
                    {/* <p className='text-gray-500 pt-6 pb-6'>The Corporate Space where modernity meets excellence to create the perfect environment for businesses, offering a state-of-the-art space for businesses and corporations to thrive success.</p> */}
                </div>

                <div className="mx-10 md:px-16">

                    <div className='flex w-[98%] md:w-[1200px] md:max-w-[1000px] flex-wrap mx-auto py-10'>

                        {
                            Amenities.Z2 ? Amenities.Z2.map((item, index) => {
                                return (
                                    <motion.div

                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.3,
                                            // ease: [0.5, 0.71, 1, 1.5],
                                        }}
                                        initial={{ opacity: 0, y: 30 }}

                                        key={index} className="flex bg-white justify-center items-center flex-col py-4 px-4 md:mx-3 my-3 w-full md:w-[30%] h-[220px] hover:shadow-lg">
                                        {/* <FontAwesomeIcon icon={item.SVG} size="3x" style={{ color: '#cda24b' }} /> */}
                                        <img src={item.SVG} alt={item.name} className='w-[80px] 15:w-[100px] h-auto' />
                                        <h3 className='text-black text-center text-xl pt-5 font-primary font-bold'>{item.name}</h3>
                                    </motion.div>
                                )
                            }) : null
                        }

                    </div>

                </div>


            </div>


            {/* Gellary */}
            <div className='py-20 bg-pink bg-cover bg-center'
                style={{
                    backgroundImage: `url(${bg9})`,
                }}
            >
                <div className="md:px-10">
                    <ImageSlider images={images} width={600} height={400} />
                </div>
                {/* <h2 className='absolute top-0'>Image Gallery</h2> */}
            </div>


            <div className="relative h-[85vh]">
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${img3})` }}
                />
                <div className="relative z-10 flex flex-col justify-center items-center h-[85vh]">

                    <div className="max-w-[85%]">

                        <div className="w-fit py-10 px-3 rounded-sm shadow-md bg-secondary flex flex-col justify-center items-center transition duration-500 ease-in-out transform hover:cursor-pointer" onClick={() => { setDBVisible(true) }}>

                            <div className="h-[full] flex justify-center items-center py-4 px-10">
                                <motion.img
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.2,
                                    }}
                                    initial={{ opacity: 0, y: 10 }} src={brochure_cover} className='fill-primary w-44' alt='icon' />
                                {/* {SVG} */}
                            </div>

                            <div className="px-4 my-5 hover:cursor-pointer">
                                <motion.h1
                                    variants={animate}
                                    className="text-xl text-center text-white font-primary font-bold"
                                    onClick={() => { setDBVisible(true) }}
                                >Download Brochure</motion.h1>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Brochure DBVisible={DBVisible} setDBVisible={setDBVisible} Page={"z2"} />


            <Contact id="contact" page="z2" Email={'sales@zadegroup.in'} Subject={'New inquiry for Z2 Corporate Space'} />

            {/* <Footer phoneNumber={"7573030027"} Email={"sales@zadegroup.in"} /> */}
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />

        </motion.div>
    )
}

export default Z2