import z2_image from '../image/z2/8.jpeg';
import zluxuria_image from '../image/zluxuria/1_lite.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AiOutlineCar, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdSecurity, MdOutlineDesk } from 'react-icons/md';
import { GiRoad } from "react-icons/gi";
import { TbBrandCouchdb } from "react-icons/tb";


library.add(far, fas);

export const Projects = [
    {
        title: "Corporate Space",
        id: "01",
        description: "The Corporate Space is our newest project in construction, offering a state-of-the-art space for businesses and corporations to thrive. This stunning 32-story building boasts a grand height of 12 feet per floor, providing ample space for businesses of all sizes",
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
                0: 10000,
                1: "Upto Sq Space"
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
        description: "Introducing our latest project, Luxury Living, a luxurious residential tower that will set new standards for opulent living in Ahmedabad. This magnificent 33-story tower offers 56 units with world-class amenities and stunning architectural design.",
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
        { "SVG": "fa-bus", "name": "SCHOOL DROP UP POINT" },
        { "SVG": "fa-building", "name": "DOUBLE HEIGHT ENTRANCE PORCH" },
        { "SVG": "fa-tree", "name": "HARDSCAPE GARDEN" },
        { "SVG": "fa-child", "name": "CHILDREN PLAY AREA" },
        { "SVG": "fa-home", "name": "GAZEBO" },
        { "SVG": "fa-wheelchair", "name": "SENIOR CITIZEN HANGOUT" },
        { "SVG": "fa-bacon", "name": "MULTIPURPOSE / BANQUET HALL" },
        { "SVG": "fa-shield-alt", "name": "SECURITY CABIN" },
        { "SVG": "fa-umbrella-beach", "name": "SEATING WITH UMBRELLA" },
        { "SVG": "fa-coffee", "name": "CAFE AREA" },
        { "SVG": "fa-user-tie", "name": "DRIVER LOUNGE" },
        { "SVG": "fa-skating", "name": "SKATING RINK" },
        { "SVG": "fa-book", "name": "LIBRARY" },
        { "SVG": "fa-birthday-cake", "name": "PARTY LAWN" },
        { "SVG": "fa-car", "name": "COVERED PARKING" },
        { "SVG": "fa-bed", "name": "3 GUEST BEDROOM" },
        { "SVG": "fa-couch", "name": "SEMI COVERED SEATING AREA WITH LANDSCAPE" },
        { "SVG": "fa-bath", "name": "JACUZZI" },
        { "SVG": "fa-table", "name": "POOL TABLE" },
        { "SVG": "fa-chess", "name": "CARD | CHESS CARROM" },
        { "SVG": "fa-dumbbell", "name": "GYM" },
        { "SVG": "fa-swimming-pool", "name": "SWIMMING POOL / SPLASH POOL" },
        { "SVG": "fa-gamepad", "name": "GAME ZONE AND CAFÉ" },
        { "SVG": "fa-table-tennis", "name": "TABLE TENNIS" },
        { "SVG": "fa-hot-tub", "name": "STEAM ROOM" },
        { "SVG": "fa-film", "name": "MINI THEATER" },
        { "SVG": "fa-solar-panel", "name": "SOLAR PANEL AT ROOFTOP" },
        { "SVG": "fa-basketball-ball", "name": "MULTIPURPOSE COURT" }
    ],
    "Z2": [

        { "SVG": <TbBrandCouchdb size={50} style={{ 'stroke': "#CCA34B" }} />, "name": "Driver Waiting Lounge" },
        { "SVG": <AiOutlineCar size={50} style={{ fill: '#cda24b' }} />, "name": "5 level Basement Parking" },
        { "SVG": <MdSecurity size={50} style={{ fill: '#cda24b' }} />, "name": "Security Cabin" },
        { "SVG": <AiOutlineFundProjectionScreen size={50} style={{ fill: '#cda24b' }} />, "name": "Conference Room" },
        { "SVG": <MdOutlineDesk size={50} style={{ fill: '#cda24b' }} />, "name": "Reception Area" },
        { "SVG": <GiRoad size={50} style={{ fill: '#cda24b' }} />, "name": "Wide Drive Way" },
    ]
}