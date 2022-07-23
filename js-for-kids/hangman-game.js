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
// Добавлвяю количество попыток
let amountAttempts = 8;

while (remainingLetters > 0 && amountAttempts > 0) {
    // отображение состояния игры
    alert(answerArray.join(' '));
    // обработка введенного ответа
    let guess = prompt('Угадайте букву или нажмите ОТМЕНА для выхода из игры.');
    guess = guess.toLocaleLowerCase();  // фикс в нижний регистр

    if (guess === null) {
        alert('Вы закрыли игру');
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста, введите только одну букву');
    } else {
        // отнимаем кол-во попыток
        amountAttempts--;

        // обвновляем состояние игры
        for (let j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === guess && answerArray[j] === "_") { // исправили ошибку чтобы remaining не уменьшался answerArray[j] === "_"
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

    // конец игровго цикла
}


// Конец игры !!!
alert(answerArray.join(' '));
// Проверка на попытки
if (amountAttempts > 0) {
    alert(" Отлично ! Ответ был " + randomWord);
} else {
    alert(" Не угадали , Ответ был " + randomWord);
}


