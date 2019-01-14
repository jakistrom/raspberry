import React from 'react';
import './Popup.css';
import Form from './Form/Form';

const Popup = (props) => {
    return (
        <div className={props.class}>
            <Form />
        </div>
    )
}

export default Popup;