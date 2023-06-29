import React, {useState} from 'react';
import {ContactForm} from "./ContactForm.jsx";
import {ContactList} from "./ContactList.jsx";
import {ContactSearch} from "./ContactSearch.jsx";

export const ContactApp = () => {

    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    const handleContactAdd = (name, phone, email) => {
        const newList = {
            id: list.length +1,
            name: name,
            phone: phone,
            email: email,
        }

        setList([...list, newList])
    }

        const searchHandler = (e) => {
            setSearch(e.target.value)
        }

    return (
        <div>
            <ContactSearch value={search} searchHandler={searchHandler}/>
            <ContactForm handleContactAdd={handleContactAdd}/>
            <ContactList search={search} list={list}/>
        </div>
    );
};