import { useState, useEffect, useCallback } from 'react'
import { motion } from "framer-motion"


import img1 from '../image/z2/1.jpeg'
import img2 from '../image/z2/2.jpeg'
import img3 from '../image/z2/3.jpeg'
import img4 from '../image/z2/4.jpeg'
import img5 from '../image/z2/5.jpeg'
import img6 from '../image/z2/6.jpeg'
import img7 from '../image/z2/7.jpeg'
import img8 from '../image/z2/8.jpeg'

import corporate_bg_image from '../image/z2/corponare_place_background_image.jpeg'

import Footer from '../components/Footer'


function Z2() {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    const [current, setCurrent] = useState(0);

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
        "subject": "New Inquiry for Corporate Space",
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
                    "subject": "New Inquiry for Corporate Space",
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

            <div className='bg-secondary'>
                <div className='h-[300px] w-[85%] mx-auto flex items-end'>
                    <h1 className='py-20 text-7xl font-bold text-primary'>Corporate Space</h1>
                </div>
            </div>
            {/* <div className='w-full h-[100vh] bg-cover bg-center' style={{
                backgroundImage: `url(${corporate_bg_image})`,
            }}>

            </div> */}

            {/* <h1 className='text-5xl text-primary font-bold w-[1200px] mx-auto'>Gallery</h1> */}

            <div className="relative md:hidden px-3 my-8">
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
            </div>

            <div className='hidden md:flex flex-row w-[1200px] mx-auto my-10 pb-5'>

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

            </div>

            <div className='bg-gray py-8 md:py-10 md:pb-14'>

                <div className='flex flex-col w-[90%] md:flex-row md:w-[85%] mx-auto my-10'>

                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold text-primary'>Details</h1>

                        <div className='pt-5 pl-3 md:pl-0 md:pt-10 md:pr-8'>
                            <li className='li'>32 stories Corporate Space</li>
                            <li className='li'>12 feet hight for Each floor</li>
                            <li className='li'>1230 Sq. Ft. to 10,000 Sq. Ft. Corporate Space</li>
                            <li className='li'>5 level basement parking</li>
                            <li className='li'>30 Meter & 12 Metre two road corner</li>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-0 md:w-1/2'>
                        <div className='bg-secondary flex justify-start flex-col flex-wrap px-10 pb-8 md:pb-0 md:px-14 h-[100%]'>

                            <h1 className='text-2xl font-bold text-white pt-10 pb-5'>Inquiry for Corporate Space</h1>

                            {/* form section */}
                            <form onSubmit={(e) => { HandleFormSubmit(e) }}>

                                <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                    {/* <label htmlFor="name" className="label">Full Name:</label> */}
                                    <input type="text" id="name" name="name" placeholder='Full name' autocomplete="off" className="input" value={data.name} onChange={handleChange} required />

                                </div>

                                <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                    {/* <label htmlFor="email" className="label">Email:</label> */}
                                    <input type="email" id="email" name="email" placeholder='Email Address' autocomplete="off" className="input" value={data.email} onChange={handleChange} />

                                </div>

                                <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                    {/* <label htmlFor="phone" className="label">Phone:</label> */}
                                    <input type="text" id="phone" name="phone" placeholder='Phone number' autocomplete="off" className="input" value={data.phone} onChange={handleChange} required />

                                </div>

                                <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                    {/* <label htmlFor="message" className="label">Message:</label> */}
                                    <textarea id="message" name="message" placeholder='Message' autocomplete="off" className="input" defaultValue={""} value={data.message} onChange={handleChange} required />

                                </div>

                                <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                    <button type="submit" className="text-white bg-primary flex items-center shadow-lg justify-around border-0 py-2 px-6  mt-4 w-[150px] focus:outline-none hover:bg-yellow-600  text-lg font-normal " >

                                        {submitting ? "sending..." : "send"}

                                    </button>

                                </div>

                                <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">
                                    {successMessage && <div className="text-white">{successMessage}</div>}
                                    {errorMessage && <div className="text-white">{errorMessage}</div>}
                                </div>

                            </form>
                        </div>
                    </div>

                </div>

            </div>


            <Footer phoneNumber={"7573030027"} Email={"sales@zadegroup.in"} />

        </motion.div>
    )
}

export default Z2