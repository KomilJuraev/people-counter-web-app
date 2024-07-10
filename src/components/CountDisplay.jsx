import React, { useEffect, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function CountDisplay(props) {
    const [count, setCount] = useState(props.count);
    const [error, setError] = useState(props.errorMsg);

    useEffect(() => {
        setCount(props.count);
        setError(props.errorMsg)
    }, [props.count]);

    function increment() {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            props.setCount(newCount);  // Update parent state
            if (error !== undefined) {
                setError("");
                props.setErrorMsg("");
            }
            return newCount;
        });
    }

    function decrement() {
        setCount(prevCount => {
            let newCount = prevCount;
            if (prevCount > 0) {
                newCount = prevCount - 1;
            } else {
                setError("Count Cannot be Under 0");
                props.setErrorMsg("Count Cannot be Under 0");
            }
            props.setCount(newCount);  // Update parent state
            return newCount;
        });
    }

    return (
        <div id="count-div">
            <button aria-label="decrement" id="decrement-btn" onClick={decrement}><RemoveCircleIcon /></button>
            <div id="count-txt">
                <h2 aria-label="count" id="count-el">{count}</h2>
            </div>
            <button aria-label="increment" id="increment-btn" onClick={increment}><AddCircleIcon /></button>
        </div>
    );
}

export default CountDisplay;
