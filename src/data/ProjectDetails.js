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



library.add(far, fas);

export const Projects = [
    {
        title: "Corporate Space",
        id: "01",
        description: "The Z2, Corporate Space is our newest project in construction, offering a state-of-the-art space for businesses and corporations to thrive. This stunning 32-story building boasts a grand height of 12 feet per floor, providing space for businesses of all sizes",
        location: "Thaltej, Ahmedabad",
        status: "Newly Launched",
        link: "/corporate-Space",
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
                1: "Level basement parking"
            },
            {
                0: 2,
                1: "Side road corners"
            },
        ]
    },
    {
        title: "Luxurious Living",
        id: "02",
        description: "Introducing our latest project, Z Luxuria a luxurious residential tower that will set new standards for opulent living in Ahmedabad. This magnificent 33-story tower offers 56 units with world-class amenities and stunning architectural design.",
        location: "Thaltej, Ahmedabad",
        status: "Newly Launched",
        link: "/luxurious-living",
        image: zluxuria_image,
        details: [
            {
                0: 33,
                1: "Stories"
            },
            {
                0: 56,
                1: "Units"
            },
            {
                0: "4, 6 & 7",
                1: "BHK"
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
        { "SVG": <MdOutlineElevator size={50} style={{ 'fill': "#CCA34B" }} />, "name": "2 High Speed Elevators" },
        { "SVG": <TbBrandCouchdb size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "Adjoining Deck" },
        { "SVG": <BiTv size={50} style={{ 'fill': "#CCA34B" }} />, "name": "TV Lounge" },
        { "SVG": <BiParty size={50} style={{ 'fill': "#CCA34B" }} />, "name": "Kitty Party Room" },
        { "SVG": <TbDeviceGamepad size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "Indoor Games Area" },
        { "SVG": <BiSmile size={50} style={{ 'fill': "#CCA34B" }} />, "name": "Toddler's Play Zone" },
        { "SVG": <TbChessKnight size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "Board Games Room" },
        { "SVG": <BiSwim size={50} style={{ 'fill': "#CCA34B" }} />, "name": "SWIMMING POOL" },
        { "SVG": <BiDumbbell size={50} style={{ 'fill': "#CCA34B" }} />, "name": "GYM" },
        { "SVG": <GiHairStrands size={50} style={{ 'fill': "#CCA34B" }} />, "name": "Salon" },
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