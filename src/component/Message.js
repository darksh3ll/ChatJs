import React from "react"
import "./Message.css"
const Message = ({num}) => {
    return(
        <div className="messageBox">
            <p className="message">
                {num}
            </p>
        </div>

    )
};

export default Message