

const SETTINGS = {
    MAX:100,
    MIN:0,
    ATTEMPTS_NUMBER:10,
};

const PLAYER_NAME = getPlayerName();
const RANDOM_NUMBER = getRandomNumber();


function getPlayerName(){
    const playerName = prompt('Как тебя зовут?','');
    return playerName;
};


function getRandomNumber(){
const randomNumber = Math.floor(Math.random() * 100);
return  randomNumber;
}