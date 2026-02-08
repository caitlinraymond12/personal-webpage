import headshot from './images/Headshot2.JPG'
import language from './data/languageData'
import Languages from './Languages'

const About = () => {
    return (
        <div classNae="aboutOuter">
            <div className="about">
                <div className="info">
                    <h1>About</h1>
                    <p> Hello! My name is Caitlin Raymond. I'm a junior at the University of Miami studying computer engineering
                        with a minor in interactive media. One thing about me is I love learning and am constantly chasing the
                        thrill of facing and overcoming new challenges. I am constantly learning a new software or coding in a
                        new programming language, so I know that the ever-evolving tech world is where I belong. In just three
                        years at the University of Miami, I have learned 10 different programming languages, completed countless
                        projects involving pure software and software/hardware interations, interned at a remote start up based
                        here in Miami, have been involved in two different research projects, and helped develop a published
                        game on Unity. I'm a very creative person and I love learning new skills, so it's exciting to me to be
                        able to apply what I've learned in the classroom to outside projects and be proud of what I've learned
                        and created. My favorite thing about programming is if I want something to exist, I can create it myself,
                        and create it exactly how I want it to be.  </p>
                </div>
                <div className="headshot">
                    <img src={headshot} alt="headshot" />
                </div>
            </div>
            <section id="languages">
                <Languages languages={language} />
            </section>
        </div>
    );
}

export default About;