import React, { useState } from 'react'

import uuid from "react-uuid";
import { Edit, Delete } from "@material-ui/icons";

import { Button, Input, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";


function NotesExtraCodesInApp() {

    const [notes, setNotes] = useState<any>([]);

    const [editModal, setEditModal] = useState(false);

    //  ---------->  ADD NOTE   <-----------//
    const onAddNote = () => {
        setEditModal(true);
        const newNote = {
            id: uuid(),
            title: "untitled note",
            body: "your note goes here",
            lastModified: Date.now(),
        };
        setNotes([newNote, ...notes]);
    };
    //  ---------->  DELETE NOTE   <-----------//
    const onDeleteNote = (idToDelete: any) => {
        setNotes(notes.filter((note: any) => note.id !== idToDelete));
    };

    //  ---------->  EDIT NOTE MODAL  <-----------//

    const handleEditCancel = () => {
        setEditModal(false);
    };
    ////////////////////////


    return (
        <div>
            <>
                <div className="nav">
                    <h1>MAS Notes</h1>
                    <button onClick={onAddNote}>+ Create</button>
                </div>

                <div className="notes">
                    {/* ----------> 1 NOTE   <----------- */}
                    {notes.map((note: any) => (
                        <div className="note-card">
                            <h2>{note.title}</h2>
                            <p>{note.body}</p>

                            <small className="note-meta">
                                {new Date(note.lastModified).toLocaleDateString("en-GB", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                                <span>
                                    <Edit />{" "}
                                </span>
                                <span onClick={() => onDeleteNote(note.id)}>
                                    <Delete />{" "}
                                </span>
                            </small>
                        </div>
                    ))}
                </div>
                <Modal
                    centered
                    open={editModal}
                    onCancel={handleEditCancel}
                    footer={[null]}
                >
                    <>
                        <h2 className="Signup-title"> Enter Note </h2>
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder=" نام و نام خانوادگی "
                        />
                        <Button>ذخیره</Button>
                    </>
                </Modal>
            </>
        </div>
    )
}

export default NotesExtraCodesInApp;