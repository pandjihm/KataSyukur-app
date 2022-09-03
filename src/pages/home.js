import { getInitialData } from "../utils";
import { useState } from "react";
import SyukurCard from "../components/syukurCard";
import NoteCreate from "../components/syukurCreate";
import NoteSearch from "../components/syukurSearch";
import NoteEmpty from "../components/syukurEmpty";

export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [notes, setNotes] = useState(getInitialData().reverse());

    function addNoteHandler({ title, body }) {
        setNotes((notes) => [
            {
                id: +new Date(),
                title,
                body,
                createdAt: new Date(),
                archived: false,
            },
            ...notes,
        ]);
    }

    function removeNoteHandler(id) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    function toggleArchivedNoteHandler(id) {
        const newNotes = notes.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
        );

        setNotes(newNotes);
    }

    function SearchNoteHandler(title) {
        setSearchValue(title);
    }

    return (
        <div className="syukur-app__body">
            <NoteCreate addNote={addNoteHandler} />
            <NoteSearch search={SearchNoteHandler} />      

            <h2>KATA SYUKURKU SELAMA INI</h2>
            {notes.filter(
                (note) =>
                    !note.archived &&
                    note.title.toLowerCase().includes(searchValue.toLowerCase())
            ).length ? (
                <div className="syukur-list">
                    {notes.map((note) =>
                        !note.archived &&
                        note.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ? (
                            <SyukurCard
                                {...note}
                                key={note.id}
                                onDelete={removeNoteHandler}
                                toggleArchive={toggleArchivedNoteHandler.bind(
                                    this
                                )}
                            />
                        ) : null
                    )}
                </div>
            ) : (
            <NoteEmpty />
            )}

            <h3>ARSIP</h3>
            {notes.filter(
                (note) =>
                    note.archived &&
                    note.title.toLowerCase().includes(searchValue.toLowerCase())
            ).length ? (
                <div className="syukur-list">
                    {notes.map((note) =>
                        note.archived &&
                        note.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ? (
                            <SyukurCard
                                {...note}
                                key={note.id}
                                onDelete={removeNoteHandler}
                                toggleArchive={toggleArchivedNoteHandler.bind(
                                    this
                                )}
                            />
                        ) : null
                    )}
                </div>
            ) : (
                <NoteEmpty />
            )}
        </div>
    );
}