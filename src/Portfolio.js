import PortfolioItem from "./PortfolioItem";
import projects from "./data/projectData"


const Portfolio = () => {

    return ( 
        <div className = "portfolio">
            <div className = "header">
                <h1>Portfolio</h1>
            </div>
            <PortfolioItem portfolios = {projects} />
        </div>
     );
}
 
export default Portfolio;