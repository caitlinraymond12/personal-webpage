import { useState, useMemo } from 'react';
import PortfolioItem from "./PortfolioItem";
import projects from "./data/projectData"

const Portfolio = () => {
    const [sortType, setSortType] = useState('date-desc');
    const [filterTech, setFilterTech] = useState('All');


    const uniqueTags = useMemo(() => {
        const tags = new Set();
        projects.forEach(project => {
            if (project.tags) {
                project.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
    }, []);


    const visibleProjects = useMemo(() => {
        let result = [...projects];


        if (filterTech !== 'All') {
            result = result.filter(project =>
                project.tags && project.tags.includes(filterTech)
            );
        }


        result.sort((a, b) => {
            switch (sortType) {
                case 'date-desc': // Newest first
                    return parseDate(b.date) - parseDate(a.date);
                case 'date-asc': // Oldest first
                    return parseDate(a.date) - parseDate(b.date);
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'lang-asc': // Sort by first tag
                    const langA = a.tags ? a.tags[0] : '';
                    const langB = b.tags ? b.tags[0] : '';
                    return langA.localeCompare(langB);
                default:
                    return 0;
            }
        });

        return result;
    }, [sortType, filterTech]);

    // Helper to parse "MM/YYYY" into a Date object (using 1st of the month)
    function parseDate(dateStr) {
        if (!dateStr) return 0;
        const [month, year] = dateStr.split('/');
        return new Date(year, month - 1);
    }

    return (
        <div className="portfolio">
            <div className="header">
                <h1>Portfolio</h1>
            </div>

            <div className="controls" style={{ marginBottom: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div className="control-group">
                    <label htmlFor="sort-select" style={{ marginRight: '10px' }}>Sort By:</label>
                    <select
                        id="sort-select"
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                        style={{ padding: '5px', borderRadius: '5px' }}
                    >
                        <option value="date-desc">Date (Newest)</option>
                        <option value="date-asc">Date (Oldest)</option>
                        <option value="name-asc">Name (A-Z)</option>
                        <option value="name-desc">Name (Z-A)</option>
                        <option value="lang-asc">Language</option>
                    </select>
                </div>

                <div className="control-group">
                    <label htmlFor="filter-select" style={{ marginRight: '10px' }}>Filter By:</label>
                    <select
                        id="filter-select"
                        value={filterTech}
                        onChange={(e) => setFilterTech(e.target.value)}
                        style={{ padding: '5px', borderRadius: '5px' }}
                    >
                        <option value="All">All Languages</option>
                        {uniqueTags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>

            <PortfolioItem portfolios={visibleProjects} />
        </div>
    );
}

export default Portfolio;