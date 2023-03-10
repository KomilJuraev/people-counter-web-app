import React from "react";

function PreviousEntrees(props) {
    const previousCount = props.array;

    function clickedCount(event, index) {
        props.setCount(parseInt(event.target.textContent));
        props.setClickedIndex(index);
    }

    return (
        <div id="previous-div">
            <h2 id="save-el">Previous entries: {previousCount.map((count, index) => (
                <span key={index}>
                    <a id={`count-${index}`} href="#" onClick={(event) => clickedCount(event, index)}>{count}</a>
                    {index !== previousCount.length - 1 ? ' / ' : ""}
                </span>
            ))}
            </h2>
        </div>
    )
}

export default PreviousEntrees;