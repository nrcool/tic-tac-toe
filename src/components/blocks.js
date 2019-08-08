import React from 'react';
import "./css/blocks.css"

function Block(props) {
    return (
        <div className="block">
            <button className="button" onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    );
}

export default Block;