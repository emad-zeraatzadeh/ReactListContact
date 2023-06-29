import React, {useEffect, useState} from 'react';
import {ContactInput} from "./ContactInput.jsx";
import {FaPlus} from "react-icons/fa6";

export const ContactForm = ({handleContactAdd}) => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const phoneChangeHandler = (e) => {
        setPhone(e.target.value)
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const submitHandler = (e) => {

        e.preventDefault();
        handleContactAdd(name, phone, email)
        setName("");
        setPhone("");
        setEmail("");
    }


    return (
        <form className="form" onSubmit={submitHandler}>
            <ContactInput value={name} changeHandler={nameChangeHandler} placeholder={"Name"}/>
            <ContactInput value={phone} changeHandler={phoneChangeHandler} placeholder={"Phone"}/>
            <ContactInput value={email} changeHandler={emailChangeHandler} placeholder={"Email"}/>
            <button className="form__btn" type="submit"><FaPlus/>Add</button>
        </form>
    );
};