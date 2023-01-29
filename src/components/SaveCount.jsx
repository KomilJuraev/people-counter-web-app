import React from "react";

function SaveCount(props) {
    return (
        <div id="btn-div">
            <button id="save-btn" type="button" class="btn btn-dark" onClick={props.onSave}>Save</button>
        </div>
    );
}

export default SaveCount;