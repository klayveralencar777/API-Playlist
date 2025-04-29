import { createSongController, deleteSongController, findAllSongsController, findbyIdController } from '../Controller/SongController.js';
import express from 'express'
const songRouter = express.Router();

songRouter.post('/songs', createSongController);
songRouter.get('/songs', findAllSongsController);
songRouter.delete('/songs/:id', deleteSongController);
songRouter.get('/songs/:id', findbyIdController);

export default songRouter;