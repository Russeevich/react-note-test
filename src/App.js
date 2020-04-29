import React from 'react';
import {Navbar} from './components/Navbar';
import { Inputs } from './components/Inputs';
import { Notes } from './components/Notes';
import { NoteState } from './context/NoteState';

const App = () =>{
//
    return (
      <NoteState>
        <div>
        <Navbar/>
          <div className="container">
            <Inputs/>
            <hr></hr>
          <Notes/>
          </div>
        </div>
      </NoteState>
    )
}

export default App;
