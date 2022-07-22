// function f1() {
//
// }
//
// sum3(1000, 2000);
//
// function sum() {
//     const x = 5;
//     const y = 10;
//     console.log(x + y);
// }
//
// sum();
//
// let x = 5;
// let y = 10;
//
// function sum2() {
//     console.log(x + y);
// }
//
// sum2();
//
//
// x = 100;
// y = 200;
// sum2();
//
//
// // Аргументы
// // формальные аргументы или параметры -
// function sum3(x1 = 110, y1 = 0) {
//     console.log(x1 + y1);
// }
//
// sum3(44, 11);
// sum3(100, 200);
// let z = 77;
// sum3(z, 77);
// sum3(z, z * 2);
// sum3(2, 3, 4, 5, 6)
// sum3(6)
// sum3();
//
// function showSum(elem, x, y) {
//     document.querySelector(elem).textContent = x + y;
// }
//
// function showSum2(elem, x, y) {
//     elem.textContent = x + y;
// }
//
//
// showSum('.out1', 5, 6);
// const out1 = document.querySelector('.out1')
// showSum2(out1, 70, 6);
//
//
// function showSum3(x, y, elem = '.out1') {
//     // console.log(arguments);
//     document.querySelector(elem).textContent = x + y;
// }
//
//
// showSum3(10, 11);

// function showSum4( x, y, elem = '.out1') {
//     console.log(arguments);
//     document.querySelector(arguments[2]).textContent = arguments[0] + arguments[1];
// }
//
// showSum4(103,15,'.out2')


// arguments - хорошо использовать когда нужна функция где будет попать какието значения но не знаем их количества

// function showSumAll() {
//     console.log(arguments);
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     console.log(sum);
// }
//
// showSumAll(4, 5, 6,22,32);

// работы через остаточный параметр
// function showSumAll2(...args) {
//     console.log(args)
//     let sum = args.reduce((accum, item) => accum += item);
//     console.log(sum)
// }
//
//
// showSumAll2(4, 5, 6, 22, 32);
//
// функция как аргумент!!!!!
//
// function showAll(res) {
//     document.querySelector('.out1').innerHTML = `${res}`
// }
//
// function showSumAll3( drawFunction, ...num) {  // если мы не знаем сколько у нас будет переменных
//     drawFunction(num);
// }
//
// showSumAll3(showAll, 55, 45, 44);

// -------------------------------------- Практика ------------------------------------------

// Task 1
// Напишите функцию t1, которая принимает два аргумента и выводит в .out-1 случайное целое число от первого аргумента(включительно) до второго(включительно).
// Функция запускается по кнопке .b-1. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.


// function t1(min, max) {
//     let random = Math.floor(min + Math.random() * (max + 1 - min));
//     document.querySelector('.out1').textContent = random;
// }
//
// document.querySelector('.btn').addEventListener('click', function () {
//     t1(120, 140);
// })


// Task 2.

//Напишите функцию t2, которая принимает три аргумента (число от, число до и блок, в который нужно вывести данные) и выводит в указанный блок случайное целое число от первого аргумента(включительно) до второго(включительно).
// Функция запускается по кнопке .b-2.

// function t2(min, max, block) {
//     let random = Math.floor(min + Math.random() * (max + 1 - min));
//     block.textContent = random;
// }
//
// document.querySelector('.btn').addEventListener('click', function () {
//     const out2 = document.querySelector('.out1');
//     t2(120, 140, out2);
// })


// Task 3.
//Напишите функцию t3, которая принимает два аргумента (число от, число до ) и выводит в блок .out-3 случайное целое число от первого аргумента(включительно) до второго(включительно).
// Задайте значение по умолчанию для min число 0 для max число 100. Функция запускается по кнопке .b-3.

// function t3(min = 0, max = 101) {
//     const out = document.querySelector('.out1')
//     out.textContent = Math.floor(min + Math.random() * (max + 1 - min));
// }
//
// document.querySelector('.btn').addEventListener('click', function () {
//     t3();
// })

// Task 4
// Напишите функцию t4, которая делит число a на b и результат выводит в out-4. Если b равно нулю, то в out-4 выводится аргумент c.

// function t4(a, b, c) {
//     let out = document.querySelector('.out1');
//     const division = a / b;
//     out.textContent = division;
//     if (b === 0) {
//         return out.textContent = `${c}`;
//     }
// }
//
// document.querySelector('.btn').addEventListener('click', function () {
//     t4(49, 3, false);
// })


// Task 5
// Напишите функцию t5, которая делит число a на b и результат выводит в out-5. Если b равно нулю, то в out-5 выводится аргумент c, который по умолчанию равен нулю.

// function t5(a, b, c) {
//     let out = document.querySelector('.out1');
//     const division = a / b;
//     out.textContent = division;
//     if (b === 0) {
//         return out.textContent = Number(c);
//     }
// }
//
// document.querySelector('.btn').addEventListener('click', function () {
//     t5(7, 0, false);
// })


// Task 6
// Давайте напишем функцию t6, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел.

const out6 = document.querySelector('.out-6');

function t6(arr, block) {

}

document.querySelector('.b-6').addEventListener('click', function () {
    t6([99, 44, 55, 66], out6);
})


// Task 7
// Давайте напишем функцию t7, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Задайте аргумент arr равный по умолчанию пустому массиву. Добавьте внутрь функции проверку на массив аргумента arr. Если arr не массив, то в block выводим false.

const out7 = document.querySelector('.out-7');

function t7(arr, block) {

}

document.querySelector('.b-7').addEventListener('click', function () {
    t7([99, 44, 55, 66], out7);
})


// Task 8
// Давайте напишем функцию t8, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр.

const out8 = document.querySelector('.out-8');

function t8(block, text) {

}

document.querySelector('.b-8').addEventListener('click', function () {
    t8(out8, ' HelLO wORLd       ');
})


// Task 9
// Давайте напишем функцию t9, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Зададим значение по умолчанию для text - пустую строку, это позволит нам избежать ошибок, если данный аргумент упустили, и добавим в функцию проверку - если block не существует, то функция ничего не выводит.


const out9 = document.querySelector('.out-9');

function t9(text, block) {

}

document.querySelector('.b-9').addEventListener('click', function () {
    t9(' HelLO wORLd       ', out9);
})


// Task 10
// Напишите функцию, t10, которая выводит в out-10 количество переданных ей аргументов (число).

const out10 = document.querySelector('.out-10');

function t10() {

}

document.querySelector('.b-10').addEventListener('click', function () {
    t10(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 11
// Напишите функцию, t11, которая выводит в out-11 cумму переданных ей аргументов (число). Используем arguments.

const out11 = document.querySelector('.out-11');

function t11() {

}

document.querySelector('.b-11').addEventListener('click', function () {
    t11(33, 22, 44, 11, 55, 66, 11, 66);
})

// Task 12
// Напишите функцию, t12, которая выводит в out-12 cумму переданных ей аргументов (число). Используем rest.

const out12 = document.querySelector('.out-12');

function t12() {

}

document.querySelector('.b-12').addEventListener('click', function () {
    t12(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 13
// Напишите функцию, t13, которая выводит в out-13 массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).

const out13 = document.querySelector('.out-13');

function t13(arr, funcArg) {

}

// функции для вывода уже заготовлены
function showArrSpace(arr) {
    out13.innerHTML = arr.join(' ');
}

function showArrUnderscore(arr) {
    out13.innerHTML = arr.join('_');
}

document.querySelector('.b-13').addEventListener('click', function () {
    t13([3, 4, 5], showArrSpace);
    // попробуйте также вместо showArrSpace поставить showArrUnderscore
})


// Task 14
// Напишите функцию, t14, которая выводит в блок block (переданный как аргумент) массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).

const out14 = document.querySelector('.out-14');

function t14(arr, funcArg, block) {

}

// функции для вывода уже заготовлены
function showArrSpace2(arr, block) {
    // вывод в блок пишите как в предыдущем примере
}

function showArrUnderscore2(arr, block) {
    // вывод в блок пишите как в предыдущем примере
}

document.querySelector('.b-14').addEventListener('click', function () {
    t14([3, 4, 5], showArrSpace, out14);
    // попробуйте также вместо showArrSpace2 поставить showArrUnderscore2
})


// Task 15
// Напишите функцию, t15, которая в зависимости от четности аргумента num запускает функцию even, или odd.

const out15 = document.querySelector('.out-15');

function t15(num, even, odd) {

}

function showOne() {
    out15.innerHTML = 'even';
}

function showTwo() {
    out15.innerHTML = 'odd';
}


document.querySelector('.b-15').addEventListener('click', function () {
    t15(5, showOne, showTwo);
})