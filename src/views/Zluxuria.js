import { useState, useEffect, useCallback } from 'react'
import { motion } from "framer-motion"

import img1 from '../image/zluxuria/1_lite.jpeg'
import img2 from '../image/zluxuria/2_lite.jpeg'
import bg from '../image/Z_Luxuriya_bg_1.jpg'
import bg_2 from '../image/zluxuria/bg-2.png'


import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

import { Projects } from '../data/ProjectDetails'

function Zluxuria() {

    const images = [img1, img2];
    const [current, setCurrent] = useState(0);
    const ZL = Projects[1]

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    const nextSlide = useCallback(() => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }, [current, images.length]);

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
        }, 3000);
        return () => clearInterval(interval);
    }, [nextSlide]);


    const [data, setData] = useState({
        "subject": "New Inquiry for Luxurious living",
        "name": "",
        "email": "",
        "phone": "",
        "message": ""
    })

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
        // console.log(data)
    };


    const HandleFormSubmit = (e) => {

        e.preventDefault();

        setSubmitting(true);

        fetch("https://formsubmit.co/ajax/sales@zadegroup.in", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setSuccessMessage('Thank you for submitting! We will be in touch with you soon.');
                setTimeout(() => { setSuccessMessage(null) }, 10000)
                setData({
                    "subject": "New Inquiry for Luxurious living",
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
                setSubmitting(false);
            })
            .catch(error => {
                console.log(error);
                setSubmitting(false);
                setErrorMessage('An error occurred while submitting the form.');
            }
            );
    }

    return (
        <motion.div exit={{ opacity: 0 }}>

            <Navbar />

            <div className="relative h-screen">
                <div
                    className="bg-cover bg-center h-screen w-full absolute inset-0 bg-no-repeat bg-fixed"
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

                                <h1 className='mt-10 pt-10 pb-2 text-6xl text-center font-bold text-white font-style uppercase'>ULTIMATE</h1>
                                <h1 className='text-6xl text-center font-bold text-white font-style uppercase'> LUXURY LIVING</h1>
                                <h1 className='text-6xl text-center font-bold text-white font-style uppercase'>AT SKY</h1>
                                <p className="w-[70%] mx-auto pt-8 text-xl text-white font-primary text-center py-4 font-medium">We're excited to present a new level of luxury in Ahmedabad with state-of-the-art facilities, world-class amenities, and stunning architectural design.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>

            <div className='flex justify-center flex-col items-center bg-gray py-20 bg-center'
                style={{
                    backgroundImage: `url(${bg_2})`,
                }}
            >
                <div className='py-20'>
                    <h1 className='text-6xl font-style text-center py-2 text-black'>z luxuria</h1>
                    <h1 className='text-4xl font-style text-center text-black'>introducing new level of luxury living</h1>


                </div>

                <div className='flex justify-between pt-5'>
                    {
                        ZL.details ? ZL.details.map((data, index) => {

                            if (index == ZL.details.length - 1) {
                                return (
                                    <div className='flex justify-start items-center mx-8'>
                                        <div className='py-5'>
                                            <h1 className='text-5xl text-black font-primary font-bold'>{data[0]}</h1>
                                            <p className=' text-black py-3 text-2xl font-style'>{data[1]}</p>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='flex justify-start items-center mx-8'>
                                        <div className='py-5'>
                                            <h1 className='text-5xl text-black font-primary font-bold'>{data[0]}</h1>
                                            <p className=' text-black py-3 text-2xl font-style'>{data[1]}</p>
                                        </div>
                                        <div className='ml-8 py-1'>
                                            <hr className='border-primary border w-24'></hr>
                                        </div>
                                    </div>
                                )
                            }

                        }) : null
                    }
                </div>

            </div>


            <div className=''>

                <div className='flex flex-row'>
                    <div className='w-[400px] bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${img1})`,
                        }}
                    >

                    </div>
                    <div className='h-[700px] grow flex flex-col justify-center items-center'>

                        <h3 className='text-2xl text-black font-primary'>About z luxuria</h3>
                        <h1 className='text-3xl py-3 font-style text-center text-black'>Introducing our latest project,<br /> Luxurious Living</h1>
                        <p className='w-[450px] text-center mx-auto font-primary py-2 text-black'>z luxuria, a luxurious residential tower that will set new standards for opulent living in Ahmedabad. This magnificent 33-story tower offers 56 units with world-class amenities and stunning architectural design.</p>

                        <div>

                        </div>


                    </div>
                    <div className='w-[400px] bg-center bg-cover'
                        style={{
                            backgroundImage: `url(${img2})`,
                        }}
                    >
                    </div>
                </div>
            </div>

            <Contact />

            <Footer phoneNumber={"7573030028"} Email={"sales@zadegroup.in"} />
        </motion.div>
    )
}

export default Zluxuria