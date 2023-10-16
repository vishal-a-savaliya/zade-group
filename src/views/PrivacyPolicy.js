// src/PrivacyPolicy.js
import { useEffect } from 'react';
import { motion } from "framer-motion"
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


//images
import bg from '../image/hero_image.jpeg';

const PrivacyPolicy = () => {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    return (

        <div>

            <Navbar />

            <div className="relative h-[600px] md:h-screen">
                <div
                    className="bg-cover bg-center h-[600px] md:h-screen w-full absolute inset-0 bg-no-repeat md:bg-fixed"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}>
                    {/* <Navbar /> */}
                    <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                        <motion.div
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: 1,
                                // ease: [0.5, 0.71, 1, 1.5],
                            }}
                            initial={{ opacity: 0 }}
                            // whileHover={{ scale: 1.2 }}

                            className="h-full flex flex-col justify-center items-center">

                            <div className='flex flex-col justify-center items-center -mt-20'>

                                <h1 className='text-3xl mt-10 pt-10 pb-2 md:text-5xl text-center font-bold text-white font-style uppercase'>Privacy Policy</h1>
                                {/* <h1 className='text-3xl md:text-6xl text-center font-bold text-white font-style uppercase'>Build The Future</h1> */}
                                <p className="w-[90%] mx-auto pt-8 md:text-3xl text-white font-primary text-center py-4 font-medium">Transparency and Security at Zade Group, Your Privacy Matters to Us.</p>
                            </div>

                            {/* <h1 className='my-10 pt-10 text-4xl text-center font-bold text-secondary font-primary'>Presenting Soon</h1> */}

                        </motion.div>

                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center bg-gray-100 py-16">
                <div className="bg-white p-8 w-[85%]">
                    <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
                    <p className="mb-4">
                        Last Updated: 5 July 2023
                    </p>
                    <p className="mb-6">
                        Thank you for visiting ZADE INFRASPACE LLP's (hereinafter referred to as "Zade Group," "we," "us," or "our") construction website. We are committed to safeguarding the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us while using our website.
                    </p>
                    <p className="mb-6">
                        By accessing or using our website, you consent to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use our website.
                    </p>
                    <p className="mb-6 pt-5">
                        <strong>1. Information Collection and Use</strong>
                    </p>
                    <p className="mb-6">
                        1.1. <strong>Contact Form Data:</strong> When you voluntarily fill out and submit the contact form on our website, we collect the information you provide, such as your name, email address, and any other information you choose to share with us. We use this information solely for the purpose of addressing your inquiries and providing you with better services.
                    </p>
                    <p className="mb-6">
                        1.2. <strong>Cookies and Tracking Technologies:</strong> We do not use cookies or any other tracking technologies on our website. Hence, we do not collect any personally identifiable information automatically.
                    </p>
                    <p className="mb-6 pt-5">
                        <strong>2. Data Storage and Security</strong>
                    </p>
                    <p className="mb-6">
                        2.1. <strong>Data Retention:</strong> We do not retain any data submitted through the contact form. Once we have addressed your inquiry or provided necessary assistance, we delete the information provided.
                    </p>
                    <p className="mb-6">
                        2.2. <strong>Data Security:</strong> While we take reasonable measures to protect the information you provide us, please be aware that no method of transmission over the internet or electronic storage is entirely secure. Therefore, we cannot guarantee the absolute security of your data; any transmission is at your own risk.
                    </p>
                    <p className="mb-6 pt-5">
                        <strong>3. Third-Party Disclosure</strong>
                    </p>
                    <p className="mb-6">
                        3.1. <strong>Sharing Information:</strong> We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. However, we may share non-personally identifiable information (such as aggregated, anonymized data) with trusted partners to improve our website's performance or for statistical purposes.
                    </p>
                    <p className="mb-6">
                        3.2. <strong>Legal Requirements:</strong> We may disclose your information when required by law or in response to a valid legal request from authorities.
                    </p>
                    <p className="mb-6 pt-5">
                        <strong>4. Children's Privacy</strong>
                    </p>
                    <p className="mb-6">
                        Our website is not intended for children under the age of 13. We do not knowingly collect or solicit any personal information from children under 13. If you believe that a child under 13 may have provided us with personal information, please contact us at the email address mentioned below, and we will promptly delete that information.
                    </p>
                    <p className="mb-6 pt-5">
                        <strong>5. Changes to this Privacy Policy</strong>
                    </p>
                    <p className="mb-6">
                        We reserve the right to modify or update this Privacy Policy at any time without prior notice. Any changes made will be effective immediately upon posting the updated policy on this page. We encourage you to review this page periodically to stay informed about how we are protecting your information.
                    </p>
                    <p className="mb-6 pt-5">
                        <strong>6. Contact Us</strong>
                    </p>
                    <p className="mb-6">
                        If you have any questions, concerns, or suggestions regarding this Privacy Policy or the practices of Zade Group, please contact us at:
                    </p>
                    <p className="mb-6">
                        <a href='mailto:info@zadegroup.in' className='hover:text-primary'>Email: info@zadegroup.in</a>
                    </p>
                    <p>
                        By using our website, you acknowledge that you have read and understood this Privacy Policy, and you agree to be bound by its terms. Thank you for visiting Zade Group's website.
                    </p>
                </div>

            </div>

            <Footer phoneNumber={"7573030027-28"} Email={"info@zadegroup.in"} />

        </div>
    );
};

export default PrivacyPolicy;
