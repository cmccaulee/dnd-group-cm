import Note from "../models/note.model.js";

const NoteController = {
    "create": async (req, res, next) => {
        try {
            const newNote = await Note.create(req.body);
            res.json(newNote);
        } catch (err) {
            next(err);
        }
    },
    "getAll": async (req, res, next) => {
        try {
            const allNotes = await Note.find().populate("createdBy").populate("campaign");
            res.json(allNotes);
        } catch (err) {
            next(err);
        }
    },
    "getOne": async (req, res, next) => {
        try {
            const note = await Note.findById(req.params.id).populate("createdBy").populate("campaign");
            res.json(note);
        } catch (err) {
            next(err);
        }
    },
    "update": async (req, res, next) => {
        const options = { new: true, runValidators: true };
        try {
            const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, options).populate("createdBy").populate("campaign")
            res.json(updatedNote);
        } catch (err) {
            next(err);
        }
    },
    "delete": async (req, res, next) => {
        try {
            const deletedNote = await Note.findByIdAndDelete(req.params.id);
            res.json(deletedNote);
        } catch (err) {
            next(err);
        }
    },
    "getByUser": async (req, res, next) => {
        const filter = { user: req.params.id };
        try {
            const notes = await Note.find(filter).populate("createdBy").populate("campaign")
            res.json(notes);
        } catch (err) {
            next(err);
        }
    },
    "getByCampaign": async (req, res, next) => {
        const filter = { campaign: req.params.id };
        try {
            const notes = await Note.find(filter).populate("createdBy").populate("campaign")
            res.json(notes);
        } catch (err) {
            next(err);
        }
    }
}
export default NoteController;