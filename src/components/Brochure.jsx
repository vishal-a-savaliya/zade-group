import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


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

function Brochure({ DBVisible, setDBVisible, Page }) {

    // console.log(DBVisible)


    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [success, setsuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const details = {
        z2: {
            fileName: "Z2 Brochure",
            ID: "1sGUuKkQQZr5fyAE5nKIZ2NLOThEwbbmq"
        },
        zluxuria: {
            fileName: "Z Luxuria Brochure",
            ID: "1INHaLsrlozei8DZtD6K6cbSN8VVvnzBc"
        }
    }

    const handelBack = () => {
        setDBVisible(false);
        document.body.style.overflow = 'auto';
    }

    useEffect(() => {
        // Disable scrolling on the body
        setData({
            name: '',
            email: '',
            mobile: '',
            page: Page
        });
    }, [Page])



    // ---------------------------- form data handling --------------------

    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        MailFor: details[Page].fileName
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({ ...prevState, [name]: value }));
    }

    const validate = () => {
        let isValid = true;
        let errors = {};

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(data.email)) {
            isValid = false;
            errors.email = "Please enter a valid email.";
        }

        const mobileRegex = /^[0-9]{10}$/; // Adjust this regex if needed, assuming 10 digit mobile number
        if (!mobileRegex.test(data.mobile)) {
            isValid = false;
            errors.mobile = "Please enter a valid mobile number.";
        }

        setErrors(errors);
        return isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {

            setSubmitting(true);
            console.log(data)
            try {
                fetch(`https://formsubmit.co/ajax/sales@zadegroup.in`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data);
                        setSuccessMessage('Thank you for submitting! We will be in touch with you soon.');
                        setsuccess(true)
                        setTimeout(() => { setSuccessMessage(null) }, 5000)
                        setData({
                            name: '',
                            email: '',
                            mobile: '',
                            page: Page
                        });
                        setSubmitting(false);
                    })
            } catch (error) {
                console.error('Error:', error);
                setSubmitting(false);
                setSuccessMessage('An error occurred while submitting the form.');
                setTimeout(() => { setSuccessMessage(null) }, 5000)
            }
        }
    }



    // ------------------------------ show/hide ----------------------------------

    if (!DBVisible) {
        return;
    }

    return (
        <div className='fixed bottom-0 left-0 right-0 top-0 w-full h-full z-50 bg-white overflow-hidden'>
            <div className={`w-[85%] ${success ? 'w-[90%]' : 'md:w-[550px]'} h-[100vh] flex flex-col mx-auto justify-center`}>

                <div className='flex items-center mb-5'>

                    <div>

                        <button className="p-4 rounded-full border max-w-fit max-h-fit border-primary hover:border-black transition duration-500 ease-in-out focus:outline-none" onClick={() => { handelBack() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>

                        </button>

                    </div>

                    <h2 className='text-[3rem] md:text-[5rem] text-primary font-script pl-3 md:pl-7'>Download Brochure</h2>
                </div>

                {
                    success ?
                        <div className='flex w-full h-full justify-center items-center'>
                            {isLoading && <motion.svg className="" fill="#FFFFFF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="200px" viewBox="0 0 747 742">

                                <motion.path stroke="#CCA34B" strokeWidth="4" variants={pathVariants} initial="initial"
                                    animate="animate"
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
                                <motion.path stroke="#CCA34B" strokeWidth="4" variants={pathVariants} initial="initial"
                                    animate="animate"

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

                            </motion.svg>}

                            <div className='relative w-full h-full mb-3' style={{ display: isLoading ? 'none' : 'block' }}>
                                <a href={`https://drive.google.com/uc?export=download&id=${details[Page].ID}`} target="_blank" rel="noopener noreferrer" className='absolute  z-50 md:z-30 right-5 md:right-10 bottom-7 p-3 md:p-4 rounded-full border border-primary hover:border-primaryHover bg-blur-sm bg-opacity-75 transition duration-500 ease-in-out'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} fill='none' className="w-6 h-6 stroke-primary hover:stroke-primaryHover transition duration-500 ease-in-out">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </a>


                                <iframe
                                    src={`https://drive.google.com/file/d/${details[Page].ID}/preview`}
                                    width="100%"
                                    height="100%"
                                    title={details[Page].fileName}
                                    onLoad={() => setIsLoading(false)}
                                    className='rounded-md shadow-md mb-2'
                                ></iframe>

                            </div>

                        </div> :

                        <div>

                            <p className='-mt-5 mb-5'>Please fill up the details in the form below,<br />
                                We shall email you the brochure and Details to your registered Email address.
                            </p>

                            <div className='flex justify-center items-center'>
                                <form onSubmit={handleSubmit} className="w-full">
                                    <div className="w-full flex md:items-baseline mb-4 flex-col md:flex-row">
                                        <input type="text" id="name" name="name" placeholder='Name' autoComplete="off" className="input mb-2 md:mb-0" value={data.name} onChange={handleChange} />
                                    </div>
                                    <div className="w-full flex md:items-baseline mb-4 flex-col md:flex-row">
                                        <input type="email" id="email" name="email" placeholder='Email Address' autoComplete="off" className="input mb-2 md:mb-0" value={data.email} onChange={handleChange} />
                                    </div>
                                    <div className="w-full flex md:items-baseline mb-4 flex-col md:flex-row">
                                        <input type="text" id="mobile" name="mobile" placeholder='Mobile Number' autoComplete="off" className="input mb-2 md:mb-0" value={data.mobile} onChange={handleChange} />
                                    </div>


                                    <div className='my-3 mt-7'>
                                        <button type="submit" className="border-primary border rounded-full text-[#000] py-3 px-6 uppercase hover:bg-primaryHover hover:text-white transition duration-500 ease-in-out">
                                            {submitting ? "Brochure Is On The Way..." : "Get Brochure"}
                                        </button>
                                    </div>
                                    <div className="w-full flex mb-4 md:items-baseline flex-col">
                                        {errors.email && <div className="text-red-500 flex">{errors.email}</div>}
                                        {errors.mobile && <div className="text-red-500 flex">{errors.mobile}</div>}
                                        {successMessage && <div className="text-primary flex">{successMessage}</div>}
                                    </div>
                                </form>

                            </div>

                        </div>
                }


            </div>
        </div>
    )
}

export default Brochure