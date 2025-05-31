import headshot from './images/Headshot2.JPG'

const About = () => {
    return (
        <div className = "about">
            <div className = "info">
                <h2>Hello! I'm Caitlin Raymond</h2>
                <p>I am a student at the University of Miami studying Computer Engineering. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className = "headshot">
                <img src={headshot} alt="headshot" />
            </div>
        </div>
      );
}
 
export default About;