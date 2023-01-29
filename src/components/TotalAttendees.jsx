import React from "react";

function TotalAttendees(props) {
    const previousCount = props.array;
    return (
        <div class="total-div">
            <h2 id="total-atn-el">Total Attendees: {previousCount.reduce((sum, count) =>
                sum + count, 0
            )}</h2>
        </div>
    );
}

export default TotalAttendees;