import {Song} from '../Model/Song.js'
const songs = [];
export const createSongs = (name ,artist, album, year) => {
        const newSong = new Song(name, artist, album, year);
        songs.push(newSong);
        return newSong;    

}

export const getAllSongs = () => {
    return songs;
}

export const deleteSongs = (id) => {
    const index = songs.findIndex(song => song.id === parseInt(id));
    if(index === -1) {
        throw new Error("Song not found, try again");
    }
    songs.splice(index, 1);
    return {message: "Song deleted"};
    
}
export const findSongs = (id) => {
    const songIndex = songs.findIndex(song => song.id === parseInt(id));
    if(songIndex === -1) {
            throw new Error("Song undefined or not found");
    }
    return songs[songIndex];
}
  

