// Выбираем случайное слово
let words = [
    'программа',
    'макака',
    'прекрасный',
    'оладушек',
    'жираф',
    'прокрастинация',
    'виселица',
];

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)
// Создание итогового массива

let answerArray = [];

for (let i = 0; i < randomWord.length; i++) {
    answerArray[i] = '_';
    //console.log(answerArray);
}
let remainingLetters = randomWord.length;

//делаем игровой цикл

while (remainingLetters > 0) {
    // отображение состояния игры
    alert(answerArray.join(' '));
    // обработка введенного ответа
    let guess = prompt('Угадайте букву или нажмите ОТМЕНА для выхода из игры.').toLocaleLowerCase();
    if (guess === null) {
        alert('Вы закрыли игру');
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста, введите только одну букву');
    } else {
        // обвновляем состояние игры
        for (let j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

// Конец игры !!!
alert(answerArray.join(' '));
alert('Отлично! Было загадано слово ' + randomWord);

