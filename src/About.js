import headshot from './images/Headshot2.JPG'
import language from './data/languageData'
import Languages from './Languages'

const About = () => {
    return (
        <div classNae = "aboutOuter">
            <div className = "about">
                <div className = "info">
                    <h1>About</h1>
                    <p>Hello! My name is Caitlin Raymond, I'm a junior at the University of Miami studying computer engineering with a minor in interactive media. Going into college, I didn't know much about the tech world. I had taken an introductory computer science class in highschool and decided coding was a lot of fun, so I decided to explore that path more when selecting my major. That descion ended up being the best decsion of my life. In just two years at the University of Miami, I have learned five different coding languages, worked on countless projects, and joined many different tech based organizations. I'm a very creative person and I love learning new skills, so it's very exciting to me to be able to apply what I've learned in the classroom to my own personal projects and be proud of what I've created. My favorite thing about what I do is that if I want something to exist, I can create it myself, and can create it exactly how I want it to be.  </p>
                </div>
                <div className = "headshot">
                    <img src={headshot} alt="headshot" />
                </div>
            </div>
            <Languages languages={language} / >
        </div>
      );
}
 
export default About;