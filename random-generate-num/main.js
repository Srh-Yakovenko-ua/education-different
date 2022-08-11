const SETTINGS = {
    MAX: 100,
    MIN: 0,
    ATTEMPTS_NUMBER: 10,
};

const PLAYER_NAME = getPlayerName();
const RANDOM_NUMBER = getRandomNumber();
console.log(RANDOM_NUMBER);

function getPlayerName() {
    const playerName = prompt('Как тебя зовут?', '');
    return playerName;
}

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
}

function game(max, min, attemptsNumber, randomNumber, playerName) {

    alert(`Привет ${playerName}!
    Я загадал число от ${min} до ${max},
    У тебя есть ${attemptsNumber} попыток.
    Погнали?!
    `);

    let answerCount = [];
    for (let i = 1; i <= attemptsNumber; i++) {
        const playerAnswer = prompt('Какое число я загадал?', '');
        if (playerAnswer > randomNumber) {
            alert(`Мое число меньше, у тебя осталось ${attemptsNumber - i} попыток`);
            answerCount.push(playerAnswer);
        } else if (playerAnswer < randomNumber) {
            alert(`Мое число больше, у тебя осталось ${attemptsNumber - i} попыток`);
            answerCount.push(playerAnswer);
        }else{
            alert('Поздравляю, ты разгадал мою загадку');
            return
        }
    }
    alert(`Упс...
    Ты не угадал число,
    я загадал - ${randomNumber}.
    Твои ответы - ${answerCount}.
    `);
}

game(SETTINGS.MAX,SETTINGS.MIN, SETTINGS.ATTEMPTS_NUMBER,RANDOM_NUMBER,PLAYER_NAME);