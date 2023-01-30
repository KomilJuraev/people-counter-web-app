import React, { useState } from "react";
import CountDisplay from "./CountDisplay";
import SaveCount from "./SaveCount";
import TotalAttendees from "./TotalAttendees";
import PreviousEntrees from "./PreviousEntrees";
import ErrorMsg from "./ErrorMsg";
//People Counter App
function App() {
    const [count, setCount] = useState(0);
    const [previousCount, setPreviousCount] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [clickedIndex, setClickedIndex] = useState();

    function increment() {
        setCount(count + 1);
        if (errorMsg !== undefined) {
            setErrorMsg("");
        }
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(0);
            setErrorMsg("Count Cannot be Under 0");
        }
    }

    function save() {
        if (clickedIndex !== undefined) {
            setPreviousCount(prevCount => prevCount.map((value, i) => {
                if (i === clickedIndex) {
                    return count
                } else {
                    return value;
                }
            }));
            setClickedIndex(undefined);
        } else {
            setPreviousCount(prevCount => [...prevCount, count]);
        }

        if (previousCount.length >= 7) {
            setPreviousCount(prevCount => prevCount.slice(1));
        }
        setCount(0);
    }

    function clickedCount(event, index) {
        setCount(parseInt(event.target.textContent));
        setClickedIndex(index);
    }

    return (
        <div id="parent-div">
            <div id="header-div">
                <h1>Number of Attendees</h1>
            </div>
            <CountDisplay count={count} decrement={decrement} increment={increment} />
            <ErrorMsg message={errorMsg} />
            <SaveCount onSave={save} />
            <PreviousEntrees array={previousCount} clickedCount={clickedCount} />
            <TotalAttendees array={previousCount} />
        </div >
    )
}

export default App;