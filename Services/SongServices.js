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
        console.log("index not found");
    }
    songs.splice(index, 1);
    return {message: "Song deleted"};
    
}
export const findSongs = (id) => {}
  

