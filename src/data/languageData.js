import cImg from '../images/c.png'
import csharpImg from '../images/csharp.png'
import pythonImg from '../images/python.png'
import javaImg from '../images/javascript.png'
import rImg from '../images/r.png'

const languages = [
    {
       name: "C++",
       img: cImg,
       description: "This is the very first programming language that I really learned, and it was the one I used when learning about data structures and algorithms. In these classes, we weren't allowed to use library includes, meaning if I wanted to use something such as a linked list or a hashmap, I had to create it by hand. This has allowed me to develop a deep understand of how these data strucutues and algorithms work.",
       id:1
    },

    {
      name: "C#",
      img: csharpImg,
      description: "I began learning C# alongside Unity when I joined the game development studio on campus. I grew up loving video games, so being able to see how they could be created and being able to write scripts myself was really exciting for me. It shares similar syntax to C++, which made it easier to code in, allowing me to focus on developing my games. ",
      id:2
    },

    {
      name: "R",
      img: rImg,
      description: "At the begining of my sophmore year, I became interested in data science, and thus, I began to learn R/RStudio. Over the course of the semester, I worked on 18 mini-projects utilizing R, and explore topics relating to prediction, sampling, hypothesis testing, and other important concepts.",
      id:3
    },

    {
       name: "Python",
       img: pythonImg,
       description: "I didn't start learning Python until my sophmore year when I took an Artificial Intelligence class, which required us to create our own simple agents utilizing Python. It was an easy language to pick up, and it felt amazing being able to read the textbook and learn about a concept, and then actually being able to go and code something that follows that concept.",
       id:4
    },

    {
       name: "Javascript",
       img: javaImg,
       description: "I began learning Javascript the summer going into my junior year, as I wanted a project to work on over the summer to keep me stimulated without the traditional class schedule. I learned React with Javascript, along with HTML and CSS in order to create my own personal website and begin to explore the world of web development.",
       id: 5
    }

];

export default languages;