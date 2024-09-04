import { useEffect, useState } from "react";
import NoteService from "../../services/notes.services";
import NoteCard from "../Cards/NoteCard";
import { useParams } from "react-router-dom";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const { campaign } = useParams();

    useEffect(() => {
        NoteService.getAll(campaign).then((response) => {
            setNotes(response);
        });
    }, []);

    return (
        <>
            <div>
                {notes.map((note, index) => (
                    <div className="mb-8" key={index}>
                        <NoteCard note={note} />
                    </div>
                ))}
            </div>
        </>
    );
};
export default Notes;
