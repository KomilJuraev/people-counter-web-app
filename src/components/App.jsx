import React, { useState } from "react";
import CountDisplay from "./CountDisplay";
import ErrorMsg from "./ErrorMsg";
import SaveCount from "./SaveCount";
import TotalAttendees from "./TotalAttendees";
import PreviousEntrees from "./PreviousEntrees";

function App() {
    const [count, setCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");
    const [previousCount, setPreviousCount] = useState([]);
    const [clickedIndex, setClickedIndex] = useState();

    return (
        <div id="parent-div">
            <div id="header-div">
                <h1>Number of Attendees</h1>
            </div>
            <CountDisplay
                count={count}
                setCount={setCount}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
            />
            <ErrorMsg message={errorMsg} />
            <SaveCount
                count={count}
                setCount={setCount}
                previousCount={previousCount}
                setPreviousCount={setPreviousCount}
                clickedIndex={clickedIndex}
                setClickedIndex={setClickedIndex}
            />
            <PreviousEntrees
                array={previousCount}
                setCount={setCount}
                setClickedIndex={setClickedIndex}
            />
            <TotalAttendees array={previousCount} />
        </div >
    )
}

export default App;