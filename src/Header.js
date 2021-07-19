import React from 'react';
import './Header.css';
import TheatersIcon from '@material-ui/icons/Theaters';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';

const Header = () => {
    return (
        <div className="header-class">
            < TheatersIcon className="theatre"/>
            <span className="header"> Entertainment Hub </span>
            <MovieCreationIcon className="creation"/>
        </div>
        
    )
}

export default Header;
