import React, { useState } from 'react';
const VacancyCard = ({ vacancy }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const ioItemClass = `main-vacancies__description-block ${isOpen ? 'open' : ''}`;
    const ioButtonCloseClass = `btn-More__details btn_close ${isOpen ? 'open' : ''}`;
    const ioButtonOpenClass = `btn-More__details btn_open ${isOpen ? 'open' : ''}`;
    return (
        <div className='main-vacancies'>
            <div className='main-vacancies__container'>
                <div className='vacancies-head'>
                    <h2 className='vacancies-head__name'>{vacancy.name}</h2>
                    <button className='vacancies-head__btn global-btn'>Respond</button>
                </div>
                <div className='vacancies-data'>
                    <div className='vacancies-data__point'>
                        <p className='vacancies-data__point-title'>Form</p>
                        <p className='vacancies-data__point-data'>{vacancy.employment.name}</p>
                    </div>
                    <div className='vacancies-data__point'>
                        <p className='vacancies-data__point-title'>Company</p>
                        <p className='vacancies-data__point-data'>{vacancy.employer.name}</p>
                    </div>
                    <div className='vacancies-data__point'>
                        <p className='vacancies-data__point-title'>Adress</p>
                        <p className='vacancies-data__point-data'>{vacancy.area.name}</p>
                    </div>
                    <div className='vacancies-data__point'>
                        <p className='vacancies-data__point-title'>Experience</p>
                        <p className='vacancies-data__point-data'>{vacancy.experience.name}</p>
                    </div>
                </div>
                <div className={ioItemClass}>
                    <div className="main-vacancies__description" >
                        <div className="main-vacancies__description-text">
                            <div className="main-vacancies__description-text1">
                                <p className="main-vacancies__text-title">Что нужно делать:</p>
                                <p className='main-vacancies__text-data'>{vacancy.snippet.responsibility}</p>
                            </div>
                            <div className="main-vacancies__description-text1">
                                <p className="main-vacancies__text-title">Чего мы ждём от кандидата:</p>
                                <p className='main-vacancies__text-data'>{vacancy.snippet.requirement}</p>
                            </div>
                        </div>
                        <div className="main-vacancies__description-shadow"></div>
                    </div>
                    <div className="main-vacancies__description-btn">
                        <p className={ioButtonCloseClass} onClick={handleToggle}>
                            Less details
                            <svg className='main-search__str2' viewBox="0 0 24 24">
                                <path fill="rgb(13, 122, 217)" d="M7.406 9.406l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"></path>
                            </svg>
                        </p>
                        <p className={ioButtonOpenClass} onClick={handleToggle}>
                            More details
                            <svg className='main-search__str2' viewBox="0 0 24 24">
                                <path fill="rgb(13, 122, 217)" d="M7.406 14.594l4.594-4.594 4.594 4.594 1.406-1.406-6-6-6 6z"></path>
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VacancyCard;

