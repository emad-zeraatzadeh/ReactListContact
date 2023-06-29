import React, {useState} from 'react';
import {ContactForm} from "./ContactForm.jsx";
import {ContactList} from "./ContactList.jsx";

export const ContactApp = () => {

    const [term, useTerm] = useState([]);

    const handleContactAdd = (list) => {
        useTerm(list);
    }

    return (
        <div>
            <ContactForm handleContactAdd={handleContactAdd}/>
            <ContactList list={term}/>
        </div>
    );
};