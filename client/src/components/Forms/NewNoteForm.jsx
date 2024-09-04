import { useState, useContext, useEffect } from "react";
import NoteService from "../../services/notes.services";
import { useNavigate } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const NewNoteForm = (props) => {
    const { campaignId } = props;
    const { user } = useContext(LoggedInUserContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [note, setNote] = useState({
        title: "",
        content: "",
        campaign: campaignId,
        createdBy: user,
    });

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            localStorage.setItem("user", JSON.stringify(user));
        }

        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setNote((prevNoteValue) => ({
                ...prevNoteValue,
                createdBy: storedUser,
            }));
        }
    }, [user]);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setNote((prevNoteValue) => ({ ...prevNoteValue, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        NoteService.create(note)
            .then(() => {
                setNote({
                    title: "",
                    content: "",
                    campaign: campaignId,
                    user: user,
                });
                navigate(0);
            })
            .catch((err) => {
                setErrors(err.response.data);
            });
    };
    return (
        <>
            <div>
                <form
                    className="card bg-base-100 w-auto shadow-xl gap-2 px-4 py-8"
                    onSubmit={(e) => submitHandler(e)}>
                    {errors && <p className="text-red-500">{errors.name}</p>}
                    <h2 className="text-2xl ml-6 text-center">Create a Note</h2>
                    <label
                        htmlFor="title"
                        className="input input-bordered flex items-center gap-2">
                        Note Title:
                        <input
                            type="text"
                            value={note.title}
                            name="title"
                            id="title"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.title}
                            </p>
                        )}
                    </label>
                    <textarea
                        className="textarea textarea-bordered textarea-lg w-full"
                        placeholder="Content"
                        type="textarea"
                        value={note.content}
                        name="content"
                        id="content"
                        onChange={(e) => changeHandler(e)}
                    />
                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.content}
                        </p>
                    )}

                    <div className="flex justify-center">
                        <button type="submit" className="btn btn-primary">
                            Create Note
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default NewNoteForm;
