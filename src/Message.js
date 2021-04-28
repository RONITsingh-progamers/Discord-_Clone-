import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css";

function Messgae() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Ronit singh
                    <span className="message__timestamp">
                        this is a timestamp
                    </span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Messgae
