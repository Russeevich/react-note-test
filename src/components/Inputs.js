import React, {useState, useContext} from 'react'
import { NoteContext } from '../context/NoteContext';

export const Inputs = () =>{

    const {AddNote} = useContext(NoteContext)

    const [value, setValue] = useState('')

    const OnSumbit = e =>{
        e.preventDefault()

        AddNote(value)

        setValue('')
    }

    return(
    <form className="input-group flex-nowrap mt-3" onSubmit={OnSumbit}>
        <div className="input-group-prepend">
        <span className="input-group-text" id="addon-wrapping">@</span>
        </div>
        <input 
        value={value} 
        onChange={(e) => {
        setValue(e.target.value)
        }} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
    </form>
  )
}