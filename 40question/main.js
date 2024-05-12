// define the function 
function making_album(artist, album_title, tracks) {
    var album = {
        artist: artist,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling the function three times & creating 3 variables
var album1 = making_album('Momina ', 'Album title 1');
var album2 = making_album('momina', 'album title no 2');
var album3 = making_album('Momina', 'Alnum no 2 ', 10);
console.log(album1);
console.log(album2);
console.log(album3);
