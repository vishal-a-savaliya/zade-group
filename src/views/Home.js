// import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import logo from '../image/Z GROUP LOGO_SQURE.png';
import { Link } from 'react-router-dom'

import bg from '../image/concrete-wall.avif';
// import bg from './image/hero.png';
// import bg from './image/wall.jpg';


import Z2 from '../image/cam_12-removebg.png'
import ZLuxuriya from '../image/Cam_1_M-transformed-removebg.png'


// import Z2 from './image/cam_12.jpg'
// import ZLuxuriya from './image/Cam_1_M.jpg'

// import Z2 from './image/Z2_sketch_1.jpg'
// import ZLuxuriya from './image/Zluxura_sketch.jpeg'

function Home() {
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
                    <h1 className="text-6xl font-bold text-secondary py-6 mb-2">
                        ZADE GROUP
                    </h1>
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

            <Contact />
            <Footer phoneNumber={"7573030027-28"} Email={"sales@zadegroup.in"} />

        </div>
    );
}

export default Home;
