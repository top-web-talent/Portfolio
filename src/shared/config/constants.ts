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
        thumnail : "portfolio-v2.png",
        featured : true
    },

    {
        title : "DG Team",
        description : "'Dg team' an company management system. I use this system for front end “Next js, Tailwind CSS, Axios, Redux, Redux-thunk, Formik, Yup, react-query” and for Backend “Node js, Express js, MongoDB, Socket.io, webRtc”",
        tech : [ "Next js", "tailwind CSS", "Redux", "Node js" ],
        live : 'https://dgteam.vercel.app/',
        thumnail : "dg-team.png",
        featured : true
    },

    {
        title : "Airebix",
        description : "Airebix is an web development agency website. ",
        tech : [ "Next js", "tailwind CSS", "Redux", "Node js" ],
        live : 'airebix.com',
        thumnail : "airebix.png",
    },

    {
        title : "Amazon clone",
        description : "I clone World Largest E-commerce website Amazon using react js",
        tech : [ "React js", "Redux" ],
        code : 'https://github.com/raihanhosen011/amazon-nw',
        live : 'https://amazon-nw.vercel.app/',
        thumnail : "amazon.png"
    },

    {
        title : "Powermall",
        description : "This is an largest e-commerce website of bangladesh",
        tech : [ "next js", "tailwind css", "MERN" ],
        live : 'https://powermall.com',
        thumnail : "powermall.png"
    }
]