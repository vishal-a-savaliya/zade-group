import React from 'react'
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// import logo from '../image/Z GROUP LOGO_SQURE.png';
import logo from '../image/Z GROUP LOGO.png';
// import { Link } from 'react-router-dom'

import bg from '../image/About_bg.jpeg';
import Navbar from '../components/Navbar';

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

            <div className="max-w-[1000px] mx-auto px-4 mt-14 md:py-16 mb-10 md:px-6 lg:px-8 text font-primary">
                <h1 className="text-3xl md:text-5xl text-center text-primary font-style text-gray-800 mb-5 md:mb-10">
                    About zade group
                </h1>
                <p className="text-lg text-center text-gray-600 mb-6 font-primary">
                    At Zade Group, we've been providing top-quality construction services in Ahmedabad for over a decade. Our reputation has been built on our commitment to delivering exceptional projects that surpass our clients' expectations.
                </p>
                <p className="text-lg text-center text-gray-600 mb-6 font-primary">
                    We take pride in everything we do, from using the finest materials to paying close attention to detail in every aspect of our projects. Our team of highly skilled professionals has earned us a reputation as a trusted name in the construction industry, known for our innovative designs and exceptional craftsmanship.
                </p>
                <h2 className="text-2xl md:text-3xl text-center text-primary font-style text-gray-800 mt-14 mb-5">
                    The Corporate Space and Luxurious Living
                </h2>
                <p className="text-lg text-center text-gray-600 mb-6 font-primary">
                    Our latest project, The Corporate Space and Luxurious Living, is a testament to our dedication to excellence. We're excited to offer a new level of luxury living in Ahmedabad with state-of-the-art facilities, world-class amenities, and stunning architectural design.
                </p>
                <p className="text-lg text-center text-gray-600 mb-6 font-primary">
                    Our commitment to our clients is evident in every detail of this project, from the impressive entrance to the luxurious interiors. We're passionate about providing the best possible living experience for our clients, and we're confident that our latest project will exceed their expectations.
                </p>
                <p className="text-lg text-center mb-6 font-primary">
                    We're proud to set the bar high for construction companies in Ahmedabad, inspiring others to aim for greatness and always strive for excellence.
                </p>
            </div>

            <div className="max-w-[1000px] mx-auto px-4 mb-20 md:px-6 lg:px-8 text font-primary">
                <h1 className="text-3xl md:text-5xl text-center text-primary font-style text-gray-800 mb-5 md:mb-10">
                    Visit Our Office
                </h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14684.99616276178!2d72.4998164!3d23.0513296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b98d8b3ca05%3A0xcd5408ab37917bd0!2sZADE%20CORPORATE%20CAMPUS!5e0!3m2!1sen!2sin!4v1690098823012!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" title='Zade group office' className='mx-auto shadow-sm' ></iframe>
            </div>

            <Contact />
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />
        </div>
    )
}

export default About