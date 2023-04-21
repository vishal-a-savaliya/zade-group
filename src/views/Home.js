import { motion } from "framer-motion"

// import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import About from '../views/About'
import logo from '../image/Z GROUP LOGO.svg';
import logo_z from '../image/Z GROUP LOGO_SQURE.png';
import { Link } from 'react-router-dom'

import bg from '../image/concrete-wall.avif';
// import bg from './image/hero.png';
// import bg from './image/wall.jpg';


import Z2 from '../image/cam_12-removebg.png'
import ZLuxuriya from '../image/Cam_1_M-transformed-removebg.png'
import InitialTransition from "../components/InitialTransition";


// import Z2 from './image/cam_12.jpg'
// import ZLuxuriya from './image/Cam_1_M.jpg'

// import Z2 from '../image/Zluxura_sketch-no-bg.png'
// import ZLuxuriya from '../image/Zluxura_sketch-no-bg.png'

function Home() {
    return (

        <motion.div exit={{ opacity: 0 }}>

            <InitialTransition />

            <div
                className="bg-cover bg-center h-screen w-full"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>
                {/* <Navbar /> */}
                <div className="h-full flex flex-col justify-center items-center">

                    <div className='flex flex-row justify-center items-center -mt-20'>
                        <img src={logo} alt='ZADE GROUP LOGO' className='w-[450px] h-auto' />
                        {/* <h1 className="text-6xl font-branding font-bold text-secondary py-6 mb-4">
                            ZADE GROUP
                        </h1> */}
                    </div>

                    <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-branding'>Presenting Soon</h1>
                    {/* <button className="px-6 py-3 bg-primary font-semibold uppercase tracking-wide">
            Get Started
          </button> */}
                </div>


            </div>

            <div className='flex flex-col mb-7 md:flex-row justify-center md:relative md:-top-36 md:-mb-14'>

                <Link to={"/corporate-space"}>

                    <div className='w-[350px] mx-auto md:mx-0 md:mr-5  flex flex-col justify-end hover:cursor-pointer'>
                        <div className='bg-cover bg-center w-full h-[450px] ' style={{
                            backgroundImage: `url(${Z2})`,
                        }}>

                        </div>
                        <div className='py-4 px-6 shadow-b-sm'>
                            <h1 className='text-primary text-center text-2xl font-semibold  py-1'>Corporate Space</h1>
                            {/* <p className='text-secondary py-1'>Construction of houses  with a long term guarantee.</p> */}
                            {/* <button className='bg-gray px-4 py-1 font-semibold text-black mt-2 mb-2 w-full'>Explore</button> */}
                        </div>

                    </div>

                </Link>



                <Link to={"/luxurious-living"}>


                    <div className='w-[350px] mx-auto md:mx-0 md:ml-5  flex flex-col justify-end hover:cursor-pointer'>
                        <div className='bg-cover bg-center w-full h-[450px] ' style={{
                            backgroundImage: `url(${ZLuxuriya})`,
                        }}>

                        </div>
                        <div className='py-4 px-6'>
                            <h1 className='text-primary text-center text-2xl font-semibold  py-1'>Luxurious living</h1>
                            {/* <p className='text-secondary py-1'>Construction of houses  with a long term guarantee.</p> */}
                            {/* <h3 className="text-primary font-semibold">Explore</h3> */}
                            {/* <button className='bg-gray px-4 py-1 font-semibold text-black mt-2 mb-2 w-full'>Explore</button> */}
                        </div>

                    </div>

                </Link>


            </div>

            <div className="px-4 py-14 pb-20 md:px-6 lg:px-8 bg-secondary">

                <div className='w-[85%] mx-auto py-14'>

                    <div className='flex'>

                        <div className='w-1/2 flex justify-center items-center'>
                            <img src={logo_z} alt='ZADE GROUP LOGO' className='w-[250px] h-auto' />
                        </div>
                        <div className='w-1/2'>
                            <h1 className="text-4xl font-heading  text-primary font-semibold pb-10">
                                About zade group
                            </h1>
                            <p className="text  text-white mb-6">
                                At Zade Group, we've been providing top-quality construction services in Ahmedabad for over a decade. Our reputation has been built on our commitment to delivering exceptional projects that surpass our clients' expectations.
                            </p>
                            <p className="text text-white mb-6">
                                We take pride in everything we do, from using the finest materials to paying close attention to detail in every aspect of our projects. Our team of highly skilled professionals has earned us a reputation as a trusted name in the construction industry, known for our innovative designs and exceptional craftsmanship.
                            </p>
                            {/* <h2 className="text-2xl text-primary font-bold text-gray-800 mb-4">
                                The Corporate Space and Luxurious Living
                            </h2>
                            <p className="text text-white mb-6">
                                Our latest project, The Corporate Space and Luxurious Living, is a testament to our dedication to excellence. We're excited to offer a new level of luxury living in Ahmedabad with state-of-the-art facilities, world-class amenities, and stunning architectural design.
                            </p>
                            <p className="text text-white mb-6">
                                Our commitment to our clients is evident in every detail of this project, from the impressive entrance to the luxurious interiors. We're passionate about providing the best possible living experience for our clients, and we're confident that our latest project will exceed their expectations.
                            </p> */}
                            <p className="text text-white mb-6">
                                We're proud to set the bar high for construction companies in Ahmedabad, inspiring others to aim for greatness and always strive for excellence.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <Contact />
            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />

        </motion.div>
    );
}

export default Home;
