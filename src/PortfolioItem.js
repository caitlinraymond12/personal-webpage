import image from './images/shortestPath.png'

const PortfolioItem = ({portfolios}) => {


    return ( 
        <div className ='portfolioItem'>
            { portfolios.map((portfolio) => (
                <div className = 'portfolio-list' key={portfolio.id}>
                    <h1>{portfolio.name}</h1>
                    <p>{portfolio.description}</p> 
                        <img src={portfolio.img}/>
                 </div>
            ))}
        </div>
     );
}
 
export default PortfolioItem;