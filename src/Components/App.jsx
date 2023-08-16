import React from "react";
import ReactDom, { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./Notes"

function noteCard(prop){
    return <Note 
    key = {prop.key}
    title= {prop.title}
    content = {prop.content}
     />
}



const App = () => {
    return <div>
        <Header />
        {notes.map(noteCard)}
        
        <Footer />
    </div>
}

export default App