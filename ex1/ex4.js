"use strict";
/*Функция принимает строку и целое число и обрезает строку, 
если она длиннее заданной максимальной длины строки
и возвращает обрезанную строку с «…» в конце*/
console.log(Redactor('qiubdiqdqniudqndiuqid',10));

function Redactor(str,maxLenght) {
    if (str.length <= maxLenght) {
        return str;
    }
    return `${str.slice(0,maxLenght)}...`;
}
