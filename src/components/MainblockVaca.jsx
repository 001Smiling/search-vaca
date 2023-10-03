import VacancyCard from "./VacancyCard"
import React, { useState, useEffect } from 'react';
function MainblockVaca() {
    const [vacancies, setVacancies] = useState([]);
    const [employmentType, setEmploymentType] = useState("");
    const [filteredVacancies, setFilteredVacancies] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        fetch('https://api.hh.ru/vacancies')
            .then(response => response.json())
            .then(data => {
                setVacancies(data.items);
                setFilteredVacancies(data.items.slice(0, 5));
                if (data.items.length > 5) {
                    setShowMore(true);
                }
            })
            .catch(error => console.log(error));
    }, []);

    const handleSearch = () => {
        const filtered = vacancies.filter(vacancy => (
            employmentType === "" || vacancy.employment.id === employmentType
        ));
        setFilteredVacancies(filtered.slice(0, 5));
        setShowMore(filtered.length > 5);
    };

    const handleShowMore = () => {
        const filtered = vacancies.filter(vacancy => (
            employmentType === "" || vacancy.employment.id === employmentType
        ));
        setFilteredVacancies(filtered.slice(0, filteredVacancies.length + 5));
        setShowMore(filteredVacancies.length + 5 < filtered.length);
    };

    const handleClear = () => {
        setEmploymentType("");
        setSelectedValue("");
        setFilteredVacancies(vacancies.slice(0, 5));
        setShowMore(vacancies.length > 5);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleOptionClick = (value) => {
        setSelectedValue(value);
        setShowDropdown(false)
    };
    return (
        <>
            <h1 className='main-title'>List of vacancies</h1>

            <div className='main-block__search'>
                <div className='main-search'>
                    <div onClick={toggleDropdown}>
                        {showDropdown ? (
                            <div className='main-search__cont'>
                                <p>Form</p>
                                <div className='main-search__title'>
                                    <input className="main-search__input" type="text" placeholder="Not selected" readOnly value={selectedValue} />
                                    <svg className='main-search__str' viewBox="0 0 24 24">
                                        <path fill="rgba(120, 127, 133, 1)" d="M7.406 9.406l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"></path>
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <div className='main-search__cont'>
                                <p className='main-search__cont-title'>Form</p>
                                <div className='main-search__title'>
                                    <input className="main-search__input" type="text" placeholder="Not selected" readOnly value={selectedValue} />
                                    <svg className='main-search__str' viewBox="0 0 24 24">
                                        <path fill="rgba(120, 127, 133, 1)" d="M7.406 14.594l4.594-4.594 4.594 4.594 1.406-1.406-6-6-6 6z"></path>
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                    {showDropdown && (
                        <div className="main-search__options" onChange={(e) => setEmploymentType(e.target.value)}>
                            <div className="main-search__options-type">
                                <input className="main-search__input" type="radio" id="full" name="employmentType" value="full" checked={employmentType === "full"} onClick={() => handleOptionClick("Full time")} />
                                <label className="main-search__label" htmlFor="full">Full time</label>
                            </div>
                            <div className="main-search__options-type">
                                <input className="main-search__input" type="radio" id="half" name="employmentType" value="half" checked={employmentType === "half"} disabled />
                                <label htmlFor="part">Half time</label>
                            </div>
                            <div className="main-search__options-type">
                                <input className="main-search__input" type="radio" id="part" name="employmentType" value="part" checked={employmentType === "part"} onClick={() => handleOptionClick("Part-time")} />
                                <label htmlFor="part">Part time</label>
                            </div>
                        </div>
                    )}
                </div>
                <div className='main-search main-search2'>
                    <div className='main-search__cont'>
                        <p className='main-search__cont-title'>Position</p>
                        <div className='main-search__title'>
                            <input className="text-box" type="text" placeholder="Not selected" readOnly />
                            <svg className='main-search__str' viewBox="0 0 24 24">
                                <path fill="rgba(120, 127, 133, 1)" d="M7.406 14.594l4.594-4.594 4.594 4.594 1.406-1.406-6-6-6 6z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <button onClick={handleSearch} className='main-block__search-btn global-btn blue-button'>Search</button>
            </div>
            <div className='main-search__clear'>
                {employmentType && <p className='main-search__clear-btn' onClick={handleClear}>&#9747; Clear</p>}
            </div>
            {filteredVacancies.length ? (
                filteredVacancies.map(vacancy => <VacancyCard key={vacancy.id} vacancy={vacancy} />)
            ) : (
                <p>Loading vacancies...</p>
            )}
            {showMore && (
                <button className='main-block__showmore global-btn blue-button' onClick={handleShowMore}>Show More</button>
            )}
        </>
    )
}

export default MainblockVaca;