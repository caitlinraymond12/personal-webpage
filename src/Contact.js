import Flipcard from "./Flipcard";


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
            <div className = "info">
                <h2>Talk to you soon!</h2>
                <div className = "contact">
                    <h3>Github:</h3>
                    <h3>Email:</h3>
                    <h3>LinkedIn:</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;