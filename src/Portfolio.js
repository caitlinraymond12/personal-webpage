import PortfolioItem from "./PortfolioItem";
import projects from "./data/projectData"

const Portfolio = () => {
    
    
    
    return ( 
        <div className = "portfolio">
            <h1>Collection of Projects</h1>
            <PortfolioItem portfolios = {projects} />
        </div>
     );
}
 
export default Portfolio;