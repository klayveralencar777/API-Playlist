import { createSongs, getAllSongs, deleteSongs, findSongs} from '../Services/SongServices.js'

const idFinder = (req) => {
    return parseInt(req.params.id);
}

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
        try {
            const index = idFinder(req);
            deleteSongs(index);
            return res.status(200).json({message: "Song deleted"});
            
        } catch (error) {
            return res.status(404).json({error: error.message});
            
        }
    
}
export const findbyIdController = (req, res) => {
        try {
                const index = idFinder(req);
                const songFind = findSongs(index);
                return res.status(200).json(songFind);

            
        } catch (error) {
            return res.status(404).json({error: error.message});
            
        }
}

 

    
    

