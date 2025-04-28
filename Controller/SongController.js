import { createSongs, getAllSongs, deleteSongs} from '../Services/SongServices.js'

export const createSongController = (req, res) => {
    const{name, artist, album, year} = req.body;
    if(!name || !artist || !album || !year) {
        return res.status(400).json({message: "Empty fields, try again"});
    }
    const newSongs = createSongs(name, artist, album, year);
    return res.status(201).json({message: "Song created"});

}

export const findAllSongsController = (req, res) => {
    const allSongs = getAllSongs();
    return res.status(200).json(allSongs);
}

export const deleteSongController = (req, res) => {
    const index = parseInt(req.params.id);
    deleteSongs(index);
    return res.status(200).json({message: "Song deleted"});
}

