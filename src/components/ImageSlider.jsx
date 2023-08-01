import React, { useRef, useEffect, useState } from 'react';

function FullScreenImage({ image, onClose }) {
    return (
        <div
            className="fixed inset-0 flex justify-center items-center bg-black z-50"
            onClick={onClose}
        >
            <img
                src={image}
                alt="Full Screen view"
                className="max-h-full max-w-full px-4 md:px-0 md:py-14 z-50"
            />
            <button
                className="absolute top-0 right-0 m-4 text-white text-xl"
                onClick={onClose}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>
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
                    image={images[fullscreenImageIndex]}
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




