const languages = ({ languages }) => {
    return (

        <div className='languages'>
            <h1 className="languages_header">My Tech Stack</h1>
            <div className="languages-grid">
                {languages.map((language) => (
                    <div className="lang-box" key={language.id}>
                        <img src={language.img} alt={language.name} />
                        <div className="info">
                            <h1>{language.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default languages;