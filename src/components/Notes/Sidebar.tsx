import React, { useState } from "react";

function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}: any) {
  const sortedNotes = notes.sort(
    (a: any, b: any) => b.lastModified - a.lastModified
  );

  const [q, setQ] = useState("");
  const [searchParam] = useState(["title"]);

  const search = (notes:any) => {
    return notes.filter((note:any)=>{
      return searchParam.some((newNote)=>{
        return(
          note[newNote]
          .toString()
          .toLowerCase()
          .indexOf(q.toLowerCase()) > -1
        )
      })
    })
  };

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>MAS Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>

      <div className="search">
        <label htmlFor="search-form">
          <span>Search note here </span>
          <input
            type="search"
            name="search-form"
            id="search-form"
            placeholder="Search note ..."
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              console.log(q);
            }}
          />
        </label>
      </div>

      <div className="app-sidebar-notes">
        {search(notes).map((note: any) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
            key={note.id}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>DELETE</button>
            </div>

            <p>{note.body && note.body.substr(0, 40) + "..."}</p>

            <small className="note-meta">
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
