import React from "react";

function SaveCount(props) {
    function save() {
        let updatePreviousCount = [];
        if (props.clickedIndex !== undefined) {
            updatePreviousCount = props.previousCount.map((value, i) => {
                if (i === props.clickedIndex) {
                    return props.count
                } else {
                    return value;
                }
            });
            props.setClickedIndex(undefined);
        } else {
            updatePreviousCount = [...props.previousCount, props.count];
        }

        if (updatePreviousCount.length >= 7) {
            updatePreviousCount = updatePreviousCount.slice(updatePreviousCount.length - 7);
        }
        props.setPreviousCount(updatePreviousCount);
        props.setCount(0);
    }

    return (
        <div id="btn-div">
            <button id="save-btn" type="button" className="btn btn-dark" onClick={save}>Save</button>
        </div>
    );
}

export default SaveCount;