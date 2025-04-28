import { createSongController, deleteSongController, findAllSongsController } from '../Controller/SongController.js';
import express from 'express'
const songRouter = express.Router();

songRouter.post('/songs', createSongController);
songRouter.get('/songs', findAllSongsController);
songRouter.delete('/songs/:id', deleteSongController);

export default songRouter;