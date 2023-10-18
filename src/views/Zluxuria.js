import { useState, useEffect, useCallback } from 'react'
import { motion } from "framer-motion"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import img1 from '../image/zluxuria/Zluxuria1.jpeg'
import img2 from '../image/zluxuria/2_lite.jpeg'
import bg from '../image/zluxuria/hero_bg_image_z_luxuria.jpeg'
// import bg_2 from '../image/zluxuria/bg-2.png'
import specification_bg from '../image/zluxuria/specification.jpeg'
// import amenities_section_bg from '../image/landing_bg2.png'
// import CTA_bg from "../image/landing_bg3.jpg"



import img3 from '../image/zluxuria/Zluxuria2.jpeg';
import img4 from '../image/zluxuria/Zluxuria6.jpeg';
import img5 from '../image/zluxuria/Zluxuria5.jpeg';
import img6 from '../image/zluxuria/Zluxuria4.jpeg';
import img7 from '../image/zluxuria/Z_LUXURIA_ARTWORK_2.png';


import amenities_img1 from '../image/zluxuria/zluxuria_specification1.jpeg'
// import amenities_img2 from '../image/zluxuria/zluzuria_specification2.jpeg'
// import amenities_img3 from '../image/zluxuria/zluzuria_specification3.jpeg'
// import amenities_img4 from '../image/zluxuria/zluzuria_specification4.jpeg'
// import amenities_img5 from '../image/zluxuria/zluzuria_specification5.jpeg'
import amenities_img6 from '../image/zluxuria/zluxuria_specification6.jpeg'
import amenities_img7 from '../image/zluxuria/zluxuria_specification7.jpeg'
// import amenities_img8 from '../image/zluxuria/zluxuria_specification8.jpeg'
import brochure_cover from '../image/zluxuria/brochure_3d.png';


import bg1 from '../image/bg/bg1.webp';
// import bg2 from '../image/bg/bg2.webp';
import bg3 from '../image/bg/bg3.webp';
import bg4 from '../image/bg/bg4.webp';
import bg5 from '../image/bg/bg5.webp';
import bg6 from '../image/bg/bg6.webp';
import bg14 from '../image/bg/bg14.webp';
import z_luxuria_logo from '../image/logos/ZADE_LUXURIA_LOGO.png'

// import icon1 from '../image/icons/view.png'


import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ImageSlider from "../components/ImageSlider"


// import { Projects, Amenities } from '../data/ProjectDetails'
import { Projects, AmenitiesDetails, Amenities } from '../data/ProjectDetails'
import Brochure from '../components/Brochure'
import CTA from '../components/CTA'

function Zluxuria() {


    const ZL = Projects[1];
    const images = [img6, img3, img4, img5];
    const specification_images = [{
        image: amenities_img7,
        title: "Double height owner's lounge",
        description: "Make a striking first impression with our double-height owner's lounge, welcoming you and your guests to a space designed to leave a lasting memory.",
        details: "25'ft Double Height Foyer"

    },
    {
        image: amenities_img6, title: "Double height waiting & reception area", description: "Elevate your guests' experience in our double-height waiting and reception area, Get ready to be impressed as you and your guests are treated to the utmost hospitality and warmth.",
        details: "25'ft Double Height Foyer"
    },
    { image: amenities_img1, title: "Double height multipurpose hall", description: "Turn every special occasion into a grand memory with a venue that is perfect for all your gatherings and celebrations.", details: "25'ft Double Height Foyer" }];

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
    const [amenitiesIndex, setAmenitiesIndex] = useState(0);
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


    useEffect(() => {
        const interval = setInterval(() => {
            setAmenitiesIndex(pre => (pre + 1) % 4);
        }, 5000);
        return () => clearInterval(interval);
    });


    const AmenitiesElements = [];

    for (let i = 0; i < 6; i++) {
        AmenitiesElements.push(<div className='py-8 px-3' key={i}>
            <img src={Amenities["zluxuria"][(i + 6 * amenitiesIndex) % 20].SVG} alt={Amenities["zluxuria"][(i + 6 * amenitiesIndex) % 20].name} className='w-[70px] md:w-[85px] 15:w-[100px] h-auto' />
            <h2 className=' md:text-2xl text-textWhiteDark font-bold font-primary pt-4'>{Amenities["zluxuria"][(i + 6 * amenitiesIndex) % 20].name}</h2>
        </div>);
    }


    return (
        <motion.div exit={{ opacity: 0 }} className='relative'>

            <CTA setDBVisible={setDBVisible} />

            <Navbar />

            {/* Hero */}

            <div className="hidden md:block relative h-[1000px] pt-5">
                <div
                    className="bg-cover h-full w-full md:absolute inset-0 bg-no-repeat md:bg-fixed"
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

                            className="h-full flex flex-col items-center">

                            <div className='flex flex-col justify-center items-center pt-[43%]'>
                                <h1 className='mt-10 pt-10 pb-2 text-6xl md:text-9xl text-center md:font-bold text-white font-primary'>Z Luxuria</h1>
                                <h1 className='mt-5 pb-2 text-3xl md:hidden md:text-5xl text-center text-white lowercase'>ULTIMATE LUXURY LIVING AT SKY</h1>
                                <h1 className='hidden md:flex mt-5 pb-2 text-3xl md:text-5xl text-center text-white font-primary lowercase'>ULTIMATE LUXURY LIVING AT SKY</h1>
                                {/* <h1 className='hidden text-3xl md:text-5xl md:flex text-center text-white font-primary lowercase'>AT SKY</h1> */}
                                {/* <h1 className='text-3xl md:text-5xl text-center font-bold text-white font-style uppercase'> </h1> */}
                                <p className="hidden w-[90%] md:w-[70%] mx-auto pt-8 md:text-xl text-white font-primary text-center py-4 font-medium">Experience the height of luxury with our latest project, designed to inspire and elevate your senses.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>


            {/* Mobile */}

            <div className="md:hidden relative h-[650px]">
                <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}>

                    <div className='absolute w-full h-full bg-black bg-opacity-40'></div>

                    <div className="w-full h-full flex  justify-center items-center z-10">
                        <motion.div

                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: 1,
                                // ease: [0.5, 0.71, 1, 1.5],
                            }}
                            initial={{ opacity: 0 }}
                            // whileHover={{ scale: 1.2 }}

                            className="h-full flex flex-col items-center z-10">

                            <div className='flex flex-col justify-center items-center pt-[43%]'>
                                <h1 className='mt-10 pt-10 text-6xl text-center font-bold text-textWhiteDark font-primary'>Z Luxuria</h1>
                                <h1 className='mt-5 text-4xl text-center text-white font-primary px-8'>Ultimate Luxury Living At Sky</h1>
                                {/* <h1 className='hidden text-3xl md:text-5xl md:flex text-center text-white font-primary lowercase'>AT SKY</h1> */}
                                {/* <h1 className='text-3xl md:text-5xl text-center font-bold text-white font-style uppercase'> </h1> */}
                                <p className="hidden w-[90%] md:w-[70%] mx-auto pt-8 md:text-xl text-white font-primary text-center py-4 font-medium">Experience the height of luxury with our latest project, designed to inspire and elevate your senses.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>



            {/* project details 1 */}

            <div className='hidden md:block px-10 py-16 md:py-32'

                style={{
                    backgroundImage: `url(${bg1})`,
                }}

            >

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
                        className='h-[700px] md:grow flex flex-col justify-center items-center px-10'>

                        <img src={z_luxuria_logo} className='w-[250px] pb-8' alt="Z Luxuria logo" />
                        <h2 className='hidden text-5xl py-7 text-center font-semibold leading-[1.1] primaryBlack'>Introducing our latest project <span className='font-primary text-gold'>Z Luxuria</span></h2>
                        <p className='w-[85%] md:w-[550px] text-center mx-auto text-textBlackDark text-lg'>Our 33-story masterpiece in Thaltej stands tall with 56 luxurious units, ranging from 4 BHK, 6 BHK, and 7 BHK with world-class amenities and stunning architectural design.</p>
                        <p className='w-[85%] md:w-[550px] text-center mx-auto text-textBlackDark text-lg pt-2 pb-4'>Surrounded by natural beauty and spread across expansive grounds, it's more than just a residence <span className='text-goldHover font-primary'>- it's a lifestyle.</span></p>

                        <div className='flex items-center justify-center py-3 mt-2'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cda24b" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                            <h1 className='text-2xl font-primary ml-3'>{ZL.status}</h1>

                        </div>

                        <div className='flex items-center justify-center py-1'>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#cda24b" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            <span className='text-2xl font-primary ml-3'>{ZL.location}</span>

                        </div>

                        <a href="#contact" className="button-gold mt-7 uppercase">Enquiry</a>

                    </motion.div>


                    <div className='hidden md:block w-[450px] bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${img2})`,
                        }}
                    >
                    </div>
                </div>
            </div>


            {/* project details 2  */}

            <div className='hidden md:flex relative justify-center flex-col items-center bg-black py-20 pb-40'

            >
                <div className="absolute w-full h-full top-24 py-14 bg-no-repeat bg-right-top"
                    style={{
                        backgroundImage: `url(${bg3})`,
                    }}
                >
                </div>

                <div className='pb-16 pt-60 z-30'>
                    <h1 className='text-5xl md:text-8xl text-center py-2 font-primary font-semibold text-textWhiteDark'>Z Luxuria</h1>
                    <h1 className='text-3xl px-4 md:px-0 md:text-4xl font-style text-center text-textWhiteDark'>introducing new level of luxury living</h1>
                </div>

                <div className='flex'>

                    <div className='w-1/2 flex justify-center items-end'>
                        <div>
                            <img src={img7} alt='Z Luxuria' className='w-[85%] h-auto mx-auto' />
                        </div>
                    </div>


                    <div className='flex flex-col w-[50%] pt-36'>

                        {
                            ZL.aboutDetails && ZL.aboutDetails.map((data, index) => {
                                return (
                                    <div className='w-[500px] my-8'>
                                        <div className='py-2'>
                                            <img src={data.icon} alt='A 270 DEGREE VIEW' className='w-[80px]' />
                                        </div>
                                        <p className='text-3xl font-primary font-bold text-textWhiteDark py-3'>{data.title}</p>
                                        <p className='text-textWhiteLight text-justify pt-5'>{data.description}</p>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-between z-30 md:pt-32 pb-20'>
                    {
                        ZL.details ? ZL.details.map((data, index) => {

                            if (index === ZL.details.length - 1) {
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
                                            <h1 className='text-5xl text-textWhiteDark font-semibold'>{data[0]}</h1>
                                            <p className=' text-textWhiteDark py-3 text-2xl font-primary'>{data[1]}</p>
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
                                            <h1 className='text-5xl text-textWhiteDark font-semibold'>{data[0]}</h1>
                                            <p className=' text-textWhiteDark py-3 text-2xl font-primary max-w-[180px]'>{data[1]}</p>
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


            {/* Mobile */}

            <div className='md:hidden flex relative justify-center flex-col items-center bg-black py-20 pb-40'>

                <div className='flex flex-col'>

                    <div className='w-full flex flex-col justify-center'>
                        <div>
                            <img src={img7} alt='Z Luxuria' className='w-[85%] h-auto mx-auto' />
                        </div>
                        <div className='pb-6 z-30 relative'>
                            <h1 className='text-5xl text-center py-2 font-primary font-semibold text-textWhiteDark'>Z Luxuria</h1>
                            <h1 className='text-6xl font-script  text-primary absolute top-10 left-1/2 -translate-x-1/2 inline'>Luxurious lifestyle</h1>
                        </div>
                    </div>

                </div>

                <div className=''>

                    <div className='relative flex justify-end'>
                        <img src={bg14} alt='Z luxuria details' className='w-[60%] top-32 right-0 absolute' />
                    </div>


                    <div className='py-5'>

                    </div>

                    <div className='flex flex-col justify-between z-30 pt-10'>

                        {
                            ZL.details ? ZL.details.map((data, index) => {

                                if (index === ZL.details.length - 1) {
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
                                                <h1 className='text-5xl text-textWhiteDark font-semibold'>{data[0]}</h1>
                                                <p className=' text-textWhiteDark py-3 text-2xl font-primary'>{data[1]}</p>
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
                                                <h1 className='text-5xl text-textWhiteDark font-semibold'>{data[0]}</h1>
                                                <p className=' text-textWhiteDark py-3 text-2xl font-primary max-w-[180px]'>{data[1]}</p>
                                            </div>
                                            <div className='ml-2 py-1'>
                                                <hr className='border-primary border w-24'></hr>
                                            </div>
                                        </motion.div>
                                    )
                                }

                            }) : null
                        }
                    </div>

                </div>

            </div>




            {/* living Room */}

            <div className='py-16 14:pb-40 15:pb-60 md:pt-16 bg-cover'

                style={{
                    backgroundImage: `url(${bg1})`,
                }}>


                <h2 className='text-[4rem] md:text-[12rem] font-script text-gold text-center pt-7'>Specious Living Space</h2>

                <div className='hidden relative md:flex md:my-24'>

                    <div className='w-[35%]'>

                    </div>
                    <div className='w-[65%] bg-green'>
                        <img src={bg4} alt="Spacious Living Room cover" className='w-full h-auto' />
                    </div>

                    <div className='absolute w-full top-0 bottom-0 flex py-14 px-12'>

                        <div className='w-1/2 flex items-center'>
                            <img src={specification_bg} alt="Spacious Living Room cover" className='w-auto h-[85%] object-cover' />
                        </div>

                        <div className='w-1/2 flex items-center'>
                            <div className='ml-20 mr-16 15:ml-24 15:mr-36'>
                                <p className='text-textWhiteDark font-primary text-sm font-semibold uppercase pb-5'>Specious Living Room</p>
                                <h2 className='text-textWhiteDark font-primary font-bold text-5xl 15:text-6xl'>We create spaces for luxury living</h2>
                                <p className='text-textWhiteLight font-light pt-7 pb-4 15:pt-8 15:pb-6'>The super spacious column less structure of formal living room, family living room and dining area is embedded with the most exquisite interiors offering you a splendid living experience.</p>
                                <ul className='pb-10 15:pb-14'>
                                    <li className='text-textWhiteDark font-primary text-xl 14:py-1 15:py-2'>Fill Aura of Luxurious Lifestyle</li>
                                    <li className='text-textWhiteDark font-primary text-xl 14:py-1 15:py-2'>Specious Living with Specious View</li>
                                    <li className='text-textWhiteDark font-primary text-xl 14:py-1 15:py-2'>Wide space of  42' 8"  X 17' 10" </li>
                                </ul>
                                <a className='button-gold' href='#contact'>Contact Us</a>
                            </div>
                        </div>

                    </div>

                </div>


                {/* Mobile */}

                <div className='md:hidden relative my-24'>


                    <div className='absolute inset-0 w-[100%] mx-auto bg-green'>
                        <img src={bg4} alt="Spacious Living Room cover" className='w-auto h-full' />
                    </div>

                    <div className='absolute w-[85%] -top-20 left-1/2 -translate-x-1/2'>

                        <div className='w-full flex items-center'>
                            <img src={specification_bg} alt="Spacious Living Room cover" className='w-auto h-[85%] object-cover' />
                        </div>

                    </div>



                    <div className='w-full pb-20 pt-28 flex items-center'>
                        <div className='z-10 px-4 pt-5'>
                            <p className='text-textWhiteDark font-primary text-sm font-semibold uppercase pb-3'>Specious Living Room</p>
                            <h2 className='text-textWhiteDark font-primary font-bold text-3xl'>We create spaces for luxury living</h2>
                            {/* <p className='text-textWhiteLight font-light pt-5 pb-5 15:pt-8 15:pb-6'>The super spacious column less structure of formal living room, family living room and dining area.</p> */}
                            <ul className='pb-10 pt-4'>
                                <li className='text-textWhiteLight font-primary text-xl py-1 15:py-2'>Fill Aura of Luxurious Lifestyle</li>
                                <li className='text-textWhiteLight font-primary text-xl py-1 15:py-2'>Specious Living with Specious View</li>
                                <li className='text-textWhiteLight font-primary text-xl py-1 15:py-2'>Wide space of  42' 8"  X 17' 10" </li>
                            </ul>
                            <a className='button-gold' href='#contact'>Contact Us</a>
                        </div>
                    </div>



                </div>






            </div>



            {/* gallery */}

            <div className='bg-center bg-black'>

                <div className="py-32">

                    <h3 className="text-5xl md:hidden text-primary font-primary font-semibold z-50 pl-3 -pb-10">Gallery</h3>

                    <div className="flex justify-center h-[300px] md:h-[500px] md:py-0">
                        <h3 className="hidden md:block text-5xl md:text-8xl text-gold font-primary font-semibold absolute z-30 md:left-24 mb-4">Gallery</h3>
                        <ImageSlider images={images} width={800} height={500} />
                    </div>
                </div>

            </div>





            {/* Amenities images  */}

            <div className='bg-white py-24' style={{
                backgroundImage: `url(${bg1})`,
            }} >


                <h2 className='text-[4rem] md:text-[10rem] font-script text-gold text-center pb-12'>Double your expectation</h2>

                {/* Double Height amenities */}

                <div className='px-3 md:px-10 md:pb-32 flex flex-col md:flex-row justify-center items-start'>

                    {/* Images */}

                    <div className="relative w-full md:w-[750px]">
                        <div className='w-full bg-cover bg-center h-[450px]'
                            style={{
                                backgroundImage: `url(${specification_images[current].image})`,
                            }}></div>


                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:z-30">
                            {specification_images.map((_, index) => (
                                <button key={index} className={`h-3 w-3 rounded-full ${index === current ? 'bg-white' : 'bg-[#FFFFFF44]'}`} onClick={() => setCurrent(index)}></button>
                            ))}
                        </div>
                    </div>


                    {/* Details */}

                    <div className='w-full md:w-[600px] mt-5 md:mt-0 md:pl-10 flex flex-col items-start'>

                        <div className="flex justify-start items-start flex-col" onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}>
                            <p className="text-3xl md:px-0 md:text-6xl primaryBlack font-bold">{specification_images[current].title}</p>
                            <p className="py-4 md:py-6 md:px-2 font-primary font-semibold text-xl md:text-2xl text-secondaryBlack md:text-textBlackDark">{specification_images[current].details}</p>
                            <p className="pb-7 md:pb-10 md:px-2 text-secondaryBlack md:text-textBlackDark">{specification_images[current].description}</p>
                        </div>

                        <div className='flex'>

                            <button className="mr-3 py-3 md:py-4 px-5 bg-gold hover:bg-goldHover transition duration-500 ease-in-out    focus:outline-none" onClick={prevSlide}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                            </button>

                            <button className="ml-3 py-3 md:py-4 px-5 bg-gold hover:bg-goldHover transition duration-500 ease-in-out  focus:outline-none" onClick={nextSlide}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>

                        </div>
                    </div>


                </div>


                {/* Images with Details */}

                <div className="w-[92%] md:w-[80%] mx-auto h-full z-30 py-10 md:py-16">

                    {
                        AmenitiesDetails && AmenitiesDetails["zluxuria"].map((item, index) => {
                            return (
                                <div className="relative my-12 md:my-14" key={index}>
                                    <img src={item.image} alt={item.name} className="object-cover h-full w-full" />


                                    {/* desktop */}

                                    <div className='hidden group w-full h-full top-0 absolute md:flex flex-col justify-end hover:bg-black hover:bg-opacity-30 z-20 transition duration-500 ease-in-out '>

                                        <div className='bottom-0 md:py-14 md:px-16'>
                                            <h3 className='text-textWhiteDark md:text-3xl font-primary font-bold transition duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-full'>{item.name}</h3>
                                            <p className='text-textWhiteLight pt-2 opacity-0 transition duration-500 ease-in-out transform group-hover:translate-y-0 translate-y-full group-hover:opacity-100'>{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Mobile */}

                                    <div className='md:hidden group w-full h-full top-0 bottom-0 absolute flex flex-col justify-end hover:bg-black bg-opacity-30 z-20 transition duration-500 ease-in-out '>

                                        <div className='bottom-0'>
                                            <h3 className='text-textWhiteDark text-2xl pl-3 pb-2 font-primary font-bold transition duration-500 ease-in-out'>{item.name}</h3>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }



                </div>
            </div>





            {/* Amenities Desktop */}

            <div className='hidden md:flex relative justify-center flex-col items-center bg-black py-28 pb-40'

            >
                <div className="absolute w-full h-full left-0 bottom-16 py-14 bg-no-repeat bg-left-bottom"
                    style={{
                        backgroundImage: `url(${bg5})`,
                    }}
                >
                </div>

                <div className='14:w-[90%] 15:w-[85%] mx-auto flex py-24'>
                    <div className='w-[45%] 15:px-16 flex flex-col items-start'>
                        <p className='text-textWhiteDark font-primary text-sm font-semibold uppercase pb-5'>Discover Our amenities</p>
                        <h2 className='text-textWhiteDark font-primary font-bold 14:text-5xl 15:text-6xl'>The lifestyle you deserve</h2>
                        <p className='text-textWhiteLight font-light pt-6 pb-6'>Indulge in an array of exclusive amenities curated to cater to your regal lifestyle, ensuring every moment is steeped in grandeur and refinement.</p>
                    </div>
                    <div className='w-[55%] ml-10 grid grid-cols-2'>

                        {AmenitiesElements}

                    </div>
                </div>

            </div>


            {/* Mobile  */}

            <div className='flex md:hidden relative justify-center flex-col items-center bg-black pt-20 pb-40'>



                <div className='14:w-[90%] 15:w-[85%] mx-auto flex flex-col pt-5 relative'>

                    <div className='w-full px-5 15:px-16 flex flex-col items-start'>
                        <p className='text-textWhiteDark font-primary text-sm font-semibold uppercase pb-5'>Discover Our amenities</p>
                        <h2 className='text-textWhiteDark font-primary font-bold text-4xl'>The lifestyle you deserve</h2>
                        <p className='text-textWhiteLight font-light pt-6 pb-6'>Indulge in an array of exclusive amenities curated to cater to your regal lifestyle, ensuring every moment is steeped in grandeur and refinement.</p>
                    </div>

                    <div className='w-full px-5 grid grid-cols-2'>

                        {AmenitiesElements}

                    </div>

                </div>

                <div className="absolute w-full left-0 bottom-0 py-14">
                    <img src={bg5} alt='z luxuria amenities thaltej Ahmedabad' className='w-full' />
                </div>

            </div>





            {/* Brochure */}


            <div className="relative h-[85vh]">
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover md:bg-fixed bg-center"
                    style={{ backgroundImage: `url(${img4})` }}
                />
                <div className="relative z-10 flex flex-col justify-center items-center h-[85vh]">



                    <div className="w-fit py-5 px-4 rounded-sm shadow-md bg-secondary flex flex-col justify-center items-center transition duration-500 ease-in-out transform hover:cursor-pointer" onClick={() => { setDBVisible(true) }}>

                        <div className="h-[full] flex justify-center items-center py-4 px-10">
                            <motion.img
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1.5,
                                    delay: 0.2,
                                }}
                                initial={{ opacity: 0, y: 10 }} src={brochure_cover} className='fill-primary w-44' alt='icon' />

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

            <Brochure DBVisible={DBVisible} setDBVisible={setDBVisible} Page={"zluxuria"} />





            {/* CTA */}

            <div className='bg-cover bg-left md:bg-center py-20 flex flex-col justify-center items-center bg-green md:bg-opacity-60'
                style={{
                    backgroundImage: `url(${bg6})`,
                }}
            >
                <motion.h1

                    whileInView={{ y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0,
                    }}
                    initial={{ y: 30 }}

                    className='text-xl md:text-4xl font-primary font-bold text-white py-2'>AVAILABLE FOR</motion.h1>
                <motion.h1
                    whileInView={{ y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0,
                    }}
                    initial={{ y: 30 }}
                    className='text-xl md:text-6xl font-primary font-bold text-white'>IMMEDIATE OCCUPANCY !</motion.h1>

                <motion.a
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    initial={{ opacity: 0 }}
                    href="#contact" className='button-gold mt-8'>Inquire Now</motion.a>
                {/* <motion.a
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    initial={{ opacity: 0 }}
                    href="#contact" className='bg-white text-lg mt-8 py-2 px-6 uppercase hover:cursor-pointer hover:bg-black hover:shadow-md hover:text-white '>Inquire Now</motion.a> */}

            </div>


            <Contact id="contact" page={"zluxuria"} Email={'sales@zadegroup.in'} Subject={'New inquiry for z luxuria'} />

            {/* <Footer phoneNumber={"7573030028"} Email={"sales@zadegroup.in"} /> */}

            <div className='w-full bg-black'>

            </div>

            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} page={"zluxuria"} />

        </motion.div >
    )
}

export default Zluxuria