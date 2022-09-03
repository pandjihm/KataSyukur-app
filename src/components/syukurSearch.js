import { useState } from "react";
import iconSearch from "../icons/icon_search.svg";

export default function NoteSearch(props) {
    const [search, setSearch] = useState("");

    function searchFieldHandler(event) {
        setSearch(event.target.value);
    }

    function onSubmitEventHandler(event) {
        event.preventDefault();
        props.search(search);
    }

    return (
        <div className="syukur-search">
            <form className="syukur-search__form" onSubmit={onSubmitEventHandler}>
                <input
                    className="syukur-search__search"
                    type="text"
                    placeholder="Cari Pesan ..."
                    onChange={searchFieldHandler}
                    value={search}
                />
                <button className="submit" type="submit">
                    <img src={iconSearch} alt="icon search" />
                </button>
            </form>
        </div>
    );
}
