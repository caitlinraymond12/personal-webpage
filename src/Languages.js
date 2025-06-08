const languages = ({languages}) => {
    return ( 
        <div className = 'languages'>
        { languages.map((language) => (
            <div className = "lang-box">
                <img src={language.img}/>
                <div className = "info">
                    <h1>{language.name}</h1>
                    <p>{language.description}</p>
                </div>
            </div>
        ))}
        </div>
     );
}
 
export default languages;