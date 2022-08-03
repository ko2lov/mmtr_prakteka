"use strict";

/*Функция принимает два массива и целое число n. Функция
копирует каждый элемент первого массива во второй по порядку начиная с
индекса n второго массива и возвращает новый массив.*/

function ex6(arr1, arr2, int) {
    let arr1Start = [];
    let arr1End = [];

    for (let i = 0; i < arr1.length; i++) {
        if(i<int){
            arr1Start.push(arr1[i]);
        }else{
            arr1End.push(arr1[i]);
        }
    }

    let result =  [...arr1Start,...arr2,...arr1End];
    return result;
}

let arr14 = [2,2,2,2,2,2,2,,1312,3,123,12,3,123,123,12,31,23,123,2];
let arr123 =[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
let index = 2;

console.log(arr123.length);

console.log(ex6(arr123,arr14,index));

