import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Accomplishments", "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Portfolio website",
        description : "The introduction of Next.js app routing presented me with the ideal prospect to develop an exceptional portfolio. As such, I embarked on a series of steps to achieve this objective.",
        tech : [ "Next js 13", "Tailwind CSS", "Express js", "MongoDB" ],
        code : 'https://github.com/top-web-talent/portfolio.git',
        live : 'https://rodolfobenjamim.com',
        thumnail : "portfolio.png",
        featured : true
    },

    {
        title : "Fireflies.ai",
        description : "Fireflies: AI meeting assistant Designed and developed the core architecture of Fireflies, an AImeeting assistant,",
        tech : [ "React.js", "Vue.js", "AngularJS",  "Web3.js", "Django ...." ],
        live : 'https://fireflies.ai/',
        thumnail : "fireflies.png",
        featured : true
    },

    {
        title : "Dextra",
        description : "Led the development of Dextra, a next-generation e-commerce platform, by collaborating with cross-functional teams to design and implement the core architecture.",
        tech : [ "React", "core-js", "Lodash", "Squarespace", "Priority Hints ..." ],
        live : 'airebix.com',
        thumnail : "dextra.png",
        featured: true
    },
]