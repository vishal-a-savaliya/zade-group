import React from 'react'
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import logo from '../image/Z GROUP LOGO_SQURE.png';
// import { Link } from 'react-router-dom'

import bg from '../image/concrete-wall.avif';

function About() {
    return (
        <div>
            <div
                className="bg-cover bg-center h-screen w-full relative"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>
                {/* <Navbar /> */}
                <div className="h-full flex flex-col pt-20 items-center text-center text-white">
                    <img src={logo} alt='ZADE GROUP LOGO' className='w-[250px] h-auto' />
                    <h1 className="text-6xl font-bold text-secondary py-6 mb-4">
                        ZADE GROUP
                    </h1>
                    <h1 className='mx-10 pb-10 text-4xl text-center font-bold text-secondary'>About</h1>
                    {/* <button className="px-6 py-3 bg-primary font-semibold uppercase tracking-wide">
            Get Started
          </button> */}
                </div>


            </div>

            <div className="max-w-5xl mx-auto px-4 my-14 mb-20 md:px-6 lg:px-8">
                <h1 className="text-3xl text-primary font-bold text-gray-800 mb-4">
                    About zade group
                </h1>
                <p className="text-lg font-semibold text-gray-600 mb-6">
                    At Zade Group, we've been providing top-quality construction services in Ahmedabad for over a decade. Our reputation has been built on our commitment to delivering exceptional projects that surpass our clients' expectations.
                </p>
                <p className="text-lg font-semibold text-gray-600 mb-6">
                    We take pride in everything we do, from using the finest materials to paying close attention to detail in every aspect of our projects. Our team of highly skilled professionals has earned us a reputation as a trusted name in the construction industry, known for our innovative designs and exceptional craftsmanship.
                </p>
                <h2 className="text-2xl text-primary font-bold text-gray-800 mb-4">
                    The Corporate Space and Luxurious Living
                </h2>
                <p className="text-lg font-semibold text-gray-600 mb-6">
                    Our latest project, The Corporate Space and Luxurious Living, is a testament to our dedication to excellence. We're excited to offer a new level of luxury living in Ahmedabad with state-of-the-art facilities, world-class amenities, and stunning architectural design.
                </p>
                <p className="text-lg font-semibold text-gray-600 mb-6">
                    Our commitment to our clients is evident in every detail of this project, from the impressive entrance to the luxurious interiors. We're passionate about providing the best possible living experience for our clients, and we're confident that our latest project will exceed their expectations.
                </p>
                <p className="text-lg font-semibold mb-6">
                    We're proud to set the bar high for construction companies in Ahmedabad, inspiring others to aim for greatness and always strive for excellence.
                </p>
            </div>

            <Contact />
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />
        </div>
    )
}

export default About