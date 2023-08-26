import z2_image from '../image/z2/8.jpeg';
import zluxuria_image from '../image/zluxuria/Zluxuria1.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AiOutlineCar, AiOutlineFundProjectionScreen, AiOutlineContainer } from 'react-icons/ai';
import { MdSecurity, MdOutlineDesk, MdOutlineMeetingRoom, MdOutlineElevator } from 'react-icons/md';
import { GiRoad, GiHairStrands, GiPowerGenerator, GiTempleDoor } from "react-icons/gi";
import { TbBrandCouchdb, TbChessKnight, TbDeviceGamepad, TbArmchair, TbAirConditioning } from "react-icons/tb";
import { ImEnter } from "react-icons/im";
// import { BsCloudRain } from "react-icons/bs";
// import { IoBedOutline } from "react-icons/io5";
// import { GrLounge } from "react-icons/gr";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { SiLinuxcontainers } from "react-icons/si";
import { TfiLayoutMediaCenter } from "react-icons/tfi";
import { BiBuildingHouse, BiShieldAlt, BiTv, BiBed, BiDumbbell, BiSwim, BiCameraMovie, BiSmile, BiParty } from 'react-icons/bi';



import amenities_img2 from '../image/zluxuria/zluxuria_specification2.jpeg'
import amenities_img3 from '../image/zluxuria/zluxuria_specification3.jpeg'
import amenities_img4 from '../image/zluxuria/zluxuria_specification4.jpeg'
import amenities_img5 from '../image/zluxuria/zluxuria_specification5.jpeg'
import amenities_img8 from '../image/zluxuria/zluxuria_specification8.jpeg'


library.add(far, fas);

export const Projects = [
    {
        title: "Z2",
        id: "01",
        description: "The Z2, Corporate Space is our newest project in construction, offering a state-of-the-art space for businesses and corporations to thrive. This stunning 32-story building boasts a grand height of 11 feet per floor, providing space for businesses of all sizes",
        location: "Thaltej, Ahmedabad",
        locationLink: "https://goo.gl/maps/BK2JuYFx4JkdacXRA",
        status: "Newly Launched",
        link: "/z2",
        image: z2_image,
        details: [
            {
                0: 32,
                1: "Stories"
            },
            {
                0: 1230,
                1: "Sq. Ft. Onwards"
            },
            {
                0: 5,
                1: "Level well-planed basement parking"
            },
            {
                0: 2,
                1: "Side road corners"
            },
        ]
    },
    {
        title: "Z Luxuria",
        id: "02",
        description: "Introducing our latest project, Z Luxuria a luxurious residential tower that will set new standards for opulent living in Ahmedabad. This magnificent 33-story tower offers 56 units with world-class amenities and stunning architectural design.",
        location: "Thaltej, Ahmedabad",
        locationLink: "https://goo.gl/maps/Zsd2pVJPmeursQRY9",
        status: "Newly Launched",
        link: "/zluxuria",
        image: zluxuria_image,
        details: [
            {
                0: 33,
                1: "Stories"
            },
            {
                0: 56,
                1: "Units ( 2 Apartment Per Floor )"
            },
            {
                0: "4, 6 & 7",
                1: "Penthouse and Duplex Residency"
            },
            {
                0: 4,
                1: "Level basement parking"
            },
        ]
    }
];


export const Amenities = {
    "zluxuria": [
        { "SVG": <ImEnter size={50} style={{ 'fill': "#CCA34B" }} />, "name": "DOUBLE HEIGHT ENTRANCE FOYER" },
        { "SVG": <TbArmchair size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "DOUBLE HEIGHT WAITING & RECEPTION AREA" },
        { "SVG": <TfiLayoutMediaCenter size={50} style={{ 'fill': "#CCA34B" }} />, "name": "DOUBLE HEIGHT OWNER'S LOUNGE" },
        { "SVG": <MdOutlineMeetingRoom size={50} style={{ 'fill': "#CCA34B" }} />, "name": "DOUBLE HEIGHT MULTIPURPOSE HALL" },
        { "SVG": <AiOutlineCar size={50} style={{ fill: '#cda24b' }} />, "name": "4 level Basement Parking" },
        { "SVG": <BiBuildingHouse size={50} style={{ 'fill': "#CCA34B" }} />, "name": "METER ROOM" },
        { "SVG": <BiShieldAlt size={50} style={{ 'fill': "#CCA34B" }} />, "name": "SECURITY CABIN" },
        { "SVG": <MdOutlineDesk size={50} style={{ 'fill': "#CCA34B" }} />, "name": "Society Maintenance Office" },
        { "SVG": <BiBed size={50} style={{ 'fill': "#CCA34B" }} />, "name": "2 GUEST ROOM" },
        { "SVG": <MdOutlineElevator size={50} style={{ 'fill': "#CCA34B" }} />, "name": "4 High Speed Elevators" },
        { "SVG": <TbBrandCouchdb size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "Adjoining Deck" },
        { "SVG": <BiTv size={50} style={{ 'fill': "#CCA34B" }} />, "name": "TV Lounge" },
        { "SVG": <BiParty size={50} style={{ 'fill': "#CCA34B" }} />, "name": "Kitty Party Room" },
        { "SVG": <TbDeviceGamepad size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "Indoor Games Area" },
        { "SVG": <BiSmile size={50} style={{ 'fill': "#CCA34B" }} />, "name": "Toddler's Play Zone" },
        { "SVG": <TbChessKnight size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "Board Games Room" },
        { "SVG": <BiSwim size={50} style={{ 'fill': "#CCA34B" }} />, "name": "SWIMMING POOL" },
        { "SVG": <BiDumbbell size={50} style={{ 'fill': "#CCA34B" }} />, "name": "GYM" },
        { "SVG": <GiHairStrands size={50} style={{ 'fill': "#CCA34B" }} />, "name": "Salon / Spa" },
        { "SVG": <BiCameraMovie size={50} style={{ 'fill': "#CCA34B" }} />, "name": "THEATER" },
        { "SVG": <SiLinuxcontainers size={50} style={{ 'fill': "#CCA34B" }} />, "name": "Open Terrace With Sitting" },
        { "SVG": <GiPowerGenerator size={50} style={{ 'fill': "#CCA34B" }} />, "name": "D.G. Set ( For Emergency Use )" },
        { "SVG": <AiOutlineContainer size={50} style={{ 'fill': "#CCA34B" }} />, "name": "GARBAGE DUCT FACILITIES" },
        { "SVG": <TbAirConditioning size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "VRV Outdoor Unit" }
    ],
    "Z2": [

        { "SVG": <GiTempleDoor size={50} style={{ fill: '#cda24b' }} />, "name": "Entrance Plaza" },
        { "SVG": <AiOutlineFundProjectionScreen size={50} style={{ fill: '#cda24b' }} />, "name": "Double Height Conference Room" },
        { "SVG": <MdOutlineDesk size={50} style={{ fill: '#cda24b' }} />, "name": "Double Height Reception & Waiting Area" },
        { "SVG": <HiOutlineBuildingOffice size={50} style={{ stroke: '#cda24b' }} />, "name": "Admin Office " },
        { "SVG": <TbBrandCouchdb size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "Driver Waiting Lounge" },
        { "SVG": <MdSecurity size={50} style={{ fill: '#cda24b' }} />, "name": "Security Cabin" },
        { "SVG": <AiOutlineCar size={50} style={{ fill: '#cda24b' }} />, "name": "5 level Basement Parking" },
        { "SVG": <GiRoad size={50} style={{ fill: '#cda24b' }} />, "name": "Wide Drive Way" },
        // { "SVG": <IoBedOutline size={50} style={{ stroke: '#cda24b' }} />, "name": "2 Guest Room  " },
        { "SVG": <MdOutlineElevator size={50} style={{ fill: '#cda24b' }} />, "name": "5 High Speed Elevators" },
        // { "SVG": <GiPowerGenerator size={50} style={{ fill: '#cda24b' }} />, "name": "Stan dby DG Set For Emergency " },
        // { "SVG": <BsCloudRain size={50} style={{ fill: '#cda24b' }} />, "name": "Rain Water Storage" },
    ]
}

export const AmenitiesDetails = {
    "zluxuria": [
        {
            "svg": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7926 7.71101C17 8.67676 17 9.97075 17 12C17 14.0287 17 15.3225 16.7928 16.2882M16.7926 7.71101C16.7138 7.34408 16.6051 7.02453 16.455 6.73005C15.9757 5.78924 15.2108 5.02433 14.27 4.54497C13.2004 4 11.8003 4 9 4C6.19974 4 4.79961 4 3.73005 4.54497C2.78924 5.02433 2.02433 5.78924 1.54497 6.73005C1 7.79961 1 9.19974 1 12C1 14.8003 1 16.2004 1.54497 17.27C2.02433 18.2108 2.78924 18.9757 3.73005 19.455C4.79961 20 6.19974 20 9 20C11.8003 20 13.2004 20 14.27 19.455C15.2108 18.9757 15.9757 18.2108 16.455 17.27C16.6052 16.9753 16.714 16.6555 16.7928 16.2882M16.7926 7.71101L17 7.62176L17.3984 7.44768C19.9262 6.34311 21.1902 5.79083 22.0951 6.38296C23 6.97508 23 8.3544 23 11.113V12.887C23 15.6456 23 17.0249 22.0951 17.617C21.1902 18.2092 19.9262 17.6569 17.3984 16.5523L17 16.3782L16.7928 16.2882M6 12C6 10.2142 6 9.32135 6.35181 8.80519C6.65868 8.35497 7.13034 8.06469 7.64955 8.00652C8.24481 7.93983 8.97022 8.38627 10.4211 9.27915C11.8719 10.172 12.5973 10.6185 12.8407 11.2013C13.0531 11.7097 13.0531 12.2903 12.8407 12.7987C12.5973 13.3815 11.8719 13.828 10.4211 14.7208C8.97022 15.6137 8.24481 16.0602 7.64955 15.9935C7.13034 15.9353 6.65868 15.645 6.35181 15.1948C6 14.6786 6 13.7858 6 12Z" stroke="#cda24b" strokeWidth="1.5" />
            </svg>,
            "image": amenities_img2,
            "name": "Home Theater",
            "description": "Experience cinema-quality visuals and sound, immersing you in movie magic without leaving the comfort of our residency.",
        },
        {
            "svg": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 19H2L9 5Z" stroke="#cda24b" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M14 14.5L16.8235 11L22 19H16M6 11H12M7 9L5 13M11 9L13 13" stroke="#cda24b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>,
            "image": amenities_img3,
            "name": "Toddler Play Zone",
            "description": "A safe and vibrant space for the little ones to unleash their imagination, ensuring fun-filled and constructive playtime.",
        },
        {
            "svg": <svg width="36" height="36" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.862 31.5215H25.793V33.4985H19.862V31.5215ZM15.908 33.4985V35.4755H29.747V33.4985H27.77V31.5215L28.8402 31.5175L29.0551 31.5123C31.6858 31.4002 31.5421 30.3182 28.8837 30.3182L16.4787 30.3274C13.848 30.4394 13.9903 31.5215 16.6487 31.5215H17.885V33.4985H15.908Z" fill="#cda24b" />
                <path d="M12.9425 11.7515H32.7125L32.8865 11.7568C34.443 11.8464 35.678 13.138 35.678 14.717V26.579L35.6727 26.753C35.5831 28.3095 34.2915 29.5445 32.7125 29.5445H12.9425L12.7685 29.5392C11.212 29.4496 9.977 28.158 9.977 26.579V14.717L9.98227 14.543C10.0719 12.9865 11.3635 11.7515 12.9425 11.7515ZM27.77 31.5215H32.7125L32.9273 31.5175C35.5581 31.4055 37.655 29.2374 37.655 26.579V14.717L37.651 14.5022C37.539 11.8714 35.3709 9.7745 32.7125 9.7745H12.9425L12.7277 9.77845C10.0969 9.89048 8 12.0586 8 14.717V26.579L8.00395 26.7938C8.11598 29.4246 10.2841 31.5215 12.9425 31.5215H17.885H27.77Z" fill="#cda24b" />
            </svg>,
            "image": amenities_img4,
            "name": "TV Room",
            "description": "A cozy retreat where residents can gather, relax, and catch up on their favorite shows or the latest news, fostering community ties.",
        },
        {
            "svg": <svg width="36" height="36" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.875 12.5C36.049 12.5 37 13.451 37 14.625C37 15.799 36.049 16.75 34.875 16.75C33.701 16.75 32.75 15.799 32.75 14.625C32.75 13.451 33.701 12.5 34.875 12.5Z" stroke="#cda24b" strokeWidth="2" strokeLinejoin="round" />
                <path d="M34.875 28.25C36.049 28.25 37 29.201 37 30.375C37 31.549 36.049 32.5 34.875 32.5C33.701 32.5 32.75 31.549 32.75 30.375C32.75 29.201 33.701 28.25 34.875 28.25Z" stroke="#cda24b" strokeWidth="2" strokeLinejoin="round" />
                <path d="M11.312 27.875C12.589 27.875 13.625 28.911 13.625 30.188C13.625 31.465 12.589 32.5 11.312 32.5C10.035 32.5 9 31.465 9 30.188C9 28.911 10.035 27.875 11.312 27.875Z" stroke="#cda24b" strokeWidth="2" strokeLinejoin="round" />
                <path d="M11.312 12.5C12.589 12.5 13.625 13.535 13.625 14.812C13.625 16.089 12.589 17.125 11.312 17.125C10.035 17.125 9 16.089 9 14.812C9 13.535 10.035 12.5 11.312 12.5Z" stroke="#cda24b" strokeWidth="2" strokeLinejoin="round" />
                <path d="M25 32.5V30.5C25 29.395 24.105 28.5 23 28.5C21.895 28.5 21 29.395 21 30.5V32.5" stroke="#cda24b" strokeWidth="2" strokeLinejoin="round" />
                <path d="M25 12.5V14.5C25 15.605 24.105 16.5 23 16.5C21.895 16.5 21 15.605 21 14.5V12.5" stroke="#cda24b" strokeWidth="2" strokeLinejoin="round" />
                <path d="M9 12.5H37V32.5H9V12.5Z" stroke="#cda24b" strokeWidth="2" strokeLinejoin="round" />
                <path d="M25.682 21.548L31 37.5" stroke="#cda24b" strokeWidth="2" strokeLinejoin="round" />
                <path d="M25 18.5C25.552 18.5 26 18.948 26 19.5C26 20.052 25.552 20.5 25 20.5C24.448 20.5 24 20.052 24 19.5C24 18.948 24.448 18.5 25 18.5Z" fill="#cda24b" />
            </svg>,
            "image": amenities_img5,
            "name": "Pool Table",
            "description": "Engage in friendly competition or hone your billiards skills, offering residents both leisure and entertainment in one corner.",
        },
        {
            "svg": <svg width="36" height="36" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.125 20.375H29.125" stroke="#cda24b" strokeWidth="2" />
                <path d="M10.125 16.375H34.125" stroke="#cda24b" strokeWidth="2" />
                <path d="M29.125 23.375V13.375C29.125 11.718 27.782 10.375 26.125 10.375C24.468 10.375 23.125 11.718 23.125 13.375M23.125 23.375V13.375C23.125 11.718 21.782 10.375 20.125 10.375C18.468 10.375 17.125 11.718 17.125 13.375" stroke="#cda24b" strokeWidth="2" />
                <mask id="mask0_2_1368" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="2" y="18" width="41" height="21">
                    <path d="M42.018 18.2505V38.3975H2V18.2505H42.018Z" fill="black" />
                </mask>
                <g mask="url(#mask0_2_1368)">
                    <path d="M10.136 34.852C9.41198 34.852 8.68798 34.602 8.13598 34.102C7.58398 33.602 6.85998 33.352 6.13598 33.352C5.41199 33.352 4.68798 33.602 4.13598 34.102C3.58398 34.602 2.85999 34.852 2.13598 34.852C1.41199 34.852 0.687984 34.602 0.135984 34.102C-0.416016 33.602 -1.14001 33.352 -1.86402 33.352C-2.58801 33.352 -3.31202 33.602 -3.86402 34.102C-4.41602 34.602 -5.14001 34.852 -5.86402 34.852C-6.58801 34.852 -7.31202 34.602 -7.86402 34.102C-8.41602 33.602 -9.14001 33.352 -9.86402 33.352C-10.588 33.352 -11.312 33.602 -11.864 34.102C-12.416 34.602 -13.14 34.852 -13.864 34.852M58.124 34.866C57.4 34.866 56.676 34.616 56.124 34.116C55.572 33.616 54.848 33.366 54.124 33.366C53.4 33.366 52.676 33.616 52.124 34.116C51.572 34.616 50.848 34.866 50.124 34.866C49.4 34.866 48.676 34.616 48.124 34.116C47.572 33.616 46.848 33.366 46.124 33.366C45.4 33.366 44.676 33.616 44.124 34.116C43.572 34.616 42.848 34.866 42.124 34.866C41.4 34.866 40.676 34.616 40.124 34.116C39.572 33.616 38.848 33.366 38.124 33.366C37.4 33.366 36.676 33.616 36.124 34.116C35.572 34.616 34.848 34.866 34.124 34.866M34.125 34.875C33.401 34.875 32.677 34.625 32.125 34.125C31.573 33.625 30.849 33.375 30.125 33.375C29.401 33.375 28.677 33.625 28.125 34.125C27.573 34.625 26.849 34.875 26.125 34.875C25.401 34.875 24.677 34.625 24.125 34.125C23.573 33.625 22.849 33.375 22.125 33.375C21.401 33.375 20.677 33.625 20.125 34.125C19.573 34.625 18.849 34.875 18.125 34.875C17.401 34.875 16.677 34.625 16.125 34.125C15.573 33.625 14.849 33.375 14.125 33.375C13.401 33.375 12.677 33.625 12.125 34.125C11.573 34.625 10.849 34.875 10.125 34.875" stroke="#cda24b" strokeWidth="2" />
                    <path d="M10.136 29.852C9.41198 29.852 8.68798 29.602 8.13598 29.102C7.58398 28.602 6.85998 28.352 6.13598 28.352C5.41199 28.352 4.68798 28.602 4.13598 29.102C3.58398 29.602 2.85999 29.852 2.13598 29.852C1.41199 29.852 0.687984 29.602 0.135984 29.102C-0.416016 28.602 -1.14001 28.352 -1.86402 28.352C-2.58801 28.352 -3.31202 28.602 -3.86402 29.102C-4.41602 29.602 -5.14001 29.852 -5.86402 29.852C-6.58801 29.852 -7.31202 29.602 -7.86402 29.102C-8.41602 28.602 -9.14001 28.352 -9.86402 28.352C-10.588 28.352 -11.312 28.602 -11.864 29.102C-12.416 29.602 -13.14 29.852 -13.864 29.852M58.124 29.866C57.4 29.866 56.676 29.616 56.124 29.116C55.572 28.616 54.848 28.366 54.124 28.366C53.4 28.366 52.676 28.616 52.124 29.116C51.572 29.616 50.848 29.866 50.124 29.866C49.4 29.866 48.676 29.616 48.124 29.116C47.572 28.616 46.848 28.366 46.124 28.366C45.4 28.366 44.676 28.616 44.124 29.116C43.572 29.616 42.848 29.866 42.124 29.866C41.4 29.866 40.676 29.616 40.124 29.116C39.572 28.616 38.848 28.366 38.124 28.366C37.4 28.366 36.676 28.616 36.124 29.116C35.572 29.616 34.848 29.866 34.124 29.866M34.125 29.875C33.401 29.875 32.677 29.625 32.125 29.125C31.573 28.625 30.849 28.375 30.125 28.375C29.401 28.375 28.677 28.625 28.125 29.125C27.573 29.625 26.849 29.875 26.125 29.875C25.401 29.875 24.677 29.625 24.125 29.125C23.573 28.625 22.849 28.375 22.125 28.375C21.401 28.375 20.677 28.625 20.125 29.125C19.573 29.625 18.849 29.875 18.125 29.875C17.401 29.875 16.677 29.625 16.125 29.125C15.573 28.625 14.849 28.375 14.125 28.375C13.401 28.375 12.677 28.625 12.125 29.125C11.573 29.625 10.849 29.875 10.125 29.875" stroke="#cda24b" strokeWidth="2" />
                    <path d="M10.136 24.852C9.41198 24.852 8.68798 24.602 8.13598 24.102C7.58398 23.602 6.85998 23.352 6.13598 23.352C5.41199 23.352 4.68798 23.602 4.13598 24.102C3.58398 24.602 2.85999 24.852 2.13598 24.852C1.41199 24.852 0.687984 24.602 0.135984 24.102C-0.416016 23.602 -1.14001 23.352 -1.86402 23.352C-2.58801 23.352 -3.31202 23.602 -3.86402 24.102C-4.41602 24.602 -5.14001 24.852 -5.86402 24.852C-6.58801 24.852 -7.31202 24.602 -7.86402 24.102C-8.41602 23.602 -9.14001 23.352 -9.86402 23.352C-10.588 23.352 -11.312 23.602 -11.864 24.102C-12.416 24.602 -13.14 24.852 -13.864 24.852M58.124 24.866C57.4 24.866 56.676 24.616 56.124 24.116C55.572 23.616 54.848 23.366 54.124 23.366C53.4 23.366 52.676 23.616 52.124 24.116C51.572 24.616 50.848 24.866 50.124 24.866C49.4 24.866 48.676 24.616 48.124 24.116C47.572 23.616 46.848 23.366 46.124 23.366C45.4 23.366 44.676 23.616 44.124 24.116C43.572 24.616 42.848 24.866 42.124 24.866C41.4 24.866 40.676 24.616 40.124 24.116C39.572 23.616 38.848 23.366 38.124 23.366C37.4 23.366 36.676 23.616 36.124 24.116C35.572 24.616 34.848 24.866 34.124 24.866M34.125 24.875C33.401 24.875 32.677 24.625 32.125 24.125C31.573 23.625 30.849 23.375 30.125 23.375C29.401 23.375 28.677 23.625 28.125 24.125C27.573 24.625 26.849 24.875 26.125 24.875C25.401 24.875 24.677 24.625 24.125 24.125C23.573 23.625 22.849 23.375 22.125 23.375C21.401 23.375 20.677 23.625 20.125 24.125C19.573 24.625 18.849 24.875 18.125 24.875C17.401 24.875 16.677 24.625 16.125 24.125C15.573 23.625 14.849 23.375 14.125 23.375C13.401 23.375 12.677 23.625 12.125 24.125C11.573 24.625 10.849 24.875 10.125 24.875" stroke="#cda24b" strokeWidth="2" />
                </g>
            </svg>,
            "image": amenities_img8,
            "name": "Infinity Swimming Pool",
            "description": "A covered pool promising you a refreshing dip in the water along with gorgeous views of the horizon that are sure to soothe your mind, bod and soul",
        }
    ]
}