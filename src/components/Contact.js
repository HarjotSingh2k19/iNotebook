import React, {useContext, useEffect} from 'react';
import newNoteContext from '../context/notes/newNoteContext';


const Contact = () => {
    const a = useContext(newNoteContext);
    const { state, update} = a;
    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    },[])
  return (
    <div>
        This is Contact of : {state.name} and he is in {state.class}
    </div>
  )
}

export default Contact;