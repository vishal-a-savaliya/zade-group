import { useState } from 'react'

function Contact() {


    const [data, setData] = useState({
        "subject": "Message from zadegroup.in",
        "name": "",
        "email": "",
        "phone": "",
        "message": ""
    })

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


    const HandleFormSubmit = (e) => {

        e.preventDefault();

        setSubmitting(true);

        fetch("https://formsubmit.co/ajax/info@zadegroup.in", {
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
                    "subject": "Message from zadegroup.in",
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



    return (
        <div className='bg-gray pb-28'>

            <h1 className='text-5xl text-center font-bold text-primary pt-10 pb-14 '>Contact</h1>

            <div className='flex flex-col mx-3 justify-center md:flex-row md:mx-10'>
                <div className='mb-10 md:w-[55%] md:mr-5 md:mb-0'>

                    <div className='shadow-sm h-[500px] md:h-[100%]'>
                        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2489079259713!2d72.49520297340695!3d23.051334469202978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b98d8b3ca05%3A0xcd5408ab37917bd0!2sZADE%20CORPORATE%20CAMPUS!5e0!3m2!1sen!2sin!4v1681547635963!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

                <div className='md:w-[45%] md:ml-5'>

                    <div className='bg-secondary flex justify-between flex-col flex-wrap px-14 pb-5 h-[100%]'>

                        <h1 className='text-3xl font-bold text-white pt-10 pb-5'>Contact Us</h1>

                        {/* form section */}
                        <form onSubmit={(e) => { HandleFormSubmit(e) }}>

                            <input type="hidden" name="_subject" value="New submission At zadegroup.in Contact Form!" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                <input type="text" id="name" name="name" placeholder='Full Name' autocomplete="off" className="input" required value={data.name} onChange={handleChange} />

                            </div>

                            <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                <input type="email" id="email" name="email" placeholder='Email Address' autocomplete="off" className="input" value={data.email} onChange={handleChange} />

                            </div>

                            <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                <input type="text" id="phone" name="phone" placeholder='Phone number' autocomplete="off" className="input" value={data.phone} onChange={handleChange} required />

                            </div>

                            <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                <textarea id="message" name="message" placeholder='Message' autocomplete="off" className="input" defaultValue={""} value={data.message} onChange={handleChange} required />

                            </div>

                            <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                <button type="submit" className="text-white bg-primary flex items-center shadow-lg justify-around border-0 py-2 px-6  mt-4 w-[150px] focus:outline-none hover:bg-yellow-600  text-lg font-normal " >

                                    {submitting ? "sending..." : "send"}

                                </button>

                            </div>

                            <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">
                                {successMessage && <div className="text-white">{successMessage}</div>}
                                {errorMessage && <div className="text-white">{errorMessage}</div>}
                            </div>



                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact