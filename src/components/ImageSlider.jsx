import { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [sliderInView, setSliderInView] = useState(false);

    useEffect(() => {
        const slider = document.getElementById("slider");

        const handleScroll = () => {
            if (slider) {
                const rect = slider.getBoundingClientRect();
                const visible =
                    rect.top <= window.innerHeight && rect.bottom >= 0;

                setSliderInView(visible);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handlePrev = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };

    const handleNext = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };

    return (
        <div id="slider" className="mx-auto mt-8 relative overflow-hidden">
            {sliderInView && (
                <>
                    <div
                        className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white to-transparent"
                        onClick={handlePrev}
                    ></div>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white to-transparent"
                        onClick={handleNext}
                    ></div>
                </>
            )}
            <div
                className="w-full h-64 bg-no-repeat bg-cover bg-center transform transition-all duration-500 ease-in-out"
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    marginLeft: `-${currentImage * 100}%`,
                }}
            ></div>
        </div>
    );
};

export default ImageSlider;
