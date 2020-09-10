import React, { useEffect, useReducer } from 'react';

import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './forms/AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {

    const [notes, dispatch] = useReducer(notesReducer, []);

    // ComponentDidMount, Loading notes from localStorage
    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];

        dispatch({
            type: 'POPULATE_NOTES',
            notes
        })
        //setNotes(notesData || []);
    }, []);

    // ComponentDidUpdate, save notes into localStorage
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />
        </NotesContext.Provider>
    );
};

export default NoteApp;