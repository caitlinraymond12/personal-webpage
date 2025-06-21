import mapImg from '../images/shortestPath.png'
import portImg from '../images/portugal.png'
import nimImg from '../images/superCalc.png'
import webImg from '../images/website.png'
import gameImg from '../images/game.png'
import { FaPython, FaJs, FaHtml5, FaCss3} from 'react-icons/fa';
import { PiFileCpp, PiFileCSharp } from 'react-icons/pi';

const projects = [
    {
       name: "Map",
       img: mapImg,
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/shortest-path-on-map",
       language: [PiFileCpp],
       id:1
    },

    {
       name: "Portuguese",
       img: portImg,
       description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/shortest-path-on-map",
       language: [PiFileCpp],
       id:2
    },

    {
       name: "Nim",
       img: nimImg,
       description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
       link: "https://github.com/caitlinraymond12/projects/tree/main/shortest-path-on-map",
       language: [FaPython],
       id: 3
    },
    {
       name: "Website",
       img: webImg,
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       link: "https://github.com/caitlinraymond12/projects/tree/main//unlimited-calculator",
       language: [FaJs, FaHtml5, FaCss3],
       id:4
    },
    {
       name: "Space Platform Game",
       img: gameImg,
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       link: "https://github.com/caitlinraymond12/projects/tree/main//unlimited-calculator",
       language: [PiFileCSharp],
       id:4
    }
];

export default projects;