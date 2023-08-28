import React, { useRef, useEffect, useState, useCallback } from 'react';



function FullScreenImage({ image, index, onClose }) {

    const [current, setCurrent] = useState(index);
    // image slides

    const prevSlide = () => {
        setCurrent(current === 0 ? image.length - 1 : current - 1);
    };

    const nextSlide = useCallback(() => {
        setCurrent(current === image.length - 1 ? 0 : current + 1);
    }, [current, image.length]);

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

    return (


        <div className="fixed inset-0 flex justify-center items-center bg-[#000] z-50" onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>

            {/* Left Image */}
            <div className='w-[20%] h-[350px] md:h-[100vh] overflow-hidden mr-10 py-24 opacity-70'
            >
                <img src={image[(current - 1 + image.length) % image.length]} className='object-cover min-w-full h-full' alt="Left" />
            </div>

            {/* Center Image */}
            <div className='w-[60%] h-[350px] md:h-[100vh] py-14'>
                <img src={image[current % image.length]} className='object-cover w-full h-full' alt="Center" />
            </div>

            {/* Right Image */}
            <div className='w-[20%] h-[350px] md:h-[100vh] overflow-hidden ml-10 py-24 opacity-70'>
                <img src={image[(current + 1) % image.length]} className='object-cover min-w-full h-full' alt="Right" />
            </div>

            <div className="absolute top-4 left-2 md:left-auto md:top-10 md:right-10 md:z-40" >
                <button className="p-3 md:p-10 rounded-full border border-primary hover:border-white transition duration-500 ease-in-out focus:outline-none" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} className="hidden md:block w-8 h-8 stroke-primary hover:stroke-white transition duration-500 ease-in-out">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} className="w-8 h-8 stroke-primary hover:stroke-white transition duration-500 ease-in-out md:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>

            <div className="hidden md:block absolute md:top-1/2 transform -translate-y-1/2 left-0 md:z-30">
                <button className="ml-3 p-5 rounded-full border border-primary hover:border-white transition duration-500 ease-in-out absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </button>
            </div>

            {/* <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-40"></div> */}

            <div className="hidden md:block absolute md:top-1/2 transform -translate-y-1/2 right-0 z-30">
                <button className="mr-3 p-5 rounded-full border border-primary hover:border-white transition duration-500 ease-in-out absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:z-30">
                {image.map((_, index) => (
                    <button key={index} className={`h-3 w-3 rounded-full ${index === current ? 'bg-white' : 'bg-[#FFFFFF33]'}`} onClick={() => setCurrent(index)}></button>
                ))}
            </div>
        </div>

    );
}

function ImageSlider({ images, width = 600, height = 450 }) {
    const startDivRef = useRef(0);
    const [scrollAmount, setScrollAmount] = useState(0);
    const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const startDivPosition = startDivRef.current ? startDivRef.current.offsetTop : 0;
            const scrollPosition = window.scrollY - startDivPosition + 350;
            setScrollAmount(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openFullScreenImage = (index) => {
        setFullscreenImageIndex(index);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when in fullscreen mode
    };

    const closeFullScreenImage = () => {
        setFullscreenImageIndex(null);
        document.body.style.overflow = 'auto'; // Restore scrolling when exiting fullscreen mode
    };





    return (
        <>
            <div
                className="w-full h-full flex justify-center items-center md:my-14 overflow-hidden"
                ref={startDivRef}
            >
                <div
                    className="flex w-full h-full transition-transform duration-400 ease-out"
                    style={{ transform: `translateX(-${scrollAmount}px)` }}

                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`zade group slider ${index + 1}`}
                            className="md:w-[600px] md:h-[400px] object-cover mx-3 "
                            onClick={() => openFullScreenImage(index)}
                        />
                    ))}
                </div>
            </div>
            {fullscreenImageIndex !== null && (
                <FullScreenImage
                    image={images}
                    index={fullscreenImageIndex}
                    onClose={closeFullScreenImage}
                />
            )}
        </>
    );
}

export default ImageSlider;











// import React, { useRef, useEffect, useState } from 'react';

// function ImageSlider({ images, width = 600, height = 450 }) {

//     const startDivRef = useRef(0);
//     const [scrollAmount, setScrollAmount] = useState();

//     useEffect(() => {
//         const handleScroll = () => {
//             const startDivPosition = startDivRef.current ? startDivRef.current.offsetTop : 0;
//             const scrollPosition = window.scrollY - startDivPosition + 350;
//             console.log('Scroll Amount:', scrollPosition);
//             setScrollAmount(scrollPosition)
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);



//     return (
//         <div
//             className="w-full h-full flex justify-center items-center md:my-14 overflow-hidden"
//             ref={startDivRef}
//         >
//             <div
//                 className="flex w-full h-full transition-transform duration-400 ease-out"
//                 style={{ transform: `translateX(-${scrollAmount}px)` }}
//             >
//                 {images.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`zade group slider ${index + 1}`}
//                         className={`md:w-[600px] md:h-[400px] object-cover mx-3`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ImageSlider;









// ---------------------------- With Mouse Movement ------------------




// import React, { useRef, useEffect, useState } from 'react';

// function ImageSlider({ images, width = 450, height }) {
//     const startDivRef = useRef(0);
//     const [scrollAmount, setScrollAmount] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const startDivPosition = startDivRef.current.offsetTop;
//             const scrollPosition = window.scrollY - startDivPosition + 550;
//             setScrollAmount(scrollPosition);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleMouseEnter = () => {
//         window.addEventListener('mousemove', handleMouseMove);
//     };

//     const handleMouseLeave = () => {
//         window.removeEventListener('mousemove', handleMouseMove);
//     };

//     const handleMouseMove = (e) => {
//         const mouseX = e.clientX;

//         setScrollAmount(scrollAmount + mouseX);
//     };

//     return (
//         <div
//             className="w-full h-full flex items-center my-14 overflow-hidden"
//             ref={startDivRef}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             <div
//                 className="flex w-full h-full transition-transform duration-300 ease-out"
//                 style={{ transform: `translateX(-${scrollAmount}px)` }}
//             >
//                 {images.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Image ${index + 1}`}
//                         className={`w-[${width}px] h-[${height}px] object-cover mx-3`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ImageSlider;




