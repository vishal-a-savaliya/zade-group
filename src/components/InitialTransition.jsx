import { motion } from 'framer-motion'

const blackBox = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 3,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 2,
            when: "afterChildren",
        },
    },
};

const pathVariants = {
    initial: {
        opacity: 0,
        pathLength: 0,

    },
    animate: {
        opacity: 1,
        pathLength: 1,
        transition: {
            fill: "#CCA34B",
            duration: 3,
            ease: "easeInOut"
        },
    },
};




const InitialTransition = () => {
    return (
        // <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
            className="absolute z-10 flex items-center justify-center w-full bg-secondary"
            initial="initial"
            animate="animate"
            variants={blackBox}
        >
            <motion.svg variants={textContainer} className="absolute flex" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="200px" viewBox="0 0 747 742" enable-background="new 0 0 747 742">

                <motion.path stroke="#CCA34B" stroke-width="4" variants={pathVariants}
                    d="M1.000000,372.333313 
	C1.000000,373.555542 1.000000,373.111115 1.000000,372.333313 
	C4.068027,375.578461 2.420917,374.902435 0.999996,374.000000 
	C113.407883,372.000000 225.815765,372.000000 338.240509,372.000000 
	C282.615448,427.667755 227.216537,483.109161 171.817642,538.550537 
	C172.030334,538.962952 172.243042,539.375366 172.455734,539.787781 
	C306.393921,539.787781 440.332092,539.787781 574.270264,539.787781 
	C574.536987,540.232544 574.803711,540.677307 575.070435,541.122009 
	C573.609314,542.351624 572.047241,543.480225 570.701599,544.825378 
	C506.121094,609.377686 441.558258,673.947754 377.003174,738.525513 
	C375.715851,739.813416 374.543945,741.216675 373.659058,742.783020 
	C372.933319,743.000000 371.866669,743.000000 370.751892,742.793335 
	C369.489960,741.231262 368.337585,739.814453 367.053314,738.529419 
	C317.483246,688.932251 267.903046,639.345215 218.320175,589.760803 
	C147.302704,518.741333 76.285782,447.721222 5.230417,376.739655 
z"/>
                <motion.path stroke="#CCA34B" stroke-width="4" variants={pathVariants}

                    d="
M373.599976,1.000006 
	C371.066681,1.000000 372.133331,1.000000 373.599976,1.000006 
	C374.923340,2.422470 375.628540,4.062927 376.801147,5.236348 
	C470.552124,99.056435 564.336975,192.842621 658.125854,286.624847 
	C686.280579,314.777618 714.453918,342.911835 743.164673,371.600067 
	C630.551758,371.600067 518.629700,371.600067 406.722504,371.600067 
	C462.188751,316.156891 517.621033,260.747681 574.100220,204.291962 
	C438.482941,204.291962 304.488983,204.291962 168.912140,204.291962 
	C171.001724,201.898178 172.114426,200.461670 173.388809,199.186813 
	C235.822449,136.730637 298.273438,74.291855 360.706451,11.835106 
	C364.109039,8.431236 367.374603,4.890403 370.351990,1.206669 
z"/>

            </motion.svg>
        </motion.div>
        // </div>
    );
};

export default InitialTransition;