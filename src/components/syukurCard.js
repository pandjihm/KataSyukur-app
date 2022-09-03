import { showFormattedDate } from "../utils";
import iconDelete from "../icons/icon_delete.svg";
import iconArchive from "../icons/icon_archive.svg";
import iconBack from "../icons/icon_back.svg";

export default function NoteCard({ id, title, body, createdAt, archived, onDelete, toggleArchive }) {
    return (
        <div className="syukur-item">
            <div className="syukur-item__content">
                <h4 className="syukur-item__title">{title}</h4>
                <p className="syukur-item__date">
                    {showFormattedDate(createdAt)}
                </p>
                <p className="syukur-item__body">{body}</p>
            </div>
            <div className="syukur-item__action">
                <button className="syukur-item__delete-button" onClick={() => onDelete(id)}><img src={iconDelete} alt="icon delete" /></button>
                <button className="syukur-item__archive-button" onClick={() => toggleArchive(id)}>{ archived ? <img src={iconBack} alt="icon back" /> : <img src={iconArchive} alt="icon archive" /> }</button>
            </div>
        </div>
    );
}
