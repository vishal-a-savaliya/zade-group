import React from 'react'
import { Link } from 'react-router-dom'
// import footer_bg from '../image/bg_squre.png'

function Footer({ phoneNumber, Email }) {
    return (
        <div className='bg-secondary bg-cover pt-14 md:px-3 lg:px-14 md:pt-24'
        // style={{
        //     backgroundImage: `url(${footer_bg})`,
        // }}
        >

            <div className='flex px-5 flex-col md:flex-row lg:w-[85%] md:px-0 mx-auto mt-5'>

                <div className='flex items-center md:w-[33%] md:border-[#FFFFFF33] md:border-r md:border-b pb-10 md:pl-5 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
                        <g>
                            <g>
                                <path class="st0" d="M29.1,21.1l-6.9-1.5c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0.1l-2.5,2.5l-0.2,0.2l-0.3-0.2    C14,19.9,10.1,16,7.7,11.2l-0.2-0.3l0.2-0.2l2.5-2.5c0.1-0.1,0.2-0.3,0.1-0.4L8.9,0.9c0-0.2-0.2-0.4-0.5-0.4    c-1.3,0-2.6,0.3-3.8,0.9C3.6,2,2.7,2.9,1.9,3.9c-0.7,1-1.2,2.2-1.4,3.4C0.4,8.6,0.5,9.9,1,11.2c1.5,4.1,3.9,7.8,7,10.9    c3.1,3.1,6.8,5.5,10.9,7c0.9,0.3,1.8,0.5,2.7,0.5c0.4,0,0.8,0,1.1-0.1c1.2-0.2,2.4-0.6,3.4-1.4c1-0.7,1.9-1.7,2.5-2.8    c0.6-1.2,0.9-2.4,0.9-3.8C29.5,21.3,29.3,21.1,29.1,21.1z M28.5,22.3c-0.2,2-1.3,3.8-3,5c-1.2,0.8-2.6,1.3-4,1.3    c-0.8,0-1.6-0.1-2.4-0.4c-8.1-2.9-14.4-9.2-17.3-17.3C1.1,8.7,1.4,6.3,2.7,4.4c1.2-1.7,2.9-2.7,5-3l0.4,0l0.1,0.4l1.2,5.6l0.1,0.2    L9.3,7.8l-2.6,2.6c-0.1,0.1-0.2,0.4-0.1,0.5c2.6,5.5,7,9.9,12.5,12.5c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3-0.1l2.6-2.6l0.2-0.2    l0.2,0.1l5.6,1.2l0.4,0.1L28.5,22.3z"></path>
                            </g>
                            <g>
                                <path class="st0" d="M29.5,15c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5c0-7.5-6.1-13.6-13.6-13.6c-0.3,0-0.5-0.2-0.5-0.5    s0.2-0.5,0.5-0.5c3.9,0,7.5,1.5,10.3,4.2C28,7.5,29.5,11.1,29.5,15z"></path>
                            </g>
                            <g>
                                <path class="st0" d="M25.8,15c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5c0-5.4-4.4-9.8-9.8-9.8c-0.3,0-0.5-0.2-0.5-0.5    c0-0.3,0.2-0.5,0.5-0.5C20.9,4.2,25.8,9.1,25.8,15z"></path>
                            </g>
                            <g>
                                <path class="st0" d="M22,15c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5-0.2-0.5-0.5c0-3.4-2.7-6.1-6.1-6.1c-0.3,0-0.5-0.2-0.5-0.5    C14.5,8.2,14.7,8,15,8C18.9,8,22,11.1,22,15z"></path>
                            </g>
                        </g>
                    </svg>
                    <div className='flex flex-col ml-4'>
                        <h1 className='text-white text-xl font-medium'>Call us</h1>
                        <a className='text-white font-[500] hover:text-primary' href={`tel:${phoneNumber.split("-")[0]}`}>{phoneNumber}</a>
                        {/* <a className='text-white font-[500] hover:text-primary' href='tel:'>7573030028</a> */}
                    </div>

                </div>

                <div className='flex items-center md:w-[33%] md:border-[#FFFFFF33] md:border-r md:border-b md:pl-8 pb-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M27.1406 5.47345L27.482 5.13203H26.9992H3.00932H2.52352L2.86851 5.47406L14.9151 17.4174L15.0565 17.5576L15.1973 17.4168L27.1406 5.47345ZM1.55781 23.4251V23.9079L1.89923 23.5665L10.3648 15.1009L10.5068 14.9589L10.3642 14.8175L1.89862 6.42451L1.55781 6.08663V6.56654V23.4251ZM2.85934 24.5265L2.51792 24.868H3.00076H26.9992H27.4821L27.1407 24.5265L18.7156 16.1015L18.5742 15.9601L18.4328 16.1015L15.5387 18.9956L15.5387 18.9957C15.2744 19.26 14.8461 19.2609 14.5807 18.9977L14.4398 19.1398L14.5807 18.9977L11.6125 16.055L11.4711 15.9148L11.3302 16.0556L2.85934 24.5265ZM28.1008 23.5664L28.4422 23.9079V23.425V6.57492V6.09208L28.1008 6.4335L19.6757 14.8586L19.5343 15L19.6757 15.1414L28.1008 23.5664ZM2.63672 3.77422H27.3633C28.7097 3.77422 29.8 4.87252 29.8 6.21094V23.7891C29.8 25.1355 28.7017 26.2258 27.3633 26.2258H2.63672C1.29027 26.2258 0.2 25.1275 0.2 23.7891V6.21094C0.2 4.8681 1.29504 3.77422 2.63672 3.77422Z" fill="white" stroke="#1A1A1A" stroke-width="0.4"></path></svg>
                    <div className='flex flex-col ml-4'>

                        <h1 className='text-white text-xl font-medium'>Write to us</h1>
                        <a className='text-white font-[500] hover:text-primary' href={`mailto:${Email}`}>{Email}</a>

                    </div>
                </div>

                <div className='flex md:items-center md:w-[34%] border-[#FFFFFF33] border-b md:pl-8 pb-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='mt-2' width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M11.6668 24.0287L11.6327 23.9606L11.5597 23.9391C6.42379 22.425 2.87031 17.6973 2.87031 12.3047C2.87031 5.61659 8.31191 0.175 15 0.175C21.6881 0.175 27.1297 5.61659 27.1297 12.3047C27.1297 17.6975 23.5762 22.4252 18.44 23.9394L18.367 23.9609L18.333 24.0289L15.6295 29.4358L15.6294 29.4359C15.5103 29.6743 15.2665 29.825 15 29.825C14.7333 29.825 14.4897 29.6744 14.3703 29.4358C14.3703 29.4358 14.3703 29.4358 14.3703 29.4358L11.6668 24.0287ZM17.7014 22.6834L17.7015 22.6833C22.424 21.4578 25.7219 17.1899 25.7219 12.3047C25.7219 6.39238 20.9123 1.58281 15 1.58281C9.08769 1.58281 4.27813 6.39238 4.27813 12.3047C4.27813 17.1898 7.576 21.4577 12.2985 22.6831C12.4954 22.7343 12.6603 22.8679 12.7513 23.0498L14.8435 27.2342L15 27.5472L15.1565 27.2342L17.2487 23.0498C17.3397 22.8679 17.5046 22.7343 17.7014 22.6834Z" fill="white" stroke="#1A1A1A" stroke-width="0.35"></path><path d="M11.6594 12.3047C11.6594 10.4627 13.158 8.96406 15 8.96406C16.842 8.96406 18.3406 10.4627 18.3406 12.3047C18.3406 14.1467 16.842 15.6453 15 15.6453C13.158 15.6453 11.6594 14.1467 11.6594 12.3047ZM13.0672 12.3047C13.0672 13.3707 13.934 14.2375 15 14.2375C16.066 14.2375 16.9328 13.3707 16.9328 12.3047C16.9328 11.2387 16.066 10.3719 15 10.3719C13.934 10.3719 13.0672 11.2387 13.0672 12.3047Z" fill="white" stroke="#1A1A1A" stroke-width="0.35"></path></svg>
                    <div className='flex flex-col ml-4'>

                        <h1 className='text-white text-xl font-medium'>Office location</h1>
                        <a className='text-white font-[500] hover:text-primary' href='https://goo.gl/maps/auwChgwE1F3MRLzHA'>Thaltej, Ahmedabad, 380059</a>

                    </div>
                </div>

            </div>

            <div className='flex justify-between pt-3 w-[83%] mx-auto'>
                <div className='flex justify-start'>
                    <Link to='/about'><p className='text-center text-white font-medium pt-4 pb-10 pr-3'>About</p></Link>
                    <Link to='/privacy-policy'><p className='text-center text-white font-medium pt-4 pb-10 px-3'>Privacy Policy</p></Link>
                    {/* <Link to='/privacy-policy'><p className='text-center text-white font-medium pt-4 pb-10 px-3'>Privacy Policy</p></Link> */}
                </div>
                <p className='text-center text-white font-medium pt-4 pb-10'>© 2023 All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer