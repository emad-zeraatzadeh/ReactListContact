import React, {useEffect, useState} from 'react';

export const ContactInput = ({placeholder, changeHandler, value}) => {


    return (
        <input
            className="form__input"
            type="text"
            value={value}
            onChange={changeHandler}
            placeholder={placeholder}
            required
        />
    );
};