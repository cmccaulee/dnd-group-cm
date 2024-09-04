import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const NoteCard = (props) => {
    const { note } = props;
    const { isLoggedIn, user } = useContext(LoggedInUserContext);
    // console.log(note.createdBy);
    return (
        <>
            <div className="drop-shadow-lg">
                <div className="card max-w-xs rounded-2xl bg-base-100 px-8 pb-8">
                    <div className="mt-8">
                        <h1 className=" font-semibold text-lg">{note.title}</h1>
                        <p>{note.content}</p>
                        <ul className="flex justify-center gap-4">
                            <li></li>
                            <Link to={`/notes/${note._id}`}>View</Link>
                            {isLoggedIn && user._id === note.createdBy ? (
                                <>
                                    <li>|</li>
                                    <Link to={`/notes/update/${note._id}`}>
                                        Edit
                                    </Link>
                                </>
                            ) : (
                                ""
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NoteCard;
