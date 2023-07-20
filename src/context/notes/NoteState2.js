import { useState } from "react";
import NewNoteContext from "./newNoteContext";

const NoteState2 = (props) => {
    const s1= {
        "name" : "Harry",
        "class" : "10b"
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                "name" : "larry bai",
                "class" : "11b"
            })
        }, 1000);
    }

    return(
        <NewNoteContext.Provider value={{state, update}}>
            {props.children}
        </NewNoteContext.Provider>
    )
}

export default NoteState2;