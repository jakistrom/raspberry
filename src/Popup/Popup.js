import React from 'react';
import './Popup.css';
import Form from './Form/Form';

const Popup = (props) => {
    return (
        <div onClick={props.close} className={props.class}>
            <Form />
        </div>
    )
}

export default Popup;