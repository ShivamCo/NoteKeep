import React from "react";


function Note(info){
    return <div className="note">
        <h1>{info.title}</h1>
        <p>{info.content}</p>
    </div>
}

export default Note