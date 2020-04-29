import React, { useContext } from 'react'
import { NoteContext } from './../context/NoteContext';
import { Loading } from './Loading';


export const Note = () =>{
    const {DeleteNote,notes, Load} = useContext(NoteContext)

    const style = {
        border:{
            display: 'flex',
            justifyContent: 'space-between'
        },

        center:{
            textAlign: 'center'
        },

        Load:{
            display: 'flex',
            justifyContent: 'center'
        }
    }

    if(Load)
        return <div style={style.Load}>
                    <Loading/>
                </div>
    if(!notes.length)
        return <h1 style={style.center}>Nothing</h1>

    return (
            notes.map(note => <li key={note.id} style={style.border} className="list-group-item">{note.name}&nbsp;
            <strong>{note.date}</strong>
            <button className="btn btn-outline-danger" onClick={() => DeleteNote(note.id)}>&times;</button>
            </li>)
    )
}