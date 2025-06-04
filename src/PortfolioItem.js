import image from './images/shortestPath.png'

const PortfolioItem = ({portfolios}) => {


    return ( 
        <div className ='portfolioItem'>
            { portfolios.map((portfolio) => (
                <div className = 'portfolio-list' key={portfolio.id}>
                    <div class="container">
                        <img src={portfolio.img}/>
                        <div class="middle">
                            <div class="text">John Doe</div>
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