"use strict";


/*Функция принимает массив и удаляет в нем все "ложные
значения".*/

function nahoi(arr) {
    return arr.filter(item => Boolean(item) == true);
}
let arr = ['', 0, NaN, 1123,'qwd'];

console.log(nahoi(arr));

