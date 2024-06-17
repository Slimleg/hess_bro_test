class Game {
    constructor(name, genre, rating) {
        this.name = name;
        this.genre = genre;
        this.rating = rating;
    }
}

var starCraft = new Game("StarCraft", "RTS", "Mature");
var l4d2 = new Game("Left 4 Dead 2", "FPS/Zombie", "Mature");
var overWatch = new Game("Overwatch 2", "MOBA", "Teen");

var gameCollection = [starCraft, l4d2, overWatch];

function pickGame(x) {
    if (x == gameCollection[0]) {
        console.log(gameCollection[0].name, gameCollection[0].genre, gameCollection[0].rating);
    } else if (x == gameCollection[1]) {
        console.log(gameCollection[1]);
    } else if (x == gameCollection[2]) {
        console.log(gameCollection[2]);
    } else {
        console.log("Error, game not found.");
    }
}

pickGame(gameCollection[0]);
