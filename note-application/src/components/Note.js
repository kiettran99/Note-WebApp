import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';

import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {

    // ComponentDidMount, Print Setting up
    // ComponentDidUnmount. print Cleaning up
    // useEffect(() => {
    //     console.log('Setting up effect !');

    //     return () => {
    //         console.log('Cleaning up effect !');
    //     };
    // }, []);

    const { dispatch } = useContext(NotesContext);

    const position = useMousePosition();

    const removeNote = (title) => {
        //setNotes(notes.filter(note => note.title !== title));
        dispatch({
            type: 'REMOVE_NOTE',
            title
        });
    };

    return (
        <div>
            <h3>{note.title}</h3>
            <h4>{note.body}</h4>
            <p>{position.x}, {position.y}</p>
            <button onClick={() => removeNote(note.title)}>X</button>
        </div>
    );
};

export default Note;