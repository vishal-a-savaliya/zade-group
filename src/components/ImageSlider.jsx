import React, { useRef, useEffect, useState } from 'react';

function ImageSlider({ images, width = 450, height }) {

    const startDivRef = useRef(0);
    const [scrollAmount, setScrollAmount] = useState();

    useEffect(() => {
        const handleScroll = () => {
            const startDivPosition = startDivRef.current ? startDivRef.current.offsetTop : 0;
            const scrollPosition = window.scrollY - startDivPosition + 550;
            console.log('Scroll Amount:', scrollPosition);
            setScrollAmount(scrollPosition)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div
            className="w-full h-full flex items-center my-14 overflow-hidden"
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
                        className={`md:w-[${600}px] md:h-[400px] object-cover mx-3`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;









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




