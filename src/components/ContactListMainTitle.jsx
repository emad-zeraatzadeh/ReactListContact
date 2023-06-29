import React from 'react';

export const ContactListMainTitle = ({value, icon}) => {
    return (
        <div className="main__item">
            <span className="item__icon">{icon}</span>
            <span className="item__title">{value}</span>
        </div>
    );
};

