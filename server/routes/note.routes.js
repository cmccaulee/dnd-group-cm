import { Router } from 'express';
import NoteController from '../controllers/note.controller.js';

const NoteRouter = Router()

NoteRouter.route('/')
    .post(NoteController.create)
    .get(NoteController.getAll)
NoteRouter.route('/:id')
    .get(NoteController.getOne)
    .put(NoteController.update)
    .delete(NoteController.delete)
NoteRouter.route('/user/:id')
    .get(NoteController.getByUser)

export default NoteRouter;