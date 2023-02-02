import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function CountDisplay(props) {
    function increment() {
        props.setCount(props.count + 1);
        if (props.errorMsg !== undefined) {
            props.setErrorMsg("");
        }
    }

    function decrement() {
        if (props.count > 0) {
            props.setCount(props.count - 1);
        } else {
            props.setCount(0);
            props.setErrorMsg("Count Cannot be Under 0");
        }
    }

    return (
        <div id="count-div">
            <button id="decrement-btn" onClick={decrement}><RemoveCircleIcon /></button>
            <div id="count-txt">
                <h2 id="count-el">{props.count}</h2>
            </div>
            <button id="increment-btn" onClick={increment}><AddCircleIcon /></button>
        </div>
    );
}

export default CountDisplay;