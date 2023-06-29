import React from 'react';

export const ContactSearch = ({searchHandler,value}) => {


    return (
        <div className="search">
            <input
                className="search__input"
                onChange={searchHandler}
                value={value}
                type="text"
                placeholder="Search contact"/>
        </div>
    );
};