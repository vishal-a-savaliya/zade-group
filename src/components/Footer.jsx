import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// import footer_bg from '../image/footer-pattern.png'

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


const RERA = {
    z2: "PR/GJ/AHMEDABAD/AHMEDABADCITY/AUDA/CAA12096/060723",
    zluxuria: "PR/GJ/AHMEDABAD/AHMEDABADCITY/AUDA/RAA12017/280623"
}




function Footer({ phoneNumber, Email, page }) {
    return (
        <div className='bg-black bg-cover pt-14 md:px-3 lg:px-14 md:pt-10'
        // style={{
        //     backgroundImage: `url(${footer_bg})`,
        // }}
        >

            <div className='md:hidden marquee-container pt-8'>
                {
                    RERA[page] && <div className='marquee-content inline-block text-white font-primary'>RERA Approved : {RERA[page]}</div>
                }
            </div>

            <div className='flex flex-col md:flex-row justify-between md:w-[90%] 15:w-[80%] mx-auto px-[10%] md:px-0 py-20'>

                <div>

                    <motion.svg fill="#FFFFFF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="100px" viewBox="0 0 747 742" className='fill-none'>

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

                    </motion.svg>
                    <h2 className='text-3xl font-primary font-semibold text-textWhiteDark mt-4'>Zade Group</h2>


                </div>

                <div className='pt-16 md:pt-0'>
                    <h2 className='text-2xl font-primary font-bold text-textWhiteDark mb-6'>Office</h2>

                    <a href='https://goo.gl/maps/4y4iq9cLUZpNLQnL8' target='_black'>

                        <p className='text-textWhiteLight hover:text-gold transition duration-500 ease-in-out transform max-w-[300px] text-sm'>Corporate Campus, Nr. Baghban Party Plot, Zydus Hospital Rd, Thaltej, Ahmedabad, 380059</p>
                    </a>

                    <a href='mailto:info@zadegroup.in' target='_black'>

                        <p className='text-textWhiteLight hover:text-gold transition duration-500 ease-in-out transform border-b border-textWhiteLight pb-1 w-fit mt-4 text-sm'>info@zadegroup.in</p>
                    </a>

                    <a href='tel:7573030027' target='_black' className=''>

                        <p className='text-textWhiteDark hover:text-gold transition duration-500 ease-in-out transform text-xl font-primary font-semibold mt-4'>7573030027-28</p>
                    </a>

                </div>

                <div className='pt-16 md:pt-0'>
                    <h2 className='text-2xl font-primary font-bold text-textWhiteDark mb-6'>Links</h2>

                    <Link to="/">
                        <p className='text-textWhiteLight hover:text-gold transition duration-500 ease-in-out transform  w-fit mt-4 text-sm'>Home</p>
                    </Link>
                    <Link to="/about">
                        <p className='text-textWhiteLight hover:text-gold transition duration-500 ease-in-out transform  w-fit mt-4 text-sm'>About</p>
                    </Link>
                    <Link to="/privacy-policy">
                        <p className='text-textWhiteLight hover:text-gold transition duration-500 ease-in-out transform  w-fit mt-4 text-sm'>Privacy Policy</p>
                    </Link>
                    <Link to="/z2">
                        <p className='text-textWhiteLight hover:text-gold transition duration-500 ease-in-out transform  w-fit mt-4 text-sm'>Z2</p>
                    </Link>
                    <Link to="/zluxuria">
                        <p className='text-textWhiteLight hover:text-gold transition duration-500 ease-in-out transform  w-fit mt-4 text-sm'>Z Luxuria</p>
                    </Link>



                </div>

                <div className='pt-16 md:pt-0'>
                    <h2 className='text-xl font-primary font-bold text-textWhiteDark mb-5'>Get in Touch</h2>

                    <div className='flex md:justify-center items-center my-4'>

                        <a href='https://www.facebook.com/fbzadegroup' target='_blank' rel="noreferrer" className='md:mr-2 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform'>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='group'>
                                <path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" stroke="white" strokeWidth="1" stroke-miterlimit="10" stroke-linecap="round" className='stroke-white group-hover:stroke-primary transition duration-500 ease-in-out transform' />
                                <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="white" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" className='stroke-white group-hover:stroke-primary transition duration-500 ease-in-out transform' />
                            </svg>


                        </a>


                        <a href='http://api.whatsapp.com/send?phone=+917573030027&text=Hi,%20I%20contacted%20you%20Through%20your%20website%20zadegroup.in' target='_blank' rel="noreferrer" className=' md:mx-2 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform'>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='group' >
                                <path d="M6.9 20.6C8.4 21.5 10.2 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 13.8 2.5 15.5 3.3 17L2.44044 20.306C2.24572 21.0549 2.93892 21.7317 3.68299 21.5191L6.9 20.6Z" strokeWidth="1" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" className='stroke-white group-hover:stroke-primary transition duration-500 ease-in-out transform' />
                                <path d="M16.5 14.8485C16.5 15.0105 16.4639 15.177 16.3873 15.339C16.3107 15.501 16.2116 15.654 16.0809 15.798C15.86 16.041 15.6167 16.2165 15.3418 16.329C15.0714 16.4415 14.7784 16.5 14.4629 16.5C14.0033 16.5 13.512 16.392 12.9937 16.1715C12.4755 15.951 11.9572 15.654 11.4434 15.2805C10.9251 14.9025 10.4339 14.484 9.9652 14.0205C9.501 13.5525 9.08187 13.062 8.70781 12.549C8.33826 12.036 8.04081 11.523 7.82449 11.0145C7.60816 10.5015 7.5 10.011 7.5 9.543C7.5 9.237 7.55408 8.9445 7.66224 8.6745C7.77041 8.4 7.94166 8.148 8.18052 7.923C8.46895 7.6395 8.78443 7.5 9.11793 7.5C9.24412 7.5 9.37031 7.527 9.48297 7.581C9.60015 7.635 9.70381 7.716 9.78493 7.833L10.8305 9.3045C10.9116 9.417 10.9702 9.5205 11.0108 9.6195C11.0513 9.714 11.0739 9.8085 11.0739 9.894C11.0739 10.002 11.0423 10.11 10.9792 10.2135C10.9206 10.317 10.835 10.425 10.7268 10.533L10.3843 10.8885C10.3348 10.938 10.3122 10.9965 10.3122 11.0685C10.3122 11.1045 10.3167 11.136 10.3257 11.172C10.3393 11.208 10.3528 11.235 10.3618 11.262C10.4429 11.4105 10.5826 11.604 10.7809 11.838C10.9837 12.072 11.2 12.3105 11.4344 12.549C11.6778 12.7875 11.9121 13.008 12.151 13.2105C12.3853 13.4085 12.5791 13.5435 12.7323 13.6245C12.7549 13.6335 12.7819 13.647 12.8135 13.6605C12.8495 13.674 12.8856 13.6785 12.9261 13.6785C13.0028 13.6785 13.0613 13.6515 13.1109 13.602L13.4534 13.2645C13.5661 13.152 13.6743 13.0665 13.7779 13.0125C13.8816 12.9495 13.9852 12.918 14.0979 12.918C14.1835 12.918 14.2737 12.936 14.3728 12.9765C14.472 13.017 14.5756 13.0755 14.6883 13.152L16.18 14.2095C16.2972 14.2905 16.3783 14.385 16.4279 14.4975C16.473 14.61 16.5 14.7225 16.5 14.8485Z" strokeWidth="1" stroke-miterlimit="10" className='stroke-white group-hover:stroke-primary transition duration-500 ease-in-out transform' />
                            </svg>


                        </a>

                        <a href='https://www.linkedin.com/company/zade-group/' target='_blank' rel="noreferrer" className='md:mx-2 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform'>

                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-5 md:h-5 stroke-white hover:stroke-primary transition duration-500 ease-in-out transform'>
                                <path d="M21 2.47059V19.5294C21 19.9194 20.845 20.2935 20.5692 20.5693C20.2935 20.8451 19.9194 21 19.5294 21H2.47056C2.08053 21 1.70648 20.8451 1.43069 20.5693C1.15491 20.2935 0.999969 19.9194 0.999969 19.5294L0.999969 2.47059C0.999969 2.08056 1.15491 1.70651 1.43069 1.43073C1.70648 1.15494 2.08053 1 2.47056 1L19.5294 1C19.9194 1 20.2935 1.15494 20.5692 1.43073C20.845 1.70651 21 2.08056 21 2.47059V2.47059ZM6.88232 8.64706H3.94115V18.0588H6.88232V8.64706ZM7.14703 5.41176C7.14858 5.18929 7.10629 4.96869 7.02258 4.76255C6.93888 4.55642 6.81539 4.36879 6.65916 4.21039C6.50294 4.05198 6.31705 3.92589 6.1121 3.83933C5.90715 3.75277 5.68715 3.70742 5.46468 3.70588H5.41173C4.95931 3.70588 4.52541 3.88561 4.20549 4.20552C3.88558 4.52544 3.70585 4.95934 3.70585 5.41176C3.70585 5.86419 3.88558 6.29809 4.20549 6.61801C4.52541 6.93792 4.95931 7.11765 5.41173 7.11765V7.11765C5.63423 7.12312 5.85562 7.0847 6.06325 7.00458C6.27089 6.92447 6.46071 6.80422 6.62186 6.65072C6.78301 6.49722 6.91234 6.31346 7.00245 6.10996C7.09256 5.90646 7.14169 5.6872 7.14703 5.46471V5.41176ZM18.0588 12.3412C18.0588 9.51177 16.2588 8.41177 14.4706 8.41177C13.8851 8.38245 13.3021 8.50715 12.7798 8.77345C12.2576 9.03974 11.8142 9.43832 11.4941 9.92941H11.4117V8.64706H8.64703V18.0588H11.5882V13.0529C11.5457 12.5403 11.7072 12.0315 12.0376 11.6372C12.368 11.2429 12.8407 10.9949 13.3529 10.9471H13.4647C14.4 10.9471 15.0941 11.5353 15.0941 13.0176V18.0588H18.0353L18.0588 12.3412Z" strokeLinejoin="round" />
                            </svg>



                        </a>

                        <a href='https://twitter.com/ZadeGroup' target='_blank' rel="noreferrer" className='md:mx-2 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform'>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6  fill-white hover:fill-primary transition duration-500 ease-in-out transform' >
                                <path d="M23.0157 6.53437C22.9733 6.43229 22.9018 6.34496 22.8101 6.28327C22.7184 6.22158 22.6105 6.18827 22.5 6.1875H19.5375C19.1714 5.51496 18.6327 4.95205 17.977 4.55662C17.3212 4.16118 16.572 3.94749 15.8063 3.9375C14.6558 3.9325 13.5502 4.38346 12.7314 5.19168C11.9127 5.9999 11.4474 7.09956 11.4375 8.25V9.06562C7.46252 8.11875 4.18127 4.88437 4.14377 4.85625C4.0715 4.7849 3.98126 4.73445 3.88262 4.71025C3.78399 4.68606 3.68064 4.68902 3.58355 4.71882C3.48646 4.74861 3.39925 4.80414 3.33118 4.87951C3.2631 4.95487 3.2167 5.04726 3.1969 5.14687C2.38127 9.60937 3.7219 12.5906 4.98752 14.3062C5.65878 15.2249 6.48335 16.0209 7.42502 16.6594C5.9719 18.4219 3.58127 19.3406 3.55315 19.35C3.47328 19.3794 3.40127 19.4269 3.34273 19.4886C3.28419 19.5504 3.2407 19.6249 3.21565 19.7062C3.18905 19.7856 3.18113 19.8701 3.19251 19.953C3.20389 20.0359 3.23427 20.1151 3.28127 20.1844C3.37502 20.325 4.29377 21.5625 7.50002 21.5625C14.0344 21.5625 19.5 16.5094 20.025 10.0219L22.8938 7.14375C22.9751 7.06756 23.0306 6.96786 23.0524 6.8586C23.0743 6.74934 23.0614 6.63597 23.0157 6.53437ZM19.0781 9.375C18.9806 9.47229 18.9237 9.60296 18.9188 9.74062C18.5344 15.7406 13.5188 20.4375 7.50002 20.4375C6.1969 20.4375 5.36252 20.2125 4.86565 19.9875C5.92502 19.4531 7.6594 18.4031 8.71877 16.8094C8.76098 16.7433 8.78938 16.6694 8.80227 16.592C8.81516 16.5147 8.81227 16.4356 8.79377 16.3594C8.77379 16.2814 8.73757 16.2085 8.68749 16.1455C8.63741 16.0825 8.57459 16.0308 8.50315 15.9937C8.4844 15.9937 7.07815 15.2625 5.8594 13.5938C4.40627 11.6062 3.8344 9.17812 4.15315 6.375C5.5219 7.5375 8.47502 9.73125 11.9063 10.3031C11.987 10.3185 12.0702 10.3156 12.1497 10.2948C12.2292 10.2739 12.3031 10.2356 12.366 10.1826C12.4288 10.1297 12.4791 10.0634 12.5131 9.98851C12.5471 9.91367 12.564 9.83219 12.5625 9.75V8.25C12.57 7.40042 12.9133 6.58831 13.5176 5.99106C14.1218 5.39382 14.9379 5.05999 15.7875 5.0625C16.4014 5.07136 16.9999 5.2563 17.5117 5.59532C18.0236 5.93435 18.4274 6.41321 18.675 6.975C18.7178 7.07606 18.7897 7.16211 18.8815 7.22221C18.9733 7.28231 19.0809 7.31374 19.1907 7.3125H21.1407L19.0781 9.375Z" />
                            </svg>

                        </a>

                        <a href='https://www.instagram.com/zade_group_official/' target='_blank' stroke-width={1.5} rel="noreferrer" className=' md:mx-2 mx-1 hover:border-primary hover:cursor-pointer transition duration-500 ease-in-out transform' >
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 md:w-6 md:h-6 fill-white hover:fill-primary transition duration-500 ease-in-out transform' >
                                <path d="M12 7.6875C11.1471 7.6875 10.3133 7.94042 9.6041 8.41429C8.89492 8.88815 8.34217 9.56167 8.01577 10.3497C7.68937 11.1377 7.60397 12.0048 7.77036 12.8413C7.93676 13.6779 8.34749 14.4463 8.9506 15.0494C9.55372 15.6525 10.3221 16.0632 11.1587 16.2296C11.9952 16.396 12.8623 16.3106 13.6503 15.9842C14.4383 15.6578 15.1118 15.1051 15.5857 14.3959C16.0596 13.6867 16.3125 12.8529 16.3125 12C16.3125 10.8563 15.8581 9.75935 15.0494 8.9506C14.2406 8.14185 13.1437 7.6875 12 7.6875ZM12 15.1875C11.3696 15.1875 10.7533 15.0006 10.2291 14.6503C9.70494 14.3001 9.29639 13.8022 9.05513 13.2198C8.81388 12.6374 8.75076 11.9965 8.87375 11.3781C8.99674 10.7598 9.30032 10.1919 9.7461 9.7461C10.1919 9.30032 10.7598 8.99674 11.3781 8.87375C11.9965 8.75076 12.6374 8.81388 13.2198 9.05513C13.8022 9.29639 14.3001 9.70494 14.6503 10.2291C15.0006 10.7533 15.1875 11.3696 15.1875 12C15.185 12.8446 14.8484 13.6539 14.2512 14.2512C13.6539 14.8484 12.8446 15.185 12 15.1875ZM16.125 2.8125H7.875C6.53234 2.8125 5.24467 3.34587 4.29527 4.29527C3.34587 5.24467 2.8125 6.53234 2.8125 7.875V16.125C2.8125 17.4677 3.34587 18.7553 4.29527 19.7047C5.24467 20.6541 6.53234 21.1875 7.875 21.1875H16.125C17.4677 21.1875 18.7553 20.6541 19.7047 19.7047C20.6541 18.7553 21.1875 17.4677 21.1875 16.125V7.875C21.1875 6.53234 20.6541 5.24467 19.7047 4.29527C18.7553 3.34587 17.4677 2.8125 16.125 2.8125ZM20.0625 16.125C20.0625 17.1693 19.6477 18.1708 18.9092 18.9092C18.1708 19.6477 17.1693 20.0625 16.125 20.0625H7.875C6.83071 20.0625 5.82919 19.6477 5.09077 18.9092C4.35234 18.1708 3.9375 17.1693 3.9375 16.125V7.875C3.9375 6.83071 4.35234 5.82919 5.09077 5.09077C5.82919 4.35234 6.83071 3.9375 7.875 3.9375H16.125C17.1693 3.9375 18.1708 4.35234 18.9092 5.09077C19.6477 5.82919 20.0625 6.83071 20.0625 7.875V16.125ZM17.8125 7.125C17.8125 7.31042 17.7575 7.49168 17.6545 7.64585C17.5515 7.80002 17.4051 7.92018 17.2338 7.99114C17.0625 8.06209 16.874 8.08066 16.6921 8.04449C16.5102 8.00831 16.3432 7.91902 16.2121 7.78791C16.081 7.6568 15.9917 7.48975 15.9555 7.3079C15.9193 7.12604 15.9379 6.93754 16.0089 6.76623C16.0798 6.59493 16.2 6.44851 16.3542 6.3455C16.5083 6.24248 16.6896 6.1875 16.875 6.1875C17.1236 6.1875 17.3621 6.28627 17.5379 6.46209C17.7137 6.6379 17.8125 6.87636 17.8125 7.125Z" />
                            </svg>

                            {/* <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-5 md:h-5 fill-white hover:fill-primary transition duration-500 ease-in-out transform'>
                                        <path d="M49.9713 60H10.0288C4.50924 60 0 55.4908 0 49.9713V10.0287C0 4.50924 4.50924 0 10.0288 0H49.9713C55.4908 0 60 4.50924 60 10.0287V49.9713C60 55.5154 55.5154 60 49.9713 60Z" fill="white" />
                                        <path d="M30.0123 45.4128C25.8974 45.4128 22.0288 43.8111 19.1212 40.9035C16.2136 37.9959 14.6119 34.1273 14.6119 30.0123C14.6119 25.8974 16.2136 22.0288 19.1212 19.1212C22.0288 16.2136 25.8974 14.6119 30.0123 14.6119C34.1273 14.6119 37.9959 16.2136 40.9035 19.1212C43.8111 22.0288 45.4128 25.8974 45.4128 30.0123C45.4128 34.1273 43.8111 37.9959 40.9035 40.9035C37.9713 43.8111 34.1273 45.4128 30.0123 45.4128ZM30.0123 17.8891C23.3347 17.8891 17.8891 23.3101 17.8891 30.0123C17.8891 36.69 23.3101 42.1355 30.0123 42.1355C36.69 42.1355 42.1356 36.7146 42.1356 30.0123C42.1109 23.3347 36.69 17.8891 30.0123 17.8891Z" fill="black" />
                                        <path d="M48.4145 14.1058C50.0476 14.1058 51.3715 12.7819 51.3715 11.1488C51.3715 9.51577 50.0476 8.19189 48.4145 8.19189C46.7815 8.19189 45.4576 9.51577 45.4576 11.1488C45.4576 12.7819 46.7815 14.1058 48.4145 14.1058Z" fill="white" />
                                    </svg> */}


                        </a>
                    </div>




                </div>

            </div>




            <div className='flex flex-col md:flex-row justify-between pt-3 md:w-[92%] 15:w-[83%] mx-auto border-[#FFFFFF33] border-t font-primary'>
                {/* <div className='flex justify-center md:justify-start'>
                    <Link to='/about'><p className='text-center text-white font-medium pt-4 pb-10 pr-3'>About</p></Link>
                    <Link to='/privacy-policy'><p className='text-center text-white font-medium pt-4 pb-10 px-3'>Privacy Policy</p></Link>
                </div> */}
                <p className='text-center text-white md:pt-5 pb-10'>© 2023 All rights reserved</p>
                {
                    RERA[page] && RERA[page] ? <div className='hidden md:block text-center text-white font-primary md:pt-5 pb-10'>RERA Approved : {RERA[page]}</div> : <p className='hidden md:block text-center text-white md:pt-5 pb-10'>ZADE GROUP</p>
                }

            </div>

        </div>
    )
}

export default Footer