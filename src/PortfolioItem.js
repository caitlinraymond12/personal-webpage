import { FaGithub, FaGamepad } from 'react-icons/fa';


const PortfolioItem = ({portfolios}) => {


    return ( 
        <div className ='portfolioItem'>
            { portfolios.map((portfolio) =>(
                <div className = 'portfolio-list' key={portfolio.id}>
                    <div class="container">
                        <img src={portfolio.img}/>
                        <div class="middle">
                            <a href={portfolio.link} rel="noopener" target = '_blank'><FaGithub className="github-icon-1" / ></a>
                            {portfolio.play && <a href={portfolio.play} rel="noopener" target = '_blank'><FaGamepad className="game-icon" / ></a>}
                        </div>
                    </div>
                    <div className = "info">
                        <h2>{portfolio.name}</h2>
                        <p>{portfolio.description}</p>
                        <div className = "language-icons">
                            {portfolio.language?.map((IconComponent, index) =>(
                                <IconComponent key={index} className="language-icon" />
                            ))}
                        </div>
                    </div>
                 </div>
            ))}
        </div>
     );
}
 
export default PortfolioItem;



