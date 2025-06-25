import mapImg from '../images/shortestPath.png'
import portImg from '../images/portugal.png'
import calcImg from '../images/superCalc.png'
import webImg from '../images/website.png'
import gameImg from '../images/game.png'
import nimImg from '../images/nim.png'
import queenImg from '../images/queens.png'
import { FaPython, FaJs, FaHtml5, FaCss3} from 'react-icons/fa';
import { PiFileCpp, PiFileCSharp } from 'react-icons/pi';

const projects = [
    {
       name: "Shortest Path",
       img: mapImg,
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/C%2B%2B%20Projects/shortest-path-on-map/README.md",
       language: [PiFileCpp],
       id:1
    },

    {
       name: "Practice Portuguese Verbs",
       img: portImg,
       description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/C%2B%2B%20Projects/practice-portuguese/README.md",
       language: [PiFileCpp],
       id:2
    },

    {
       name: "Unbeatable Nim AI",
       img: nimImg,
       description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
       link: "https://github.com/caitlinraymond12/projects/tree/main/Python%20Projects/minimax/README.md",
       language: [FaPython],
       id: 3
    },
    {
       name: "Personal Website",
       img: webImg,
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       link: "https://github.com/caitlinraymond12/personal-webpage",
       language: [FaJs, FaHtml5, FaCss3],
       id:4
    },
    {
       name: "Astro Quest",
       img: gameImg,
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t",
       play: "https://caitlinraymond.itch.io/astro-quest",
       language: [PiFileCSharp],
       id:4
    },
    {
       name: "N-Queens Problem",
       img: queenImg,
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/Python%20Projects/n-queens-problem/README.md",
       language: [FaPython],
       id:5
    },
    {
       name: "Unlimited Magnitude Calculator",
       img: calcImg,
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/C%2B%2B%20Projects/unlimited-calculator/README.md",
       language: [PiFileCpp],
       id:6
    }
];

export default projects;