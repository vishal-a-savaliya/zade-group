import z2_image from '../image/z2/8.jpeg';
import zluxuria_image from '../image/zluxuria/1_lite.jpeg';
import {
    faBus,
    faBuilding,
    faTree,
    faChild,
    faGazebo,
    faWheelchair,
    faBanquet,
    faShieldAlt,
    faUmbrellaBeach,
    faCoffee,
    faUserTie,
    faSkating,
    faBook,
    faBirthdayCake,
    faCar,
    faBed,
    faHotTub,
    faPoolTable,
    faChess,
    faDumbbell,
    faSwimmingPool,
    faGamepad,
    faTableTennis,
    faFilm,
    faSolarPanel,
    faBasketballBall
} from '@fortawesome/free-solid-svg-icons';


export const Projects = [
    {
        title: "Corporate Space",
        id: "01",
        description: "The Corporate Space is our newest project in construction, offering a state-of-the-art space for businesses and corporations to thrive. This stunning 32-story building boasts a grand height of 12 feet per floor, providing ample space for businesses of all sizes",
        location: "Thaltej, Ahmedabad",
        status: "Newly Launched",
        link: "",
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
        link: "",
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


export const Aminities = {
    "zluxuria": {
        "0": { "SVG": faBus, "name": "SCHOOL DROP UP POINT" },
        "1": { "SVG": faBuilding, "name": "DOUBLE HEIGHT ENTRANCE PORCH" },
        "2": { "SVG": faTree, "name": "HARDSCAPE GARDEN" },
        "3": { "SVG": faChild, "name": "CHILDREN PLAY AREA" },
        "4": { "SVG": faGazebo, "name": "GAZEBO" },
        "5": { "SVG": faWheelchair, "name": "SENIOR CITIZEN HANGOUT" },
        "6": { "SVG": faBanquet, "name": "MULTIPURPOSE / BANQUET HALL" },
        "7": { "SVG": faShieldAlt, "name": "SECURITY CABIN" },
        "8": { "SVG": faUmbrellaBeach, "name": "SEATING WITH UMBRELLA" },
        "9": { "SVG": faCoffee, "name": "CAFE AREA" },
        "10": { "SVG": faUserTie, "name": "DRIVER LOUNGE" },
        "11": { "SVG": faSkating, "name": "SKATING RINK" },
        "12": { "SVG": faBook, "name": "LIBRARY" },
        "13": { "SVG": faBirthdayCake, "name": "PARTY LAWN" },
        "14": { "SVG": faCar, "name": "COVERED PARKING" },
        "15": { "SVG": faBed, "name": "3 GUEST BEDROOM" },
        "16": { "SVG": faTree, "name": "SEMI COVERED SEATING AREA WITH LANDSCAPE" },
        "17": { "SVG": faHotTub, "name": "JACUZZI" },
        "18": { "SVG": faPoolTable, "name": "POOL TABLE" },
        "19": { "SVG": faChess, "name": "CARD | CHESS CARROM" },
        "20": { "SVG": faDumbbell, "name": "GYM" },
        "21": { "SVG": faSwimmingPool, "name": "SWIMMING POOL / SPLASH POOL" },
        "22": { "SVG": faGamepad, "name": "GAME ZONE AND CAFÉ" },
        "23": { "SVG": faTableTennis, "name": "TABLE TENNIS" },
        "24": { "SVG": faHotTub, "name": "STEAM ROOM" },
        "25": { "SVG": faFilm, "name": "MINI THEATER" },
        "26": { "SVG": faSolarPanel, "name": "SOLAR PANEL AT ROOFTOP" },
        "27": { "SVG": faBasketballBall, "name": "MULTIPURPOSE COURT" }
    }
}