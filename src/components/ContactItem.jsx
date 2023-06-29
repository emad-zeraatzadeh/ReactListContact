import React from 'react';

export const ContactItem = ({name, phone, email}) => {


    return (
        <div className="sub__item">
            <span className="item__contact">{name}</span>
            <span className="item__contact">{phone}</span>
            <span className="item__contact">{email}</span>
        </div>
    );
};

