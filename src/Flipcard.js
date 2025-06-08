import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Flipcard = () => {
    return ( 
        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h3>Contact Me</h3>
                            </div>
                            <div class="flip-card-back">
                                <a href="https://github.com/caitlinraymond12" rel="noopener" target = '_blank'><FaGithub className="github-icon-2" / ></a>
                                <a href="https://www.linkedin.com/in/caitlinaraymond/" rel="noopener" target = '_blank'><FaLinkedin className="linkedin-icon-1" / ></a>
                                <a href="mailto:caitlinraymond13@gmail.com"><MdEmail className="email-icon-1" / ></a>
                            </div>
                        </div>
        </div>
     );
}
 
export default Flipcard;