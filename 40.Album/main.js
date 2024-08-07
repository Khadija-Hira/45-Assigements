"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Nusrat Fateh Ali Khan", "Shahbaz Qalandar");
let album2 = make_album("Atif Aslam", "Jal Pari", 11);
let album3 = make_album("Abida Parveen", "Raqs-e-Bismil", 9);
console.log(album1);
console.log(album2);
console.log(album3);
