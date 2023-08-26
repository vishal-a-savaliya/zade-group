import { useState, useEffect } from 'react'
import ZLUXURIA_BROCHURE from '../Brochure/Z_LUXURIA_BROCHURE.pdf';
import Z2 from '../Brochure/Z2_BROCHURE.pdf';

function Brochure({ DBVisible, setDBVisible, Page }) {

    // console.log(DBVisible)


    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [success, setsuccess] = useState(false);

    const details = {
        z2: {
            filePath: Z2,
            fileName: "Z2 Brochure",
        },
        zluxuria: {
            filePath: ZLUXURIA_BROCHURE,
            fileName: "Z Luxuria Brochure",
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
                fetch(`https://formsubmit.co/ajax/info@zadegroup.in`, {
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
                setErrorMessage('An error occurred while submitting the form.');
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

                {!success && <p className='-mt-5 mb-5'>Please fill up the details in the form below,<br />
                    We shall email you the brochure and Details to your registered Email address.
                </p>}


                {
                    success ? <object
                        data={details[Page].filePath}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        className='-mt-5 w-full h-full'
                        title={details[Page].fileName}
                    >
                        {/* <iframe
                            src={`${details[Page].filePath}#zoom=100`}
                            title={details[Page].fileName}
                            width="100%"
                            height="100vh"
                        > */}
                        <p>This browser does not support PDFs. Please download the PDF to view it.</p>
                        {/* </iframe> */}
                    </object> : <div className='flex justify-center items-center'>
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
                                    {submitting ? "Loading..." : "Get Brochure"}
                                </button>
                            </div>
                            <div className="w-full flex mb-4 md:items-baseline flex-col">
                                {errors.email && <div className="text-red-500 flex">{errors.email}</div>}
                                {errors.mobile && <div className="text-red-500 flex">{errors.mobile}</div>}
                                {successMessage && <div className="text-primary flex">{successMessage}</div>}
                            </div>
                        </form>

                    </div>
                }


            </div>
        </div>
    )
}

export default Brochure