let currentId = 1;
export class Song {
    constructor(name, artist, album, year ){
        this._id = currentId++;
        this._name = name;
        this._artist = artist;
        this._album = album;
        this._year = year;
        
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }

    get artist(){
        return this._artist;
    }
    get album() {
        return this._album;
    }
    get year() {
        return this._year;
    }
}


