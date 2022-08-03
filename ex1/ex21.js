"use strict";


/*Функция осуществляет поиск и замену в предложении. Первый
аргумент - это строка, в которой осуществляется поиск и замена. Второй аргумент - это
слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить.
При замене сохраняйется регистр первого символа в исходном слове.*/

function replacer(str,before,after) {
    if (before[0] === before[0].toLowerCase()) {
        after = after[0].toLowerCase() + after.slice(1);
    } else {
        after = after[0].toUpperCase() + after.slice(1);
    }

    return str.replace(before,after);
}
console.log(replacer("Пойдем в магазин", "магазин", "Торговый центр"));
