import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function CountDisplay(props) {
    return (
        <div id="count-div">
            <button id="decrement-btn" onClick={props.decrement}><RemoveCircleIcon /></button>
            <div id="count-txt">
                <h2 id="count-el">{props.count}</h2>
            </div>
            <button id="increment-btn" onClick={props.increment}><AddCircleIcon /></button>
        </div>
    );
}

export default CountDisplay;