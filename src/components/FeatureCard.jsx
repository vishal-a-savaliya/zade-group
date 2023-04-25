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
        <div className="w-[23%] bg-secondary h-[320px] shadow-sm flex flex-col justify-center items-center hover:bg-opacity-70 transition duration-500 ease-in-out transform">

            <div className="h-[60%] flex justify-end items-end">
                <img src={SVG} className='fill-primary w-44 -mb-8' alt='icon' />
                {/* {SVG} */}
            </div>

            <div className="h-[40%] px-10 py-5">
                <motion.h1
                    variants={animate}
                    className="text-2xl text-white font-primary"
                >{Text}</motion.h1>
            </div>

        </div>
    )
}

export default FeatureCard