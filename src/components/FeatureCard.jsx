import React from 'react';
import { motion } from 'framer-motion'

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

function FeatureCard({ SVG, Text }) {
    return (
        <div className="w-[250px] mr-8 md:mr-0 md:w-[25%] bg-white h-[320px] shadow-sm flex flex-col justify-center items-center transition duration-500 ease-in-out transform">

            <div className="h-[60%] flex justify-end items-end">
                <motion.img
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        delay: 0.2,
                    }}
                    initial={{ opacity: 0, y: 10 }} src={SVG} className='fill-primary w-44 -mb-8' alt='icon' />
                {/* {SVG} */}
            </div>

            <div className="h-[40%] px-10 py-5">
                <motion.h1
                    variants={animate}
                    className="text-3xl font-semibold text-center text-textBlackDark font-primary"
                >{Text}</motion.h1>
            </div>

        </div>
    )
}

export default FeatureCard