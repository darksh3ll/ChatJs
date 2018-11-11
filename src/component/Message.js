import React from "react"
import "./Message.css"
const Message = ({pseudo}) => {
    return(
        <div className="messageBox">
            <p className="message">
                {pseudo}
            </p>
        </div>

    )
};

export default Message