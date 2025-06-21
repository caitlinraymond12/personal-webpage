import Flipcard from "./Flipcard";
import { ContactMe } from "./ContactMe";


const Contact = () => {
    return ( 
        <div className = "contact">
            <h1>Let's Connect!</h1>
            <div className = "reasons">
                <div className = "one">
                    <p>Interested in hearing more about my projects?</p>
                    <Flipcard />
                </div>
                <div className = "two">
                    <p>Have an idea for a new project and need a collaborator?</p>
                    <Flipcard />
                </div>
                <div className = "three">
                    <p>Simply want to have a talk about the tech world?</p>
                    <Flipcard />
                </div>
            </div>
            <div className = "contact-form">
                <div className = "info">
                    <h2>Talk to you soon!</h2>
                    <p>Want to send me a message? Fill out the following form to quickly and easily send me a message directly in browser. </p>
                </div>
                <div className = "form">
                    <ContactMe />
                </div>
            </div>
        </div>
     );
}
 
export default Contact;