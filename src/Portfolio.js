import PortfolioItem from "./PortfolioItem";
import projects from "./data/projectData"

const Portfolio = () => {
    
    
    
    return ( 
        <div className = "portfolio">
            <PortfolioItem portfolios = {projects} />
        </div>
     );
}
 
export default Portfolio;