import React from "react";

function ErrorMsg(props) {

    return (
        <p aria-label="error" id="count-zero">{props.message}</p>
    )
}

export default ErrorMsg;