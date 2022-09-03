import { useState, useRef } from "react";

export default function NoteCreate(props) {
    const [form, setForm] = useState({
        title: "",
        body: "",
    });

    const maxChar = 50;
    const [remainingChar, setRemainingChar] = useState(maxChar);
    const inputRef = useRef(null);

    function bodyFieldHandler(event) {
        setForm({
            ...form,
            body: event.target.value,
        });
    }

    function titleFieldHandler(event) {
        setForm({
            ...form,
            title: event.target.value.slice(0, maxChar),
        });

        setRemainingChar(Math.max(0, maxChar - event.target.value.length));
    }

    function onSubmitEventHandler(event) {
        event.preventDefault();
        props.addNote(form);
        setForm({
            title: "",
            body: "",
        });

        inputRef.current.focus();
        setRemainingChar(maxChar);
    }

    return (
        <div className="syukur-input">
            <form onSubmit={onSubmitEventHandler}>
                <p className="syukur-input__title__char-limit">
                    Sisa karakter: {remainingChar}
                </p>
                <input
                    className="syukur-input__title"
                    type="text"
                    placeholder="Judul..."
                    name="title"
                    onChange={titleFieldHandler}
                    value={form.title}
                    ref={inputRef}
                    required
                    autoFocus
                />
                <textarea
                    className="syukur-input__body"
                    type="text"
                    placeholder="Apa yang kamu syukuri hari ini?"
                    name="body"
                    onChange={bodyFieldHandler}
                    value={form.body}
                    required
                ></textarea>
                <button type="submit">Simpan</button>
            </form>
        </div>
    );
}
