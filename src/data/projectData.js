import mapImg from '../images/shortestPath.png'
import portImg from '../images/portugal.png'
import calcImg from '../images/superCalc.png'
import webImg from '../images/website.png'
import gameImg from '../images/game.png'
import nimImg from '../images/nim.png'
import queenImg from '../images/queens.png'
import danceImg from '../images/dance.png'
import rImg from '../images/hurricane.png'
import caseImg from '../images/caseStudy.png'
import piczaImg from '../images/picza.png'

import { FaPython, FaJs, FaHtml5, FaCss3, FaReact} from 'react-icons/fa';
import { PiFileCpp, PiFileCSharp } from 'react-icons/pi';
import { SiRstudioide } from 'react-icons/si'


const projects = [
    {
       name: "Shortest Path",
       img: mapImg,
       description: "This program is essentially Google maps recreated in C++. It utilizes Dikstra's algorithm to find the shortest distance between any two cities in the continental United States using only information about roads, highways, and nearest named cities. It outputs driving instructions for the optimal roads and it takes in binary data in order to render a map of the United States, then draws a red line on top visually showing which roads are to be taken.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/C%2B%2B%20Projects/shortest-path-on-map/README.md",
       language: [PiFileCpp],
       id:1
    },

    {
       name: "Practice Portuguese Verbs",
       img: portImg,
       description: "The purpose of this program is to help the user learn portuguese by first focusing on learning the verbs. The top 100 most used verbs are conjugated in both english and portuguese, and in the past, past perfect, present, future, and conditional. Then, the program outputs a verb, and the user must type its translation in the correct form.  ",
       link: "https://github.com/caitlinraymond12/projects/tree/main/C%2B%2B%20Projects/practice-portuguese/README.md",
       language: [PiFileCpp],
       id:2
    },

    {
       name: "Unbeatable Nim AI",
       img: nimImg,
       description: "Try and beat this agent in a game of Nim! This agent uses the minimax principle to look ahead at hundreds of possible next moves, and select which one will result in the best outcome in just a matter of seconds. There are three possible modes to play in: easy, medium, and impossible. Each mode will look ahead a different amount of steps based on the difficulty level, and will choose the best move based on what it has seen.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/Python%20Projects/minimax/README.md",
       language: [FaPython],
       id: 3
    },
    {
       name: "Personal Website",
       img: webImg,
       description: "Learn more about me in my first project experimenting with web developement! This website was developed with CSS, HTML, and Javascript using React and was built completely by me, by hand, starting only with using create-react-app, and based on mockups that I designed in Figma.",
       link: "https://github.com/caitlinraymond12/personal-webpage",
       language: [FaJs, FaHtml5, FaCss3],
       id:4
    },
    {
       name: "Astro Quest",
       img: gameImg,
       description: "Can you complete these four underground levels and make it back to your spaceship? AstroQuest is a 2D platformer developed in Unity that follows an astronaut that is stuck on an alien planet, and must traverse through four underground levels full of creatures, spikes, and lava, in order to make it back to his spaceship and fly home. Click on the controller icon to play now!",
       link: "https://github.com/caitlinraymond12/Astro-Quest",
       play: "https://caitlinraymond.itch.io/astro-quest",
       language: [PiFileCSharp],
       id:5
    },
    {
       name: "N-Queens Problem",
       img: queenImg,
       description: "This program is able to successfully solve the N-queens problem by using a best first search where the heuristic defined as the number of conflicts on the chess board. It can solve boards with N up to 30 in under a second, and even with N as high as 100 it only takes about 20 seconds.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/Python%20Projects/n-queens-problem/README.md",
       language: [FaPython],
       id:6
    },
    {
       name: "Unlimited Magnitude Calculator",
       img: calcImg,
       description: "What's the factorial of 100? Or even 400? Your TI-84 might not have the answer, but my unlimited magnitude calculator does! This calculator stores each number as an array of characters, and does computation with the ASCII values of those characters, allowing it to compute and store huge numbers.The only limitation is the avaliable memory on the computer being used.",
       link: "https://github.com/caitlinraymond12/projects/tree/main/C%2B%2B%20Projects/unlimited-calculator/README.md",
       language: [PiFileCpp],
       id:7
    },
    {
       name: "Memory Dance Floor",
       img: danceImg,
       description: "This game was developed as a minigame to be incorporated into Answer Campus, a game being developed by NERDLab here at Univeristy of Miami. The game shows a dance floor, and a pattern will light up on it. You must click the pattern in the correct order while avoiding the other people,and complete as many as you can in just 90 seconds.",
       link: "https://github.com/caitlinraymond12/NERDLab",
       play: "https://caitlinraymond.itch.io/memory-dance",
       language: [PiFileCSharp],
       id:8
    },
    {
       name: "Various R Projects",
       img: rImg,
       description: "Homework and Labs from a previous data science class that explored many statistical topics. Data visualization was used to show the relationship between hurricanes and air pressure, simulation was used to recreate the Monty Hall Problem, and statistics were used to predict the next time Old Faithful would erupt. ",
       link: "https://github.com/caitlinraymond12/projects/tree/main/RStudio",
       language: [SiRstudioide],
       id:9
    },
    {
       name: "Case Study",
       img: caseImg,
       description: "This is the case study that I worked on at the end of the Google Data Analytics Course. The purpose was to pose as a marketing agent for a bike sharing company and analyze the given data to determine the differences between casual and annual members, and determine the steps to be taken to convert the casual members to the more profitable annual members. ",
       link: "https://github.com/caitlinraymond12/projects/tree/main/RStudio/Case%20Study",
       language: [SiRstudioide],
       id:10
    },
    {
       name: "Picza",
       img: piczaImg,
       description: "This is a project that I collaborated on with my good friend and fellow computer engineer Gael Garcia. My contribution was creating the afternoon and night competitions based on his already created morning competition, consolidating 12 files into just 4, and fixing various formatting issues throughout the app.",
       link: "https://github.com/GG1627/Picza",
       language: [FaReact],
       id:11
    }
];

export default projects;