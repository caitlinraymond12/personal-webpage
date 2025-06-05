import { FaGithub } from 'react-icons/fa';

const PortfolioItem = ({portfolios}) => {


    return ( 
        <div className ='portfolioItem'>
            { portfolios.map((portfolio) => (
                <div className = 'portfolio-list' key={portfolio.id}>
                    <div class="container">
                        <img src={portfolio.img}/>
                        <div class="middle">
                            <a href={portfolio.link} rel="noopener" target = '_blank'><FaGithub className="github-icon-1" / ></a>
                        </div>
                    </div>
                    <div className = "info">
                        <h1>{portfolio.name}</h1>
                        <p>{portfolio.description}</p> 
                    </div>
                 </div>
            ))}
        </div>
     );
}
 
export default PortfolioItem;



/*

    return ( 
        <div className ='portfolioItem'>
            { portfolios.map((portfolio) => (
                <div className = 'portfolio-list' key={portfolio.id}>
                    <img src={portfolio.img}/>
                    <h1>{portfolio.name}</h1>
                    <p>{portfolio.description}</p> 
                 </div>
            ))}
        </div>
     );
}
 
*/