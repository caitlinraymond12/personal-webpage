import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Flipcard = () => {
    return ( 
        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h3>Contact Me</h3>
                            </div>
                            <div class="flip-card-back">
                                <a href="/" rel="noopener" target = '_blank'><FaGithub className="github-icon-2" / ></a>
                                <a href="/" rel="noopener" target = '_blank'><FaLinkedin className="linkedin-icon-1" / ></a>
                            </div>
                        </div>
        </div>
     );
}
 
export default Flipcard;