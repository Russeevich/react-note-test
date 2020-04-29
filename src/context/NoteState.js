import React, {useState} from 'react'
import axios from 'axios'
import { NoteContext } from './NoteContext'
import { DATABASE_URL } from '../variables';

const url = DATABASE_URL

export const NoteState = ({children}) => {

    const [notes, setNotes] = useState([])
    const [Load, setLoad] = useState(false)

    const AddNote = async (value) => {

        const object = {
            name: value,
            date: new Date().toJSON()
        }

        const res = await axios.post(`${url}/notes.json`, object)
        
        object['id'] = res.data.name;

        setNotes([...notes, object])
    }

    const FindNote = async () => {
       setLoad(true);
       const res = await axios.get(`${url}/notes.json`)

       setLoad(false);

       if(!res.data)
            return null

       const arr = []

       Object.keys(res.data).map(key => arr.push({...res.data[key], id: key}))

       setNotes(arr)
    }

    const DeleteNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`)
        
        const temp = notes.filter(key => key.id !== id)

        setNotes(temp)
    }

    return (
        <NoteContext.Provider value={{AddNote, notes, FindNote, DeleteNote, Load}}>
            {children}
        </NoteContext.Provider>
    )
}