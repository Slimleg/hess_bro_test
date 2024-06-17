//Game class that can construct games
class Game {
    constructor(name, genre, rating) {
        this.name = name;
        this.genre = genre;
        this.rating = rating;
    }
}
//All the games concstructed by the Game class
var starCraft = new Game("StarCraft", "RTS", "Mature");
var l4d2 = new Game("Left 4 Dead 2", "FPS/Zombie", "Mature");
var overWatch = new Game("Overwatch 2", "MOBA", "Teen");
//An array that all the games fit into
var gameCollection = [starCraft, l4d2, overWatch];
//A function that when called can log the information of x into the console, x being a game selected from the array
function pickGame(x) {
    if (x == gameCollection[0]) {
        console.log(gameCollection[0].name, gameCollection[0].genre, gameCollection[0].rating);
    } else if (x == gameCollection[1]) {
        console.log(gameCollection[1].name, gameCollection[1].genre, gameCollection[1].rating);
    } else if (x == gameCollection[2]) {
        console.log(gameCollection[2].name, gameCollection[2].genre, gameCollection[2].rating);
    } else {
        console.log("Error, game not found.");
    }
}
//Calling the pickGame function 
pickGame(gameCollection[0]);
pickGame(gameCollection[1]);
pickGame(gameCollection[2]);



