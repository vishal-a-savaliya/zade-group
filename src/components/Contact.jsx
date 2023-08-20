import { useState } from 'react'
import { motion } from 'framer-motion'

import contact_bg from '../image/contact_bg.jpg'
import avatar from '../image/Z GROUP LOGO_SQURE.png'



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
            address: "Corporate Campus, Nr. Baghban Circle, Zydus Hospital Rd, Thaltej, Ahmedabad, 380059",
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
        <div id='contact' className='flex flex-col md:flex-row justify-center items-center bg-gray bg-cover bg-center md:bg-opacity-50 py-10 md:py-20'
            style={{
                backgroundImage: `url(${contact_bg})`,
            }}>

            <div className='flex w-[90%] md:w-[85%] mt-10 flex-col justify-center mx-auto md:flex-row'>
                <div className='md:w-[40%] pl-4 md:pl-0 font-primary md:pr-14'>

                    <motion.h1
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        initial={{ opacity: 0, x: -20 }}

                        className='text-2xl font-semi text-black bold font-style'>GET IN TOUCH</motion.h1>

                    <motion.p
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        className='pt-6 text-graytext font-primary'>We’d love to share more with you about {Details[page].projectName}. Please complete this form and our dedicated team will get back to you shortly.</motion.p>

                    <motion.div

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

                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        className='flex flex-col pt-4'>


                        {
                            Details[page]["contact"].map((contact, index) => {
                                return (

                                    <span key={index} className={`flex items-center pb-1 ${index === 0 ? 'pt-3' : 'pt-1'}`}>

                                        <a href={`tel:${contact}`} className='font-primary'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-primary">
                                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                                            </svg>
                                        </a>

                                        <a href={`tel:${contact}`} className='ml-4 font-primary'>{contact}</a>
                                    </span>

                                )
                            })
                        }


                        <span className='flex items-center py-1'>

                            <a href={`mailto:${Details[page]["email"]}`} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-primary">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </a>

                            <a href={`mailto:${Details[page]["email"]}`} className='ml-4 font-primary' >{Details[page]["email"]}</a>

                        </span>
                        <span className='flex items-start py-1'>

                            <a href={`${Details[page]["location"]}`} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-primary">
                                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>

                            </a>


                            <a href={`${Details[page]["location"]}`} className='mx-4 font-primary' >{Details[page]["address"]}</a>

                        </span>

                    </motion.div>


                </div>

                <div className='md:w-[60%] shadow-md mt-10 md:mt-0'>

                    <div className='bg-white flex justify-between flex-col flex-wrap px-10 py-14 h-[100%]'>

                        <h1 className='text-xl font-bold font-primary text-primary pb-5 uppercase'>Inquire</h1>

                        {/* form section */}
                        <form onSubmit={(e) => { HandleFormSubmit(e) }}>

                            <div className="hidden w-full md:flex md:items-baseline mb-4 flex-col md:flex-row">

                                <input type="text" id="name" name="name" placeholder='Full Name' autocomplete="off" className="input" required value={data.name} onChange={handleChange} />

                                <input type="text" id="phone" name="phone" placeholder='Phone number' autocomplete="off" className="input ml-4" value={data.phone} onChange={handleChange} required />

                            </div>

                            <div className="md:hidden w-full flex md:items-baseline mb-4 flex-col md:flex-row">

                                <input type="text" id="name" name="name" placeholder='Full Name' autocomplete="off" className="input" required value={data.name} onChange={handleChange} />

                            </div>

                            <div className="w-full md:hidden flex md:items-baseline mb-4 flex-col md:flex-row">

                                <input type="text" id="phone" name="phone" placeholder='Phone number' autocomplete="off" className="input" value={data.phone} onChange={handleChange} required />

                            </div>

                            <div className="w-full flex md:items-baseline mb-4 flex-col md:flex-row">

                                <input type="email" id="email" name="email" placeholder='Email Address' autocomplete="off" className="input" value={data.email} onChange={handleChange} />

                            </div>

                            <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                <textarea id="message" name="message" placeholder='Message' autocomplete="off" className="input" defaultValue={""} value={data.message} onChange={handleChange} required />

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