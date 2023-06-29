import React from 'react';
import {ContactItem} from "./ContactItem.jsx";
import {FaUser} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";
import {ContactListMainTitle} from "./ContactListMainTitle.jsx";

export const ContactList = ({list,search}) => {


    return (
        <div className="list">
            <div className="list__main">
                <ContactListMainTitle value="Name" icon={<FaUser size={18}/>}/>
                <ContactListMainTitle value="Phone" icon={<FaPhone size={18}/>}/>
                <ContactListMainTitle value="Email" icon={<FaEnvelope size={18}/>}/>
            </div>
            <div className="list__sub">
                {list
                    .filter(({name}) => name.includes(search))
                    .map(({id, name, phone, email}) =>
                    <ContactItem
                        key={id}
                        name={name}
                        phone={phone}
                        email={email}
                    />)}
            </div>
        </div>
    );
};
