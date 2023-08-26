import { useState, useEffect, useCallback } from 'react'
import { motion } from "framer-motion"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import img1 from '../image/zluxuria/Zluxuria1.jpeg'
import img2 from '../image/zluxuria/2_lite.jpeg'
import bg from '../image/zluxuria/hero_bg_image_z_luxuria.jpeg'
import bg_2 from '../image/zluxuria/bg-2.png'
import specification_bg from '../image/zluxuria/specification.jpeg'
import amenities_section_bg from '../image/landing_bg2.png'
import CTA_bg from "../image/landing_bg3.jpg"



import img3 from '../image/zluxuria/Zluxuria2.jpeg';
import img4 from '../image/zluxuria/Zluxuria6.jpeg';
import img5 from '../image/zluxuria/Zluxuria5.jpeg';
import img6 from '../image/zluxuria/Zluxuria4.jpeg';

import amenities_img1 from '../image/zluxuria/zluxuria_specification1.jpeg'
// import amenities_img2 from '../image/zluxuria/zluzuria_specification2.jpeg'
// import amenities_img3 from '../image/zluxuria/zluzuria_specification3.jpeg'
// import amenities_img4 from '../image/zluxuria/zluzuria_specification4.jpeg'
// import amenities_img5 from '../image/zluxuria/zluzuria_specification5.jpeg'
import amenities_img6 from '../image/zluxuria/zluxuria_specification6.jpeg'
import amenities_img7 from '../image/zluxuria/zluxuria_specification7.jpeg'
// import amenities_img8 from '../image/zluxuria/zluxuria_specification8.jpeg'
import brochure_cover from '../image/zluxuria/brochure_3d.png'


import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ImageSlider from "../components/ImageSlider"


// import { Projects, Amenities } from '../data/ProjectDetails'
import { Projects, AmenitiesDetails } from '../data/ProjectDetails'
import Brochure from '../components/Brochure'

function Zluxuria() {


    const ZL = Projects[1];
    const images = [img6, img3, img4, img5];
    const specification_images = [{ image: amenities_img7, title: "DOUBLE HEIGHT ENTRANCE FOYER", description: "Make a striking first impression with our double-height entrance foyer, welcoming you and your guests to a space designed to leave a lasting memory." },
    { image: amenities_img6, title: "DOUBLE HEIGHT WAITING & RECEPTION AREA", description: "Elevate your guests' experience in our double-height waiting and reception area, Get ready to be impressed as you and your guests are treated to the utmost hospitality and warmth." },
    { image: amenities_img1, title: "DOUBLE HEIGHT OWNER'S LOUNGE", description: "Turn every special occasion into a grand memory with a venue that is perfect for all your gatherings and celebrations." }];

    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffect(() => {
    //     // Function to handle the automatic sliding every 5 seconds
    //     const interval = setInterval(() => {
    //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % specification_images.length);
    //     }, 5000);

    //     // Clear the interval when the component unmounts
    //     return () => clearInterval(interval);
    // }, [specification_images.length]);




    const [current, setCurrent] = useState(0);
    const [DBVisible, setDBVisible] = useState(false)


    const prevSlide = () => {
        setCurrent(current === 0 ? specification_images.length - 1 : current - 1);
    };

    const nextSlide = useCallback(() => {
        setCurrent(current === specification_images.length - 1 ? 0 : current + 1);
    }, [current, specification_images.length]);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchDistance = touchEndX - touchStartX;

        if (touchDistance > 50) {
            prevSlide();
        } else if (touchDistance < -50) {
            nextSlide();
        }
    };

    const [touchStartX, setTouchStartX] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

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

            {/* Hero */}

            <div className="relative h-screen pt-5">
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
                                <h1 className='mt-10 pt-10 pb-2 text-6xl md:text-7xl text-center md:font-bold text-white font-style uppercase'>Z Luxuria</h1>
                                <h1 className='mt-5 pb-2 text-3xl md:hidden md:text-5xl text-center text-white font-style uppercase'>ULTIMATE LUXURY LIVING AT SKY</h1>
                                <h1 className='hidden md:flex mt-5 pb-2 text-3xl md:text-5xl text-center font-bold text-white font-style uppercase'>ULTIMATE LUXURY LIVING</h1>
                                <h1 className='hidden text-3xl md:text-5xl md:flex text-center font-bold text-white font-style uppercase'>AT SKY</h1>
                                {/* <h1 className='text-3xl md:text-5xl text-center font-bold text-white font-style uppercase'> </h1> */}
                                <p className="hidden w-[90%] md:w-[70%] mx-auto pt-8 md:text-xl text-white font-primary text-center py-4 font-medium">Experience the height of luxury with our latest project, designed to inspire and elevate your senses.</p>
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

            <div className='px-10 py-16 md:py-32'>

                <div className='flex flex-col md:flex-row '>


                    <div className='w-full h-[700px] md:h-auto md:w-[450px] bg-center bg-cover'
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

                        <h3 className='text-2xl text-primary font-primary font-semibold'>About Z Luxuria</h3>
                        <h1 className='text-3xl py-4 font-style text-center text-black'>Introducing our latest project<br /> Luxurious Living</h1>
                        <p className='w-[85%] md:w-[450px] text-center mx-auto font-primary py-2 text-black'>Z Luxuria, a luxurious residential tower that will set new standards for opulent living in Ahmedabad. This magnificent 33-story tower offers 56 units with world-class amenities and stunning architectural design.</p>

                        <div className='flex items-center justify-center py-3 mt-2'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#cda24b" class="w-8 h-8">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                            <h1 className='text-xl font-style ml-3'>{ZL.status}</h1>

                        </div>

                        <div className='flex items-center justify-center py-1'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#cda24b" class="w-7 h-7">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            <span className='text-xl font-style ml-3'>{ZL.location}</span>

                        </div>

                        <a href="#contact" className="py-2 px-6 w-fit my-5 border border-primaryHover rounded-full font-primary hover:bg-primaryHover hover:text-white hover:cursor-pointer">CONTACT</a>

                    </motion.div>


                    <div className='hidden md:block w-[450px] bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${img2})`,
                        }}
                    >
                    </div>
                </div>
            </div>


            {/* Amenities */}

            <div className='bg-center bg-black'
            >

                <div className="py-32">

                    <h3 className="text-5xl md:hidden text-primary font-style -pb-10 z-30">gallery</h3>
                    <div className="flex justify-center h-[300px] md:h-[500px] md:py-0">
                        <h3 className="hidden md:block text-5xl md:text-7xl text-primary font-style absolute z-30 md:left-24">gallery</h3>

                        <ImageSlider images={images} width={800} height={500} />

                    </div>
                </div>

            </div>

            <div className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center filter brightness-75"
                    style={{
                        backgroundImage: `url(${specification_bg})`,
                    }}
                ></div>
                <div className="relative min-h-[300px] md:min-h-[80vh] flex items-center justify-center">
                    {/* <h1 className="text-white text-4xl font-bold">Welcome to Parallax Effect</h1> */}
                    <h1 className='text-7xl md:text-[10rem] z-40 font-script text-white text-center'>Amenities & Specification</h1>
                </div>
            </div>


            {/* <div className='relative bg-center bg-black'
                style={{
                    backgroundImage: `url(${amenities_section_bg})`,
                }}
            >
                <h1 className='absolute text-3xl md:text-6xl text-white font-bold text-center uppercase z-30 -top-5 md:-top-8 md:right-10 pl-5 md:pl-0'>Amenities</h1>
                <div className="flex md:px-16 py-20">

                    <div className='hidden md:block md:w-[15%] relative mx-auto'>
                        <motion.p

                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                ease: [0.5, 0.71, 1, 1.5],
                            }}
                            initial={{ opacity: 0 }}

                            className='sticky flex justify-center items-center top-10 mt-14 mr-[45%] p-16 text-3xl font-style text-primaryHover border-primaryHover -rotate-90'>Amenities</motion.p>
                    </div>

                    <div className='flex w-[90%] md:w-[85%] flex-wrap mx-auto md:py-10'>

                        {
                            Amenities.zluxuria ? Amenities.zluxuria.map((item, index) => {
                                return (
                                    <motion.div

                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.3,
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

                <div className='flex justify-end md:pl-16 pb-24'>
                    <div className='flex justify-center  w-full md:w-[85%] h-auto md:h-[600px] bg-center' style={{
                        backgroundImage: `url(${amenities_img8})`,
                    }}>
                    </div>



                </div>

            </div> */}


            <div className='relative bg-center bg-black'
                style={{
                    backgroundImage: `url(${amenities_section_bg})`,
                }}
            >
                <h1 className='absolute text-3xl md:text-6xl text-white font-bold text-center uppercase z-30 -top-5 md:-top-8 md:right-10 pl-5 md:pl-0'>Amenities</h1>

                <div className="flex flex-col md:px-16 py-32">

                    {/* <div className="flex">

                        <div className="relative w-full h-[900px] overflow-hidden">
                            {specification_images.map((obj, index) => (
                                <div
                                    key={index}
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity object-cover duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <img src={obj.image} alt={`z luxuria amenities ${index + 1}`} className="w-full h-full object-cover" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-60"></div>
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10">
                                        <p className="text-5xl font-style text-center">{obj.title}</p>
                                        <p className="text-3xl text-center py-7 px-16 text-white font-[300] font-style w-[80%]">{obj.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div> */}

                    <div className="relative my-8">
                        <div className='w-full bg-cover bg-center h-[95vh] bg-gray'
                            style={{
                                backgroundImage: `url(${specification_images[current].image})`,
                            }}></div>

                        <div className="hidden md:block absolute md:top-1/2 transform -translate-y-1/2 left-0 md:z-30">
                            <button className="ml-3 p-5 rounded-full border border-primary hover:border-white transition duration-500 ease-in-out absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none" onClick={prevSlide}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path stroke-linecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                            </button>
                        </div>

                        <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-40"></div>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-50 md:z-10" onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}>
                            <p className="text-3xl px-1 md:px-0 md:text-5xl font-style text-center">{specification_images[current].title}</p>
                            <p className="text-xl md:text-3xl text-center py-7 px-2 md:px-16 text-white font-[300] font-style md:w-[80%]">{specification_images[current].description}</p>
                        </div>

                        <div className="hidden md:block absolute md:top-1/2 transform -translate-y-1/2 right-0 z-30">
                            <button className="mr-3 p-5 rounded-full border border-primary hover:border-white transition duration-500 ease-in-out absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none" onClick={nextSlide}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path stroke-linecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:z-30">
                            {specification_images.map((_, index) => (
                                <button key={index} className={`h-3 w-3 rounded-full ${index === current ? 'bg-white' : 'bg-[#FFFFFF33]'}`} onClick={() => setCurrent(index)}></button>
                            ))}
                        </div>
                    </div>



                    {
                        AmenitiesDetails && AmenitiesDetails["zluxuria"].map((item, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <div key={index} className="mx-4 md:mx-0 flex flex-col-reverse md:flex-row my-12 shadow-md bg-transparent">

                                        <div className="md:w-[30%] bg-white rounded-b-md md:rounded-b-none">
                                            <div className='h-full px-5 md:px-10 py-7 md:py-0 flex justify-center flex-col'>
                                                <motion.div
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        duration: 0.7,
                                                        delay: 0.1,
                                                        ease: [0.5, 0.71, 1, 1.5],
                                                    }}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    className='flex items-center'>
                                                    <div className='p-5 border-2 border-primary rounded-full w-fit'>
                                                        {item.svg}
                                                    </div>
                                                    <h3 className='text-2xl pl-7 font-semibold text-primary'>{item.name}</h3>
                                                </motion.div>
                                                <motion.p whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        duration: 0.7,
                                                        delay: 0.2,
                                                        ease: [0.5, 0.71, 1, 1.5],
                                                    }}
                                                    initial={{ opacity: 0, x: -10 }} className='pt-7 text-lg text-left'>{item.description}</motion.p>
                                            </div>
                                        </div>


                                        <div className="md:w-[70%] bg-gray h-full z-30 rounded-t-md md:rounded-t-none">

                                            <img src={item.image} alt={`z luxuria ${item.name}`} className="object-cover rounded-t-md md:rounded-t-none" />

                                        </div>

                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className="mx-4 md:mx-0 flex flex-col md:flex-row shadow-md bg-transparent">

                                        <div className="md:w-[70%] bg-gray h-full z-30 rounded-t-md md:rounded-t-none">

                                            <img src={item.image} alt={`z luxuria ${item.name}`} className="object-cover rounded-t-md md:rounded-t-none" />

                                        </div>

                                        <div className="md:w-[30%] bg-white rounded-b-md md:rounded-b-none">
                                            <div className='h-full px-5 md:px-10 py-7 md:py-0 flex justify-center  flex-col'>
                                                <motion.div
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        duration: 0.7,
                                                        delay: 0.1,
                                                        ease: [0.5, 0.71, 1, 1.5],
                                                    }}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    className='flex items-center'>
                                                    <div className='p-5 border-2 border-primary rounded-full w-fit'>
                                                        {item.svg}
                                                    </div>
                                                    <h3 className='text-2xl pl-7 font-semibold text-primary'>{item.name}</h3>
                                                </motion.div>
                                                <motion.p whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        duration: 0.7,
                                                        delay: 0.2,
                                                        ease: [0.5, 0.71, 1, 1.5],
                                                    }}
                                                    initial={{ opacity: 0, x: -10 }} className='pt-7 text-lg text-left'>{item.description}</motion.p>
                                            </div>
                                        </div>


                                    </div>
                                )
                            }
                        })
                    }



                </div>

            </div>

            <div className="relative h-[85vh]">
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${img4})` }}
                />
                <div className="relative z-10 flex flex-col justify-center items-center h-[85vh]">

                    <div className="max-w-[85%]">

                        <div className="w-[250px] py-5 md:w-full rounded-sm shadow-md bg-secondary flex flex-col justify-center items-center transition duration-500 ease-in-out transform hover:cursor-pointer" onClick={() => { setDBVisible(true) }}>

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

            <Brochure DBVisible={DBVisible} setDBVisible={setDBVisible} Page={"zluxuria"} />

            {/* {console.log(DBVisible)} */}

            {/* CTA */}

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


            <Contact id="contact" page={"zluxuria"} Email={'sales@zadegroup.in'} Subject={'New inquiry for z luxuria'} />

            {/* <Footer phoneNumber={"7573030028"} Email={"sales@zadegroup.in"} /> */}
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />

        </motion.div >
    )
}

export default Zluxuria