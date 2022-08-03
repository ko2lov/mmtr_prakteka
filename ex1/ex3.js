'use strict';


/*Функция принимает массив, состоящий из массивов целых
чисел и возвращает массив состоящий из
наибольшего числа каждого предоставленного подмассива.*/

let arr = [[22,3,3,1,23,2],[2,123123,123123,123123],[123,1233,666,123,20000]];

function maxArrValue(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let lastElementNumber = arr[i].length-1;
        result.push((arr[i].sort((a,b)=> a-b))[lastElementNumber]);
    }

    return result;
}

console.log(maxArrValue(arr));