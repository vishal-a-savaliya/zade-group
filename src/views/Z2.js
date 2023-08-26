// import { useState, useEffect, useCallback } from 'react'
import { useState } from 'react'


import { motion } from "framer-motion"
import { Projects, Amenities } from '../data/ProjectDetails'
// import { ProjectUpdates } from "../data/ProjectUpdate"

import ImageSlider from "../components/ImageSlider"

import CTA_bg from '../image/bg-1.png'
import amenities_section_bg from '../image/landing_bg2.png'


import bg from '../image/z2/3.jpeg';
// import pattern_image from '../image/z2/pattern.svg';

import img1 from '../image/z2/1.jpeg'
// import img2 from '../image/z2/2.jpeg'
import img3 from '../image/z2/3.jpeg'
// import img4 from '../image/z2/4.jpeg'
import img5 from '../image/z2/5.jpeg'
// import img6 from '../image/z2/6.jpeg'
import img7 from '../image/z2/7.jpeg'
// import img8 from '../image/z2/8.jpeg'

import bg_2 from '../image/zluxuria/bg-2.png'
import z2_hall_image from '../image/z2/z2_hall.jpeg'
import brochure_cover from '../image/z2/Brochure_cover_3d.png'

// import corporate_bg_image from '../image/z2/corponare_place_background_image.jpeg'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Brochure from "../components/Brochure"
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



    return (
        <motion.div exit={{ opacity: 0 }}>

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

                                <h1 className='text-3xl  mt-10 pt-10 pb-2 md:text-7xl text-center font-bold text-white font-style uppercase'>Z2</h1>
                                <h1 className='text-3xl  mt-10 pb-2 md:text-5xl text-center font-bold text-white font-style uppercase'>Elevate</h1>
                                <h1 className='text-3xl md:text-5xl pb-2 text-center font-bold text-white font-style uppercase'> business Growth with</h1>
                                <h1 className='text-3xl md:text-5xl pb-2 text-center font-bold text-white font-style uppercase'>Corporate Space</h1>
                                <p className="hidden w-[90%] md:w-[70%] mx-auto pt-8 md:text-xl text-white font-primary text-center py-4 font-medium">Discover a new level of elegance and refinement with our latest Corporate Space, designed to exceed your expectations.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>


            <div
                className="md:hidden bg-cover bg-center h-full w-full bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>
                {/* <Navbar /> */}
                <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50 py-36">
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

                            <h1 className='text-6xl  mt-10 pt-10 pb-2 md:text-6xl text-center text-white font-style uppercase'>Z2</h1>
                            <h1 className='text-2xl pt-8 pb-2 md:text-6xl text-center font-bold text-white font-style uppercase'>Elevate</h1>
                            <h1 className='text-2xl md:text-6xl pb-2 text-center font-bold text-white font-style uppercase'> business Growth with</h1>
                            <h1 className='text-2xl md:text-6xl pb-2 text-center font-bold text-white font-style uppercase'>Corporate Space</h1>
                            <p className="hidden w-[90%] md:w-[70%] mx-auto pt-8 md:text-xl text-white font-primary text-center py-4 font-medium">Discover a new level of elegance and refinement with our latest Corporate Space, designed to exceed your expectations.</p>
                        </div>

                        {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                    </motion.div>

                </div>

            </div>



            {/* Intro */}

            <div className='flex relative justify-center flex-col items-center bg-gray py-20 bg-right md:bg-center'
                style={{
                    backgroundImage: `url(${bg_2})`,
                }}
            >
                <div className="absolute w-full h-[100%] bg-gray bg-opacity-60 md:hidden"></div>

                <div className='py-20 z-30'>
                    <h1 className='text-6xl font-style text-center py-4 md:py-10 text-black'>Z2</h1>
                    <h1 className='hidden md:block text-4xl font-style text-center text-black'>Elevate your business to new heights</h1>
                    <h1 className='hidden md:block text-4xl font-style text-center text-black'>with Corporate Space</h1>
                    <h1 className='md:hidden text-3xl font-style text-center text-black'>Elevate your business to new heights with Corporate Space</h1>


                </div>

                <div className='flex flex-col md:flex-row justify-between pt-5 z-30'>
                    {
                        Z2.details ? Z2.details.map((data, index) => {

                            if (index === Z2.details.length - 1) {
                                return (
                                    <motion.div
                                        key={index}
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
                                        key={index}
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




            {/* Progress */}

            {/* <div className="flex flex-col items-center mt-10 mb-20" >

                <div>
                    <h1 className="font-style text-4xl md:text-6xl my-5 pb-10 text-center">updates so far</h1>
                </div>

                <div className="bg-cover bg-center w-full px-5 md:px-20 py-10" style={{
                    backgroundImage: `url(${pattern_image})`,
                }}>

                    {ProjectUpdates.z2.map((item, index) => (
                        <div className="flex items-center flex-col" key={index}>
                            <div className="w-2 flex-grow-0">
                                {index !== 0 && <div className="w-[1px] h-[150px] bg-gray-400 mx-auto border-dashed border-l-2 border-black"></div>}
                            </div> 


                            <div className={index % 2 === 0 ? 'flex flex-col  md:flex-row-reverse w-full' : 'flex flex-col md:flex-row w-full'}>


                                <div className="rounded-sm shadow-md md:w-[55%] backdrop-brightness-50">
                                    <video src={item.video} autoPlay loop muted controls className="w-full rounded-sm shadow-sm" />
                                </div>

                                <div className="md:w-[45%] flex flex-col justify-center items-center">
                                    <h3 className="text-4xl mt-5 md:mt-0 text-center font-style mb-2 text-primary">{item.title}</h3>
                                    <p className="mb-4">{item.description}</p>
                                    <p className="text-xl font-style ">{item.date}</p>
                                </div>


                            </div>


                        </div>
                    ))}

                </div>
            </div> */}



            {/* images */}

            {/* <div className="relative md:hidden px-3 my-8">
                <div className='w-full bg-cover bg-center h-[600px] bg-gray mr-10 '
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        backgroundImage: `url(${images[current]})`,
                    }}></div>

                <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                    <button className="absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none" onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                </div>

                <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none" onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button key={index} className={`h-3 w-3 rounded-full ${index === current ? 'bg-white' : 'bg-[#FFFFFF33]'}`} onClick={() => setCurrent(index)}></button>
                    ))}
                </div>
            </div> */}

            {/* <div className='hidden md:flex flex-row w-[1200px] mx-auto my-10 pb-5'>

                <div className='w-[25%] bg-cover bg-center h-[604px] bg-gray mr-1' style={{
                    backgroundImage: `url(${img1})`,
                }}></div>
                <div className='w-[25%] bg-gray mr-1'>
                    <div className='w-full bg-cover bg-center h-[200px] bg-gray mr-1 mb-1 ' style={{
                        backgroundImage: `url(${img7})`,
                    }}></div>
                    <div className='w-full bg-cover bg-center h-[400px] bg-gray mr-1' style={{
                        backgroundImage: `url(${img5})`,
                    }}></div>
                </div>
                <div className='w-[25%] bg-gray mr-1'>
                    <div className='w-full bg-cover bg-center h-[400px] bg-gray mr-1 mb-1 ' style={{
                        backgroundImage: `url(${img4})`,
                    }}></div>
                    <div className='w-full bg-cover bg-center h-[200px] bg-gray mr-1 ' style={{
                        backgroundImage: `url(${img3})`,
                    }}></div>
                </div>
                <div className='w-[25%] bg-cover bg-center h-[604px] bg-gray mr-1' style={{
                    backgroundImage: `url(${img8})`,
                }}></div>

            </div> */}

            <div className='bg-black'>
                <div className='flex flex-col-reverse md:flex-row w-[90%] md:w-[85%] mx-auto justify-center items-center'>

                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.3,
                            // ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0 }}
                        className='md:h-[900px] md:w-[40%] py-10 md:py-0 px-5 md:px-0 flex flex-col justify-center items-start '>

                        <p className='text-2xl md:text-lg py-2 font-style text-left text-white'>Introducing</p>
                        <h1 className='text-3xl md:text-3xl text-white font-style'>Z2</h1>
                        <p className='text-left w-[75%] font-primary py-2 text-graytext'>The <b>Corporate Space</b> where modernity meets excellence to create the perfect environment for businesses, offering a state-of-the-art space for businesses and corporations to thrive success.</p>

                        <div className='flex items-center justify-center py-3'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cda24b" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                            <h1 className='text-xl font-style ml-3 text-white'>{Z2.status}</h1>

                        </div>

                        <div className='flex items-center justify-center py-1'>

                            <a href={Z2.locationLink} target="_blank" rel="noreferrer">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cda24b" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                            </a>


                            <a href={Z2.locationLink} target="_blank" rel="noreferrer">
                                <span className='text-xl font-style ml-3 text-white'>{Z2.location}</span>
                            </a>


                        </div>

                        <a href="#contact" className="py-2 px-6 w-fit my-8 border-2 text-white border-primaryHover font-primary hover:bg-primaryHover hover:text-white hover:cursor-pointer">CONTACT</a>

                    </motion.div>

                    <div className='w-[95%] md:w-[60%] flex flex-row mt-10 md:mt-0'>
                        <div className='w-full md:w-[50%] bg-cover bg-center h-[804px] bg-black mr-1' style={{
                            backgroundImage: `url(${img1})`,
                        }}></div>
                        <div className='hidden md:block w-[50%] bg-black mr-1'>
                            <div className='w-full bg-cover bg-center h-[250px] bg-black mr-1 mb-1 ' style={{
                                backgroundImage: `url(${img7})`,
                            }}></div>
                            <div className='w-full bg-cover bg-center h-[550px] bg-black mr-1' style={{
                                backgroundImage: `url(${img5})`,
                            }}></div>
                        </div>
                    </div>


                </div>
            </div>



            {/* amenities */}

            <div className='md:bg-center bg-gray py-20'
                style={{
                    backgroundImage: `url(${amenities_section_bg})`,
                }}
            >

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

                                        key={index} className="flex bg-white justify-center items-center flex-col py-2 px-2 md:mx-3 my-3 w-full md:w-[30%] h-[220px] hover:shadow-lg">
                                        {/* <FontAwesomeIcon icon={item.SVG} size="3x" style={{ color: '#cda24b' }} /> */}
                                        {item.SVG}
                                        <h3 className='text-black text-center text-xl pt-5 font-style'>{item.name}</h3>
                                    </motion.div>
                                )
                            }) : null
                        }

                    </div>

                </div>
                {/* <div className="flex justify-end">
                    <div className="w-[1000px] h-[500px] bg-cover bg-center"

                        style={{
                            backgroundImage: `url(${z2_hall_image})`,
                        }}
                    >

                    </div>
                </div> */}

                <div className="md:px-10">

                    <ImageSlider images={images} width={600} height={400} />
                </div>


            </div>


            <div className="relative h-[85vh]">
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${img3})` }}
                />
                <div className="relative z-10 flex flex-col justify-center items-center h-[85vh]">

                    <div className="max-w-[85%]">

                        <div className="w-[250px] py-10 md:w-full rounded-sm shadow-md bg-secondary flex flex-col justify-center items-center transition duration-500 ease-in-out transform hover:cursor-pointer" onClick={() => { setDBVisible(true) }}>

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
                                    className="text-xl text-center text-white font-style"
                                    onClick={() => { setDBVisible(true) }}
                                >Download Brochure</motion.h1>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Brochure DBVisible={DBVisible} setDBVisible={setDBVisible} Page={"z2"} />



            {/* CTA */}

            <div className='bg-cover md:bg-center py-20 flex flex-col justify-center items-center bg-primaryHover md:bg-opacity-90'
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
                    className='text-xl md:text-6xl font-style text-white'>IMMEDIATE OCCUPANCY !</motion.h1>

                <motion.a
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    initial={{ opacity: 0 }}
                    href="#contact" className='bg-white text-lg mt-8 py-2 px-6 uppercase hover:cursor-pointer hover:bg-black hover:shadow-md hover:text-white '>Inquire Now</motion.a>

            </div>

            <Contact id="contact" page="z2" Email={'sales@zadegroup.in'} Subject={'New inquiry for Z2 Corporate Space'} />

            {/* <Footer phoneNumber={"7573030027"} Email={"sales@zadegroup.in"} /> */}
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />

        </motion.div>
    )
}

export default Z2