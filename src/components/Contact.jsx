import { useState } from 'react'
import { motion } from 'framer-motion'

import contact_bg from '../image/contact_bg.jpg'
// import avatar from '../image/Z GROUP LOGO_SQURE.png'



function Contact({ page = "home", Subject }) {


    const [data, setData] = useState({
        "subject": Subject,
        "name": "",
        "email": "",
        "phone": "",
        "message": ""
    })

    const Details = {
        z2: {
            projectName: "Z2",
            email: "sales@zadegroup.in",
            contact: ["7573030027"],
            location: "https://goo.gl/maps/BK2JuYFx4JkdacXRA",
            address: "Z2, Opp Baghbaan party plot, Zydus Hospital Rd, Thaltej, Ahmedabad, Gujarat 380059",
        },
        zluxuria: {
            projectName: "Z Luxuria",
            email: "sales@zadegroup.in",
            contact: ["7573030028"],
            location: "https://goo.gl/maps/Zsd2pVJPmeursQRY9",
            address: "Z Luxuria, Zydus Hospital Rd, Thaltej, Ahmedabad, Gujarat 380059",
        },
        home: {
            projectName: "Zade Group",
            email: "sales@zadegroup.in",
            contact: ["7573030027", "7573030028"],
            // contact: ["079 3533 8343", "7435828384"],
            location: "https://goo.gl/maps/4y4iq9cLUZpNLQnL8",
            address: "Corporate Campus, Nr. Baghban Party Plot, Zydus Hospital Rd, Thaltej, Ahmedabad, 380059",
        }
    }



    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
        // console.log(data)
    };

    const Email = Details[page].email;


    const HandleFormSubmit = (e) => {

        e.preventDefault();

        setSubmitting(true);

        fetch(`https://formsubmit.co/ajax/${Email}`, {
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
                setTimeout(() => { setSuccessMessage(null) }, 10000)
                setData({
                    "subject": Subject,
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
                setSubmitting(false);
            })
            .catch(error => {
                console.log(error);
                setSubmitting(false);
                setErrorMessage('An error occurred while submitting the form.');
            }
            );
    }

    // console.log(Details[page]["contact"])

    return (
        <div id='contact' className='flex flex-col md:flex-row justify-center items-center bg-gray bg-cover bg-center md:bg-opacity-50 py-10 pb-20 md:py-20'
            style={{
                backgroundImage: `url(${contact_bg})`,
            }}
        >

            <div className='flex w-[90%] md:w-[85%] mt-10 flex-col justify-center mx-auto md:flex-row'>
                <div className='md:w-[40%] pl-4 md:pl-0 font-primary md:pr-14'>

                    <motion.h2
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        initial={{ opacity: 0, x: -20 }}

                        className='text-4xl font-semibold primaryBlack'>Invest in your future.<br /> <span className='text-gold font-primary'>Let's talk!</span></motion.h2>

                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        className='py-7 text-textBlackLight'>We’d love to share more with you about {Details[page].projectName}. Please complete this form and our dedicated team will get back to you shortly.</motion.p>

                    {/* <motion.div

                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        className='py-2 border-b border-[#e6e6e6] pt-4'>
                        <h1 className='text-primary font-bold text-sm'>CONTACT THE EXECUTIVE</h1>

                        <div className='flex items-center py-6'>
                            <img src={avatar} className='w-16 rounded-full bg-white' alt='Zade Group' />
                            <div className='ml-6'>
                                <p className='font-style text-2xl text-secondary uppercase'>Dhruv Udani</p>
                                <p className='font-primary text-xs text-graytext font-bold uppercase pt-1'>Sales Executive</p>
                            </div>
                        </div>

                    </motion.div> */}

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        className='flex flex-col'>

                        <span className='flex items-start py-2'>

                            <a href={`${Details[page]["location"]}`} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 h-8 stroke-gold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                            </a>


                            <a href={`${Details[page]["location"]}`} className='mx-4 hover:text-gold' >{Details[page]["address"]}</a>

                        </span>




                        <span className={`flex items-center py-3`}>

                            <a href={`tel:${Details[page]["contact"][0]}`} className='font-primary'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 h-8 stroke-gold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>


                            </a>

                            {Details[page]["contact"].map((contact, index) => {
                                return (
                                    <a key={index} href={`tel:${contact}`} className='ml-4 hover:text-gold'>
                                        {contact}
                                    </a>
                                )
                            })}
                        </span>


                        <span className='flex items-center py-3'>

                            <a href={`mailto:${Details[page]["email"]}`} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 h-8 stroke-gold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                            </a>

                            <a href={`mailto:${Details[page]["email"]}`} className='ml-4 hover:text-gold' >{Details[page]["email"]}</a>

                        </span>


                    </motion.div>


                </div>

                <div className='md:w-[60%] shadow-md mt-10 md:mt-0'>

                    <div className='bg-white flex justify-between flex-col flex-wrap px-10 py-14 h-[100%]'>

                        <h1 className='text-xl font-bold font-primary text-primary pb-5 uppercase'>Inquire</h1>

                        {/* form section */}
                        <form onSubmit={(e) => { HandleFormSubmit(e) }}>

                            <div className="hidden w-full md:flex md:items-baseline mb-4 flex-col md:flex-row">

                                <input type="text" id="name" name="name" placeholder='Full Name' autoComplete="off" className="input" required value={data.name} onChange={handleChange} />

                                <input type="text" id="phone" name="phone" placeholder='Phone number' autoComplete="off" className="input ml-4" value={data.phone} onChange={handleChange} required />

                            </div>

                            <div className="md:hidden w-full flex md:items-baseline mb-4 flex-col md:flex-row">

                                <input type="text" id="name" name="name" placeholder='Full Name' autoComplete="off" className="input" required value={data.name} onChange={handleChange} />

                            </div>

                            <div className="w-full md:hidden flex md:items-baseline mb-4 flex-col md:flex-row">

                                <input type="text" id="phone" name="phone" placeholder='Phone number' autoComplete="off" className="input" value={data.phone} onChange={handleChange} required />

                            </div>

                            <div className="w-full flex md:items-baseline mb-4 flex-col md:flex-row">

                                <input type="email" id="email" name="email" placeholder='Email Address' autoComplete="off" className="input" value={data.email} onChange={handleChange} />

                            </div>

                            <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                <textarea id="message" name="message" placeholder='Message' autoComplete="off" className="input" value={data.message} onChange={handleChange} required />

                            </div>

                            <div className="w-full flex mb-4 md:items-baseline flex-col md:flex-row">

                                <button type="submit" className="text-white bg-black flex items-center shadow-sm justify-around border-0 py-2 px-6 w-full focus:outline-none hover:bg-primary font-primary uppercase " >

                                    {submitting ? "Submitting..." : "submit"}

                                </button>

                            </div>

                            <div className="w-full flex mb-4 md:items-baseline flex-col md:flex-row">
                                {successMessage && <div className="text-black font-style">{successMessage}</div>}
                                {errorMessage && <div className="text-black font-style">{errorMessage}</div>}
                            </div>



                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact