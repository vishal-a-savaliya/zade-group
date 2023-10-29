import React from 'react'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from "framer-motion"

// import logo from '../image/Z GROUP LOGO_SQURE.png';
import logo from '../image/Z GROUP LOGO.png';
// import { Link } from 'react-router-dom'
import bg1 from '../image/footer-pattern.png'
import img8 from '../image/z2/8.jpeg'
import img2 from '../image/zluxuria/2_lite.jpeg'

import bg from '../image/About_bg.jpeg';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>

            <Navbar />

            <div
                className="bg-cover bg-center md:h-screen w-full relative"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>
                {/* <Navbar /> */}
                <div className="h-full flex flex-col py-20 md:py-20 items-center text-center text-white">
                    <img src={logo} alt='ZADE GROUP LOGO' className='w-[300px] md:w-[50%] h-auto' />
                    {/* <h1 className="text-6xl font-bold text-secondary py-6 mb-4">
                        ZADE GROUP
                    </h1> */}
                    {/* <h1 className='mx-10 pb-10 md:pt-20 pt-5 text-3xl md:text-6xl text-center font-bold font-heading text-secondary'>About</h1> */}
                    {/* <button className="px-6 py-3 bg-primary font-semibold uppercase tracking-wide">
            Get Started
          </button> */}
                </div>


            </div>

            <div className='bg-black py-20 relative'>

                <img src={bg1} alt='About ZADE GROUP' className='absolute w-full h-[350px]' />

                <div className="max-w-[1000px] mx-auto px-4 md:py-16 mb-20 md:mb-10 md:px-6 lg:px-8 text font-primary z-50">


                    <h1 className="text-3xl md:text-5xl text-center text-gold font-primary font-semibold mb-5 md:mb-10 z-50">
                        About zade group
                    </h1>
                    <p className="text-lg text-center text-textWhiteLight mb-6 font-primary">
                        At Zade Group, we've been providing top-quality construction services in Ahmedabad for over a decade. Our reputation has been built on our commitment to delivering exceptional projects that surpass our clients' expectations.
                    </p>
                    <p className="hidden md:block text-lg text-center text-textWhiteLight mb-6 font-primary">
                        We take pride in everything we do, from using the finest materials to paying close attention to detail in every aspect of our projects. Our team of highly skilled professionals has earned us a reputation as a trusted name in the construction industry, known for our innovative designs and exceptional craftsmanship.
                    </p>

                </div>

                <div className='flex flex-col justify-center items-center'>

                    <div className='flex flex-col justify-center'>
                        <h2 className='uppercase font-primary font-semibold text-textWhiteDark text-center pb-3'>Our Projects</h2>
                        <h3 className='font-primary font-semibold text-textWhiteDark text-2xl md:text-5xl text-center'>Available For Occupancy</h3>
                    </div>

                    <div className='flex flex-col md:flex-row py-12 items-center justify-center w-full'>


                        <Link to={'/z2'} className='w-[90%] md:w-[350px]' >

                            <div className='flex flex-col bg-lightBlack w-full shadow-sm'>

                                <img src={img8} alt='Zade group project Z2' className='w-full h-[500px] object-top  object-cover' />

                                <div className='flex flex-col px-7 pb-5'>

                                    <h2 className='text-2xl font-primary font-bold text-textWhiteDark py-5 my-2'>Z2</h2>

                                    <div className='flex justify-between border-b-[1px] border-[#302f2f] pb-2 mb-3'>
                                        <p className='text-textWhiteDark font-[500] text-[15px]'>Location</p>
                                        <p className='text-textWhiteLight text-[15px]'>Thaltej, Ahmedabad</p>
                                    </div>
                                    <div className='flex justify-between border-b-[1px] border-[#302f2f] pb-2 mb-3'>
                                        <p className='text-textWhiteDark font-[500] text-[15px]'>Status</p>
                                        <p className='text-textWhiteLight  text-[15px]'>Under Construction</p>
                                    </div>
                                    <div className='flex justify-between pb-2 mb-2'>
                                        <p className='text-textWhiteDark font-[500] text-[15px]'>Type</p>
                                        <p className='text-textWhiteLight text-[15px]'>Corporate Space</p>
                                    </div>
                                </div>
                            </div>

                        </Link>

                        <Link to={'/zluxuria'} className='w-[90%] md:w-[350px]' >

                            <div className='flex flex-col bg-lightBlack shadow-sm w-full md:ml-9 mt-10 md:mt-0'>
                                <img src={img2} alt='Zade group project z luzuria' className='w-full h-[500px] object-cover object-top' />


                                <div className='flex flex-col px-7 pb-5'>

                                    <h2 className='text-2xl font-primary font-bold text-textWhiteDark py-5 my-2'>Z Luxuria</h2>

                                    <div className='flex justify-between border-b-[1px] border-[#302f2f] pb-2 mb-4'>
                                        <p className='text-textWhiteDark font-[500] text-[15px]'>Location</p>
                                        <p className='text-textWhiteLight text-[15px]'>Thaltej, Ahmedabad</p>
                                    </div>
                                    <div className='flex justify-between border-b-[1px] border-[#302f2f] pb-2 mb-2'>
                                        <p className='text-textWhiteDark font-[500] text-[15px]'>Status</p>
                                        <p className='text-textWhiteLight text-[15px]'>Under Construction</p>
                                    </div>
                                    <div className='flex justify-between pb-2 mb-2'>
                                        <p className='text-textWhiteDark font-[500] text-[15px]'>Type</p>
                                        <p className='text-textWhiteLight text-[15px]'>Villaments Recidency</p>
                                    </div>
                                </div>
                            </div>

                        </Link>


                    </div>


                </div>


            </div>

            <div className='flex w-full bg-offWhite'>

                <div className='w-full max-w-[1300px] mx-auto top-0 bottom-0 flex flex-col md:flex-row py-24 px-6 md:px-12'>

                    <div className='md:w-1/2 flex items-center'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14684.99616276178!2d72.4998164!3d23.0513296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b98d8b3ca05%3A0xcd5408ab37917bd0!2sZADE%20CORPORATE%20CAMPUS!5e0!3m2!1sen!2sin!4v1690098823012!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" title='Zade group corporate campus' className='mx-auto shadow-sm' ></iframe>
                    </div>

                    <motion.div
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.3,
                            // ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0 }}

                        className='md:w-1/2 py-10 md:py-0 md:px-5 md:ml-8 flex flex-col justify-center items-start '
                    >

                        <p className='text-textBlackDark font-primary text-sm font-semibold uppercase pb-5'>Office</p>
                        <h1 className='text-textBlackDark font-primary font-bold text-3xl md:text-5xl 15:text-6xl'>Visit Our Corporate Campus</h1>
                        <p className='text-secondary font-light pt-5 md:pt-7 pb-4 15:pt-8 15:pb-6'>Corporate Campus, Nr. Baghban Party Plot, Zydus Hospital Rd, Thaltej, Ahmedabad, 380059</p>


                        <div className='flex items-center justify-center py-1'>

                            <a href='tel:7573030027' target="_blank" rel="noreferrer">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>

                            </a>


                            <a href='tel:7573030027' target="_blank" rel="noreferrer">
                                <span className='text-xl font-primary ml-3 text-black'>7573030027/28</span>
                            </a>


                        </div>

                        <div className='flex items-center justify-center py-3'>

                            <a href='mailto:info@zadegroup.in' target="_blank" rel="noreferrer">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                            </a>


                            <a href='mailto:info@zadegroup.in' target="_blank" rel="noreferrer">
                                <span className='text-xl font-primary ml-3 text-black'>info@zadegroup.in</span>
                            </a>


                        </div>

                        <a href="https://goo.gl/maps/4y4iq9cLUZpNLQnL8" className="button-gold mt-5">Get Direction</a>

                    </motion.div>

                </div>

            </div>


            <Contact />
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />
        </div>
    )
}

export default About