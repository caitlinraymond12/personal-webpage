import mapImg from '../images/shortestPath.png'
import portImg from '../images/portugal.png'
import calcImg from '../images/superCalc.png'
import webImg from '../images/website.png'
import gameImg from '../images/game.png'
import nimImg from '../images/nim.jpg'
import queenImg from '../images/queens.jpg'
import danceImg from '../images/dance.png'
import rImg from '../images/chart.png'
import caseImg from '../images/caseStudy.png'
import piczaImg from '../images/picza.png'
import cpuImg from '../images/cpu.png'
import ioImg from '../images/io.png'
import myShellImg from '../images/myshell.png'
import stopwatchImg from '../images/stopwatch.png'

import { FaPython, FaJs, FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { PiFileCpp, PiFileCSharp, PiFileC } from 'react-icons/pi';
import { SiRstudioide } from 'react-icons/si'
import { FaMicrochip } from "react-icons/fa6";



const projects = [
   {
      name: "Shortest Path",
      img: mapImg,
      description: "A C++ implementation of a GPS navigation system that recreates core Google Maps functionality using Dijkstra's algorithm. The program processes binary map data to visualize the US road network and calculates the optimal route between any two cities, accounting for highways and local roads. It features a custom graphical interface that renders the map and highlights the shortest path in red, while simultaneously outputting detailed turn-by-turn driving instructions.",
      link: "https://github.com/caitlinraymond12/projects/tree/main/C%2B%2B%20Projects/shortest-path-on-map/README.md",
      language: [PiFileCpp],
      tags: ["C++"],
      date: "11/2024",
      id: 1
   },

   {
      name: "Practice Portuguese Verbs",
      img: portImg,
      description: "An interactive language learning tool built in C++ designed to help users master Portuguese verb conjugations. The program focuses on the top 100 most frequently used verbs, testing users on their ability to translate and conjugate across multiple tenses including past, present, and future. It provides immediate feedback to reinforce learning",
      link: "https://github.com/caitlinraymond12/projects/tree/main/C%2B%2B%20Projects/practice-portuguese/README.md",
      language: [PiFileCpp],
      tags: ["C++"],
      date: "12/2024",
      id: 2
   },

   {
      name: "Unbeatable Nim AI",
      img: nimImg,
      description: "A strategic implementation of the game of Nim powered by an unbeatable AI agent using the Minimax algorithm. The agent analyzes hundreds of potential future game states in real-time to make optimal moves, ensuring it selects the winning strategy whenever possible. The game features three difficulty setting, Easy, Medium, and Impossible, implemented by adjusting the depth of the AI's search tree.",
      link: "https://github.com/caitlinraymond12/projects/tree/main/Python%20Projects/minimax/README.md",
      language: [FaPython],
      tags: ["Python"],
      date: "04/2024",
      id: 3
   },
   {
      name: "Personal Website",
      img: webImg,
      description: "Learn more about me in this responsive personal portfolio website designed and built from scratch using React, HTML, and CSS. This project showcases my journey into web development, starting with a custom mockup in Figma and implemented on my own through in-depth research about React and web development fundamentals. It highlights my technical projects and skills within a clean interface that demonstrates my ability to translate design concepts into functional code",
      link: "https://github.com/caitlinraymond12/personal-webpage",
      language: [FaJs, FaHtml5, FaCss3],
      tags: ["JavaScript", "React"],
      date: "07/2025",
      id: 4
   },
   {
      name: "Astro Quest",
      img: gameImg,
      description: "A challenging 2D platformer developed in Unity that tasks players with navigating an astronaut through a hostile alien environment. Players must traverse four increasingly difficult underground levels filled with unique enemies, lava pits, and platforming puzzles to repair their spaceship. The game features hand-drawn characters, animated sprites, and responsive controls, offering a polished gameplay experience available directly in the browser. Click on the controller icon to play now!",
      link: "https://github.com/caitlinraymond12/Astro-Quest",
      play: "https://caitlinraymond.itch.io/astro-quest",
      language: [PiFileCSharp],
      tags: ["C#", "Unity"],
      date: "05/2025",
      id: 5
   },
   {
      name: "N-Queens Problem",
      img: queenImg,
      description: "A highly optimized Python solver for the classic N-Queens puzzle, utilizing a best-first search algorithm with a conflict-based heuristic. The program efficiently handles large-scale boards, solving N=30 in under a second and scaling up to N=100 in approximately 20 seconds. This project demonstrates advanced algorithm design and optimization techniques for solving constraint satisfaction problems.",
      link: "https://github.com/caitlinraymond12/projects/tree/main/Python%20Projects/n-queens-problem/README.md",
      language: [FaPython],
      tags: ["Python"],
      date: "03/2025",
      id: 6
   },
   {
      name: "Unlimited Magnitude Calculator",
      img: calcImg,
      description: "A high-precision C++ calculator designed to overcome standard data type limitations by treating numbers as arrays of characters. This approach allows for computations on integers of arbitrary size, limited only by the system's available memory. It supports complex operations such as factorials of large numbers, showcasing efficient memory management and custom arithmetic algorithm implementation. It is able to compute all 869 digits of the factorial of 400 in just a few seconds!",
      link: "https://github.com/caitlinraymond12/projects/tree/main/C%2B%2B%20Projects/unlimited-calculator/README.md",
      language: [PiFileCpp],
      tags: ["C++"],
      date: "04/2024",
      id: 7
   },
   {
      name: "Memory Dance Floor",
      img: danceImg,
      description: "A fast-paced memory functionality minigame developed in Unity and C# for the 'Answer Campus' project by NERDLab. Players must memorize and replicate complex light patterns on a dance floor within a 90-second time limit while avoiding dynamic obstacles. The game emphasizes quick reflexes and pattern recognition, serving as an engaging component within the larger educational game ecosystem.",
      link: "https://github.com/caitlinraymond12/NERDLab",
      play: "https://caitlinraymond.itch.io/memory-dance",
      language: [PiFileCSharp],
      tags: ["C#", "Unity"],
      date: "06/2025",
      id: 8
   },
   {
      name: "Various R Projects",
      img: rImg,
      description: "A collection of data science projects demonstrating statistical analysis and visualization proficiency using R. Key works include analyzing the correlation between hurricane intensity and air pressure, simulating the Monty Hall probability, and predicting Old Faithful eruption intervals. These projects utilize detailed data visualizations and statistical models to derive meaningful insights from complex datasets.",
      link: "https://github.com/caitlinraymond12/projects/tree/main/RStudio",
      language: [SiRstudioide],
      tags: ["R"],
      date: "09/2024",
      id: 9
   },
   {
      name: "Case Study",
      img: caseImg,
      description: "A comprehensive marketing analytics case study completed as the capstone for the Google Data Analytics Certificate. Acting as a junior analyst, I processed and analyzed large datasets to identify behavioral differences between casual riders and annual members of a bike-sharing company. The project culminated in data-driven recommendations and visualizations designed to convert casual users into long-term subscribers",
      link: "https://github.com/caitlinraymond12/projects/tree/main/RStudio/Case%20Study",
      language: [SiRstudioide],
      tags: ["R"],
      date: "08/2024",
      id: 10
   },
   {
      name: "Picza",
      img: piczaImg,
      description: "A collaborative web application where I led the development of the 'Competitions' feature, enabling users to participate in food-based challenges. This React-based project involved significant code refactoring, reducing codebase complexity by consolidating logic from 12 files into 4 and standardizing formatting. My contributions improved the application's maintainability and enhanced the user experience through a more streamlined interface.",
      link: "https://github.com/GG1627/Picza",
      language: [FaReact],
      tags: ["React", "JavaScript"],
      date: "07/2025",
      id: 11
   },
   {
      name: "CPU Simulator",
      img: cpuImg,
      description: "A fully functional CPU simulator designed and implemented using Verilog. It consists of a control unit and datapath, and is able to execute a custom instruction set. The project features a custom-designed Arithmetic Logic Unit (ALU), register file, and control unit integrated into a complete processor architecture. It demonstrates a deep understanding of digital logic design, computer organization, and hardware description languages.",
      link: "https://github.com/ivy-yenyen/414_Final_Project",
      language: [FaMicrochip],
      tags: ["Verilog"],
      date: "11/2025",
      id: 12
   },
   {
      name: "Stopwatch on Nexys A7",
      img: stopwatchImg,
      description: "A hardware-based stopwatch implementation running on the Nexys A7 FPGA board, developed using Verilog. The project utilizes clock division techniques to transform the board's high-frequency clock signal into precise timekeeping for a 7-segment display. It showcases practical skills in digital circuit design, timing methodology, and hardware-software integration.",
      link: "https://github.com/caitlinraymond12/projects/tree/main/Verilog%20Projects/Stop%20Watch",
      language: [FaMicrochip],
      tags: ["Verilog"],
      date: "10/2025",
      id: 13
   },
   {
      name: "Recreating the IO library in C",
      img: ioImg,
      description: "A low-level system programming project that recreates core functions of the C standard Input/Output library. I implemented my own versions of printf, scanf, and fopen to deconstruct and understand file handling and buffer management under the hood. This project highlights a strong grasp of memory manipulation, pointers, and the internal workings of the C runtime environment.",
      link: "https://github.com/caitlinraymond12/projects/tree/main/C/Recreating%20IO%20Library",
      language: [PiFileC],
      tags: ["C"],
      date: "10/2025",
      id: 14
   },
   {
      name: "Creating a Shell in C",
      img: myShellImg,
      description: "A custom command-line shell implemented in C that mimics the functionality of standard Unix shells like Bash. It features robust process management including job control, command execution, history tracking, and tab completion. This project demonstrates advanced knowledge of system calls, process creation, and signal handling within a UNIX environment.",
      link: "https://github.com/caitlinraymond12/projects/tree/main/C/Creating%20a%20Shell%20using%20C",
      language: [PiFileC],
      tags: ["C"],
      date: "11/2025",
      id: 15
   }
];

export default projects;