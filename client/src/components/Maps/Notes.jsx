import { useEffect, useState, useContext } from "react";
import NoteService from "../../services/notes.services";
import NoteCard from "../Cards/NoteCard";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    const { user } = useContext(LoggedInUserContext);
    const { campaignId } = props;

    useEffect(() => {
        NoteService.getAll().then((response) => {
            setNotes(response);
        });
    }, []);

    return (
        <>
            <div>
                {notes.map((note, index) => (
                    <div className="mb-8" key={index}>
                        {note.campaign._id === campaignId ? (
                            <NoteCard note={note} />
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};
export default Notes;
