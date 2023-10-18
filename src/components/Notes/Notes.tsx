import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./Notes.css";

function Notes() {
  // --->|<--- //
  const [notes, setNotes] = useState<any>(JSON.parse(localStorage.notes) || []);
  

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote: any) => {
    const updatedNotesArray = notes.map((note: any) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (idToDelete: any) => {
    setNotes(notes.filter((note: any) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note: any) => note.id === activeNote);
  };


  return (
<div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />

      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default Notes;